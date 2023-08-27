"use client";

import { Collection } from "@shopify/hydrogen-react/storefront-api-types";
import { cn } from "@uncnsrdlabel/lib";
import { createUrl } from "@uncnsrdlabel/lib/url";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PartialDeep } from "type-fest";

function PathFilterItem({
  collection,
}: {
  collection: PartialDeep<
    Collection,
    {
      recurseIntoArrays: true;
    }
  >;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(pathname === collection.handle);
  const newParams = new URLSearchParams(searchParams.toString());

  newParams.delete("q");

  useEffect(() => {
    setActive(pathname === collection.handle);
  }, [pathname, collection.handle]);

  return (
    <li className="mt-2 flex text-sm text-gray-400" key={collection.title}>
      <Link
        href={createUrl(collection.handle, newParams)}
        className={cn("w-full hover:text-gray-800 dark:hover:text-gray-100", {
          "text-gray-600 dark:text-gray-400": !active,
          "text-dark dark:text-light font-semibold": active,
        })}
      >
        {collection.title}
      </Link>
    </li>
  );
}

function SortFilterItem({
  collection,
}: {
  collection: PartialDeep<
    Collection,
    {
      recurseIntoArrays: true;
    }
  >;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(
    searchParams.get("sort") === collection.handle,
  );
  const q = searchParams.get("q");

  useEffect(() => {
    setActive(searchParams.get("sort") === collection.handle);
  }, [searchParams, collection.handle]);

  const href =
    collection.handle && collection.handle.length
      ? createUrl(
          pathname,
          new URLSearchParams({
            ...(q && { q }),
            sort: collection.handle,
          }),
        )
      : pathname;

  return (
    <li className="mt-2 flex text-sm text-gray-400" key={collection.title}>
      <Link
        prefetch={false}
        href={href}
        className={cn("w-full hover:text-gray-800 dark:hover:text-gray-100", {
          "text-gray-600 dark:text-gray-400": !active,
          "text-dark dark:text-light font-semibold": active,
        })}
      >
        {collection.title}
      </Link>
    </li>
  );
}

export function FilterItem({
  collection,
}: {
  collection: PartialDeep<
    Collection,
    {
      recurseIntoArrays: true;
    }
  >;
}) {
  return "path" in collection ? (
    <PathFilterItem collection={collection} />
  ) : (
    <SortFilterItem collection={collection} />
  );
}
