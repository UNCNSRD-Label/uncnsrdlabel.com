"use client";

import { createIntl } from "@formatjs/intl";
import { ResultOf } from "@graphql-typed-document-node/core";
import { collectionFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { useParams } from "next/navigation";
import { Usable, use, useEffect, useState } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { RefineBy } from "./refine";
import { PathRefineItem } from "./refine/item";

export function CollectionsNav({
  className,
  collections,
  dictionary,
  lang,
  title,
}: {
  className?: string;
  collections: ResultOf<typeof collectionFragment>[];
  dictionary: Usable<ResolvedIntlConfig["messages"]>;
  lang: Intl.BCP47LanguageTag;
  title?: string;
}) {
  const messages = use<ResolvedIntlConfig["messages"]>(dictionary);

  const intl = createIntl({
    locale: lang,
    messages,
  });

  const params = useParams();

  const [active, setActive] = useState("All");

  useEffect(() => {
    collections.forEach((collection) => {
      if (params.collection === collection.handle) {
        setActive(collection.title);
      }
    });
  }, [params.collection, collections]);

  return (
    <RefineBy
      active={active}
      className={cn(
        {
          hidden:
            process.env.NEXT_PUBLIC_FEATURE_FLAG_SEARCH_COLLECTIONS_ENABLE ===
            "false",
        },
        className,
      )}
      title={
        title ?? intl.formatMessage({ id: "component.CollectionsNav.title" })
      }
    >
      {collections.map((item) => (
        <PathRefineItem key={item.title} item={item} />
      ))}
    </RefineBy>
  );
}
