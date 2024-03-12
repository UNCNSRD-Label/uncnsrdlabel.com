import { NavigationEvents } from "@/components/navigation-events";
import { getAlternativeLanguages } from "@/lib/i18n";
import { getCanonical } from "@/lib/metadata";
import { type PageProps } from "@/types/next";
import {
  getFragmentData,
  getLocalizationDetailsHandler,
  getPageHandler,
  pageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { SITE_DOMAIN_WEB } from "@uncnsrdlabel/lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Article } from "./article";
import { PageSectionModule } from "./page-section-module";

export async function generateMetadata({
  params: { lang, page: handle },
}: PageProps & {
  params: { page: string };
}): Promise<Metadata> {
  const localization = await getLocalizationDetailsHandler({ lang });

  const variables = {
    handle,
  };

  const pageFragmentRef = await getPageHandler({ variables, lang });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return notFound();

  const seo = getFragmentData(seoFragment, page.seo);

  const path = `/${handle}`;

  return {
    alternates: {
      canonical: getCanonical({
        lang,
        path
      }),
      languages: getAlternativeLanguages({ localization, path }),
    },
    title: seo?.title || page.title,
    description: seo?.description || page.bodySummary,
    openGraph: {
      description: seo?.description || page.bodySummary,
      title: seo?.title || page.title,
      url: new URL(
        "/",
        `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/${handle}`,
      ),
    },
  };
}

export default async function PagePage({
  params: { lang, page: handle },
}: PageProps & {
  params: { page: string };
}) {
  const variables = {
    handle,
  };

  const pageFragmentRef = await getPageHandler({ variables, lang });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!pageFragmentRef || !page) return notFound();

  return (
    <>
      <Article key={page.handle} lang={lang} pageFragmentRef={pageFragmentRef}>
        <h1 className="sr-only">{page.title}</h1>
        {page.sections?.references?.nodes?.map(
          (pageSectionModuleFragmentRef, index) => {
            if (pageSectionModuleFragmentRef.__typename === "Metaobject") {
              return (
                <PageSectionModule
                  key={index}
                  pageSectionModuleFragmentRef={pageSectionModuleFragmentRef}
                />
              );
            }
          },
        )}

        <span className="mb-8 hidden text-sm italic">
          {`This document was last updated on ${new Intl.DateTimeFormat(lang, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(page.updatedAt))}.`}
        </span>
      </Article>
      <Suspense fallback={null}>
        <NavigationEvents pageType="page" />
      </Suspense>
    </>
  );
}
