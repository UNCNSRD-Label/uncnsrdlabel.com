"use client";

import { Prose } from "@/components/prose";
import { getFragmentData, getPageQuery, pageFragment, useGetShopifyGraphQL } from "@uncnsrdlabel/graphql-shopify-storefront";

export type ArticleProps = {
  variables: { handle: string }
};

export function Article(props: ArticleProps) {
  const { variables } = props;

  const { data = {} } = useGetShopifyGraphQL(
    getPageQuery,
    variables,
  );

  const { pageByHandle: pageFragmentRef } = data;

  const page = getFragmentData(pageFragment, pageFragmentRef);

  return (
    <article className="grid gap-0.5">
      <h1 className="mb-8 text-5xl uppercase">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
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
    </article>
  );
}
