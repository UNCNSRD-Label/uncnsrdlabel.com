import { SortFilterItem } from "@uncnsrdlabel/lib/constants.js";
import { FilterItemDropdown } from "@uncnsrdlabel/ui/components/layout/search/filter/dropdown.js";
import { FilterItem } from "@uncnsrdlabel/ui/components/layout/search/filter/item.js";

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <div className="hidden md:block">
      {list.map((item: ListItem, index) => (
        <FilterItem key={item.title || index} item={item} />
      ))}
    </div>
  );
}

export function FilterList({
  list,
  title,
}: {
  list: ListItem[];
  title?: string;
}) {
  return (
    <>
      <nav className="col-span-2 w-full flex-none px-6 py-2 uppercase md:py-4 md:pl-10">
        {title ? (
          <h3 className="hidden font-semibold text-dark dark:text-light md:block">
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
