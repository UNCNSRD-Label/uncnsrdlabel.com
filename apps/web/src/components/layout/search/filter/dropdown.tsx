"use client";

import { CaretRightIcon } from "@/components/icons/caret-right";
import { ResultOf } from "@graphql-typed-document-node/core";
import {
  ProductCollectionSortFilterItem,
  collectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FilterItem } from "./item";

export function FilterItemDropdown({
  className,
  list,
}: {
  className?: string;
  list: (
    | ResultOf<typeof collectionFragment>
    | ProductCollectionSortFilterItem
  )[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState("");
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem) => {
      if (
        ("path" in listItem && pathname === listItem.path) ||
        ("slug" in listItem && searchParams.get("sort") === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <div
        className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30"
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
      >
        <div>{active}</div>
        <CaretRightIcon className="h-4 rotate-90" />
      </div>
      {openSelect && (
        <ul
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >
          {list.map((item, index) => (
            <FilterItem key={`filter-item-dropdown-${item.title || index}`} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
