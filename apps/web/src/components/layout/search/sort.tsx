"use client";

import { createIntl } from "@formatjs/intl";
import {
  productCollectionSorting,
  type ProductCollectionSortItem,
  type ProductSortItem,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Usable, use } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { RefineBy } from "./refine";
import { SortRefineItem } from "./refine/item";

export function SortBy({
  className,
  defaultSort,
  dictionary,
  lang,
  title,
}: {
  className?: string;
  defaultSort: ProductCollectionSortItem | ProductSortItem;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  title?: string;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  return (
    <RefineBy
      className={cn(
        {
          hidden:
            process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE !==
            "true",
        },
        className,
      )}
      title={title ?? intl.formatMessage({ id: "component.SortBy.title" })}
    >
      {productCollectionSorting.map((item) => (
        <SortRefineItem key={item.title} item={item} />
      ))}
    </RefineBy>
  );
}
