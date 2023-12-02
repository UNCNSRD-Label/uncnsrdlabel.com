import { LoadingSkeleton } from "@/components/loading/skeleton";
import { state$ } from "@/lib/store";
import {
  getFragmentData,
  getPageHandler,
  pageFragment,
  seoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  SITE_DOMAIN_WEB
} from "@uncnsrdlabel/lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArticleHydrated as Article } from "./article-hydrated";
import { PageSectionModule } from "./page-section-module";

// export const runtime = "edge";

export async function generateMetadata({
  params: { page: handle },
}: {
  params: { page: string };
}): Promise<Metadata> {
  const lang = state$.lang.get();

  const variables = {
    handle,
  };

  const pageFragmentRef = await getPageHandler({variables, lang});

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return notFound();

  const seo = getFragmentData(seoFragment, page.seo);

  return {
    title: seo?.title || page.title,
    description: seo?.description || page.bodySummary,
    openGraph: {
        description: seo?.description || page.bodySummary,
        title: seo?.title || page.title,
        url: new URL("/", `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}/${handle}`)
    },
  };
}

export default async function PagePage({
  params: { page: handle },
}: {
  params: { page: string };
}) {
  const lang = state$.lang.get();

  const variables = {
    handle,
  };

  const pageFragmentRef = await getPageHandler({ variables, lang });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return notFound();

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <Article key={page.handle} variables={{ handle }}>
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
          {`This document was last updated on ${new Intl.DateTimeFormat(
            undefined,
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            },
          ).format(new Date(page.updatedAt))}.`}
        </span>
      </Article>
    </Suspense>
  );
}
