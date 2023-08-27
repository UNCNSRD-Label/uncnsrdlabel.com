import { FilterItemDropdown } from "@/components/layout/search/filter/dropdown";
import { FilterItem } from "@/components/layout/search/filter/item";
import { Collection } from "@shopify/hydrogen/storefront-api-types";
import { PartialDeep } from "type-fest";

function FilterItemList({
  collections,
}: {
  collections: PartialDeep<
    Collection,
    {
      recurseIntoArrays: true;
    }
  >[];
}) {
  return (
    <div className="hidden md:block">
      {collections.map((collection, index) => (
        <FilterItem key={collection.title || index} collection={collection} />
      ))}
    </div>
  );
}

export function FilterList({
  collections,
  title,
}: {
  collections: PartialDeep<
    Collection,
    {
      recurseIntoArrays: true;
    }
  >[];
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
          <FilterItemList collections={collections} />
        </ul>
        <ul className="md:hidden">
          <FilterItemDropdown collections={collections} />
        </ul>
      </nav>
    </>
  );
}
