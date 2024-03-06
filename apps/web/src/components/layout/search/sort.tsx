"use client";

import { createIntl } from "@formatjs/intl";
import {
  type ProductCollectionSortItem,
  type ProductSortItem,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { useSearchParams } from "next/navigation";
import { Usable, use, useEffect, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { RefineBy } from "./refine";
import { SortRefineItem } from "./refine/item";

export function SortBy({
  className,
  defaultSort,
  dictionary,
  lang,
  sortItems,
  title,
}: {
  className?: string;
  defaultSort: ProductCollectionSortItem | ProductSortItem;
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  sortItems: ProductCollectionSortItem[] | ProductSortItem[];
  title?: string;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const searchParams = useSearchParams();

  const [active, setActive] = useState<string>(
    sortItems.find((sortItem) => sortItem.slug === searchParams?.get("sort"))
      ?.title ?? defaultSort.title,
  );

  useEffect(() => {
    const matchedSortItem =
      sortItems.find((sortItem) => sortItem.slug === searchParams?.get("sort"))
        ?.title ?? defaultSort.title;
    setActive(matchedSortItem);
  }, [defaultSort.title, searchParams, sortItems]);

  return (
    <RefineBy
      active={active}
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
      {sortItems.map((item) => (
        <SortRefineItem key={item.title} item={item} />
      ))}
    </RefineBy>
  );
}
