import { server } from "@/clients/shopify";
import {
  getFragmentData,
  pageFragment,
  seoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, type ClassValue } from "@uncnsrdlabel/lib";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CSSProperties } from "react";
import { ArticleHydrated as Article } from "./article-hydrated";
import { PageSectionModule } from "./page-section-module";

export { revalidate } from "@uncnsrdlabel/lib";

// export const runtime = "edge";

export async function generateMetadata({
  params: { page: handle },
}: {
  params: { page: string };
}): Promise<Metadata> {
  const pageFragmentRef = await server.getPage({ handle });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return notFound();

  const seo = getFragmentData(seoFragment, page.seo);

  return {
    title: seo?.title || page.title,
    description: seo?.description || page.bodySummary,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(page.title)}`,
          width: 1200,
          height: 630,
        },
      ],
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page({
  params: { page: handle },
}: {
  params: { page: string };
}) {
  const pageFragmentRef = await server.getPage({ handle });

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return notFound();

  return (
    <Article
      className={cn(
        "grid",
        JSON.parse(page.classes?.value ?? "") as ClassValue,
      )}
      key={page.handle}
      style={JSON.parse(page.style?.value ?? "") as CSSProperties}
      variables={{ handle }}
    >
      {page.sections?.references?.nodes?.map((pageSectionModuleFragmentRef) => {
        if (pageSectionModuleFragmentRef.__typename === "Metaobject") {
          return <PageSectionModule pageSectionModuleFragmentRef={pageSectionModuleFragmentRef}  />
        }
      })}

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
  );
}
