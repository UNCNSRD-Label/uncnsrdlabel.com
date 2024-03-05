import { CollectionsNav } from "@/components/layout/search/collections";
import { SortBy } from "@/components/layout/search/sort";
import { getDictionary } from "@/lib/dictionary";
import { type LayoutProps } from "@/types/next";
import {
  getCollectionRefsHandler,
  productCollectionSortItemDefault,
  productCollectionSortItems,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { PropsWithChildren } from "react";

export default async function SearchCollectionLayout({
  children,
  params: { lang },
}: PropsWithChildren<LayoutProps>) {
  const dictionary = getDictionary({ lang });

  const collections = await getCollectionRefsHandler({
    lang,
    variables: { first: 128 },
  });

  return (
    <>
      <CollectionsNav
        className="flex-none sm:mt-8 md:order-1 md:w-1/6"
        collections={collections}
        dictionary={dictionary}
        lang={lang}
      />
      <SortBy
        className="flex-none sm:mt-8 md:order-3 md:w-1/6"
        defaultSort={productCollectionSortItemDefault}
        dictionary={dictionary}
        lang={lang}
        sortItems={productCollectionSortItems}
      />
      {children}
    </>
  );
}
