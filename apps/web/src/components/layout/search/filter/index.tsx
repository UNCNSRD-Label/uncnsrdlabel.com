import { FilterItemDropdown } from "@/components/layout/search/filter/dropdown";
import { FilterItem } from "@/components/layout/search/filter/item";
import { ResultOf } from "@graphql-typed-document-node/core";
import {
  ProductCollectionSortFilterItem,
  collectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";

function FilterItemList({
  className,
  list,
}: {
  className?: string;
  list: (
    | ResultOf<typeof collectionFragment>
    | ProductCollectionSortFilterItem
  )[];
}) {
  {list.map(item => item.title).join()}
  return (
    <div className={cn(className)}>
      {list.map(
        (
          item:
            | ResultOf<typeof collectionFragment>
            | ProductCollectionSortFilterItem,
          index,
        ) => (
          <FilterItem key={`filter-item-${item.title || index}`} item={item} />
        ),
      )}
    </div>
  );
}

export function FilterList({
  className,
  list,
  title,
}: {
  className?: string;
  list: (
    | ResultOf<typeof collectionFragment>
    | ProductCollectionSortFilterItem
  )[];
  title?: string;
}) {
  return (
    <>
      <nav className={cn("uppercase", className)}>
        {title ? (
          <h3 className="text-dark dark:text-light hidden font-semibold md:block">
            {title}
          </h3>
        ) : null}
        <Suspense fallback={null}>
          <FilterItemList className="hidden md:block" list={list} />
        </Suspense>
        <Suspense fallback={null}>
          <FilterItemDropdown className="md:hidden" list={list} />
        </Suspense>
      </nav>
    </>
  );
}
