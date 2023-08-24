"use client";

import { Prose } from "@/components/prose";
import { getFragmentData } from "@uncnsrdlabel/graphql-shopify-storefront/codegen";
import { pageFragment } from "@uncnsrdlabel/graphql-shopify-storefront/fragments/page";
import { getPage } from "@uncnsrdlabel/graphql-shopify-storefront/utilities";
import { use } from "react";

export type ArticleProps = {
  variables: { handle: string }
};

export function Article(props: ArticleProps) {
  const { variables } = props;

  const { pageByHandle: pageFragmentRef } = use(getPage(
    variables,
  ));

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
