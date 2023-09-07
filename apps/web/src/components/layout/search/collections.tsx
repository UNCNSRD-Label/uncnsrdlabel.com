import { server } from "@/clients/shopify";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { FilterList } from "./filter";

async function CollectionList() {
  const collections = await server.getCollections({});

  return <FilterList list={collections} title="Collections" />;
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-gray-800 dark:bg-gray-300";
const items = "bg-gray-400 dark:bg-gray-700";

export function Collections() {
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
