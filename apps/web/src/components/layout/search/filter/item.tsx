"use client";

import { ResultOf } from '@graphql-typed-document-node/core';
import { ProductCollectionSortFilterItem, collectionFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib/classname.js";
import { createUrl } from "@uncnsrdlabel/lib/url";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function PathFilterItem({ item }: { item: ResultOf<typeof collectionFragment> }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const path = `/search/${item.handle}`;
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
  const [active, setActive] = useState(searchParams.get("sort") === item.slug);
  const q = searchParams.get("q");

  useEffect(() => {
    setActive(searchParams.get("sort") === item.slug);
  }, [searchParams, item.slug]);

  const href =
    item.slug && item.slug.length
      ? createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
            sort: item.slug,
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

export function FilterItem({ item }: { item: ResultOf<typeof collectionFragment> | ProductCollectionSortFilterItem }) {
  return 'handle' in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
