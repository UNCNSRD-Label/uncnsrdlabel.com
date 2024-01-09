import { state$ } from "@/lib/store";
import { getCollectionRefsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { FilterList } from "./filter";

async function CollectionList({ className }: { className?: string }) {
  const lang = state$.lang.get();
  
  const intl = state$.intl.get();

  const collections = await getCollectionRefsHandler({
    lang,
    variables: { first: 100 },
  });

  return (
    <FilterList
      className={className}
      list={collections}
      title={intl.formatMessage({ id: "component.CollectionList.title" })}
    />
  );
}

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-gray-800 dark:bg-gray-300";
const items = "bg-gray-400 dark:bg-gray-700";

export async function Collections({ className }: { className?: string }) {
  return (
    <Suspense
      fallback={
        <div className={className}>
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
      <CollectionList className={className} />
    </Suspense>
  );
}
