"use client";

import { CaretRightIcon } from "@/components/icons/caret-right";
import { ProductCollectionSortFilterItem } from "@uncnsrdlabel/graphql-shopify-storefront";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FilterItem } from "./item";

export function FilterItemDropdown({ list }: { list: ProductCollectionSortFilterItem[] }) {
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
    list.forEach((collection) => {
      if (
        ("path" in collection && pathname === collection.path) ||
        ("slug" in collection && searchParams.get("sort") === collection.handle)
      ) {
        setActive(collection.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30"
      >
        <div>{active}</div>
        <CaretRightIcon className="h-4 rotate-90" />
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >        
          {list.map((item, index) => (
            <FilterItem key={item.title || index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
