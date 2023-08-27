"use client";

import { ProductCollectionSortFilterItem } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { createUrl } from "@uncnsrdlabel/lib/url";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function PathFilterItem({ item }: { item: ProductCollectionSortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const path = `/collections/${item.handle}`;
  const [active, setActive] = useState(pathname === path);
  const newParams = new URLSearchParams(searchParams.toString());

  newParams.delete("q");

  useEffect(() => {
    setActive(pathname === path);
  }, [pathname, path]);

  return (
    <li className="mt-2 flex text-sm text-gray-400" key={item.title}>
      <Link
        href={createUrl(path, newParams)}
        className={cn("w-full hover:text-gray-800 dark:hover:text-gray-100", {
          "text-gray-600 dark:text-gray-400": !active,
          "font-semibold text-dark dark:text-light": active,
        })}
      >
        {item.title}
      </Link>
    </li>
  );
}

function SortFilterItem({ item }: { item: ProductCollectionSortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const path = `/collections/${item.handle}`;
  const [active, setActive] = useState(searchParams.get("sort") === path);
  const q = searchParams.get("q");

  useEffect(() => {
    setActive(searchParams.get("sort") === path);
  }, [searchParams, path]);

  const href =
    path && path.length
      ? createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
            sort: path,
          }),
        )
      : pathname;

  return (
    <li className="mt-2 flex text-sm text-gray-400" key={item.title}>
      <Link
        prefetch={false}
        href={href}
        className={cn("w-full hover:text-gray-800 dark:hover:text-gray-100", {
          "text-gray-600 dark:text-gray-400": !active,
          "font-semibold text-dark dark:text-light": active,
        })}
      >
        {item.title}
      </Link>
    </li>
  );
}

export function FilterItem({ item }: { item: ProductCollectionSortFilterItem }) {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
