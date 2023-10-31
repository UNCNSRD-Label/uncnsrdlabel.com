import { FilterItemDropdown } from "@/components/layout/search/filter/dropdown";
import { FilterItem } from "@/components/layout/search/filter/item";
import { ResultOf } from "@graphql-typed-document-node/core";
import {
  ProductCollectionSortFilterItem,
  collectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";

function FilterItemList({
  list,
}: {
  list: (
    | ResultOf<typeof collectionFragment>
    | ProductCollectionSortFilterItem
  )[];
}) {
  return (
    <div className="hidden md:block">
      {list.map(
        (
          item:
            | ResultOf<typeof collectionFragment>
            | ProductCollectionSortFilterItem,
          index,
        ) => (
          <FilterItem key={item.title || index} item={item} />
        ),
      )}
    </div>
  );
}

export function FilterList({
  list,
  title,
}: {
  list: (
    | ResultOf<typeof collectionFragment>
    | ProductCollectionSortFilterItem
  )[];
  title?: string;
}) {
  return (
    <>
      <nav className="col-span-2 w-full flex-none px-6 py-2 uppercase md:py-4 md:pl-10">
        {title ? (
          <h3 className="text-dark dark:text-light hidden font-semibold md:block">
            {title}
          </h3>
        ) : null}
        <ul className="hidden md:block">
          <FilterItemList list={list} />
        </ul>
        <ul className="md:hidden">
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}
