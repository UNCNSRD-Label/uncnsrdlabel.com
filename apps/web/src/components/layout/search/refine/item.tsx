"use client";

import { ResultOf } from "@graphql-typed-document-node/core";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  ProductCollectionSortItem,
  ProductSortItem,
  collectionFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, createUrl } from "@uncnsrdlabel/lib";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function ListItem({
  active,
  href,
  title,
}: {
  active: boolean;
  href: string;
  title: string;
}) {
  return (
    <li className="mt-2 flex text-sm text-gray-400" key={title}>
      <Link
        className={cn("w-full hover:text-gray-800 dark:hover:text-gray-100", {
          "text-gray-600 dark:text-gray-400": !active,
          "text-dark dark:text-light font-bold": active,
        })}
        href={href}
        prefetch={false}
      >
        {title}
      </Link>
    </li>
  );
}

export function PathRefineItem({
  item,
}: {
  item: ResultOf<typeof collectionFragment>;
}) {
  const params = useParams();

  const searchParams = useSearchParams();
  
  const path = `/search/${item.handle}`;
  
  const newParams = new URLSearchParams(searchParams.toString());

  newParams.delete("q");

  const [active, setActive] = useState(params.collection === item.handle);

  useEffect(() => {
    setActive(params.collection === item.handle);
  }, [item.handle, params]);

  const href = createUrl(path, newParams);

  const title = item.title;

  return <ListItem active={active} href={href} title={title} />;
}

export function SortRefineItem({
  item,
}: {
  item: ProductCollectionSortItem | ProductSortItem;
}) {
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

  const title = item.title;

  return <ListItem active={active} href={href} title={title} />;
}
