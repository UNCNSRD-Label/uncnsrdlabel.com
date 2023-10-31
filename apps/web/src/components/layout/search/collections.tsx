"use server";

import { state$ } from "@/lib/store";
import { getCollectionRefsHandler } from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { FilterList } from "./filter";

async function CollectionList() {
  const lang = state$.lang.get();

  const collections = await getCollectionRefsHandler({}, lang);

  return <FilterList list={collections} title="Collections" />;
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-gray-800 dark:bg-gray-300";
const items = "bg-gray-400 dark:bg-gray-700";

export async function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 pl-10 lg:block">
          <div className={cn(skeleton, activeAndTitles)} />
          <div className={cn(skeleton, activeAndTitles)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
          <div className={cn(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
