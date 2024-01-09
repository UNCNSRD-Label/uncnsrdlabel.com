"use server";

import { state$ } from "@/lib/store";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
    getPageHandler,
    getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Article, type ArticleProps } from "./article";

export async function ArticleHydrated({
  children,
  className,
  style,
  variables,
}: ArticleProps) {
  const lang = state$.lang.get();

  const shopifyQueryClient = getShopifyQueryClient();
  await shopifyQueryClient.prefetchQuery({
    queryKey: [`getPage:${JSON.stringify(variables)}`],
    queryFn: () => getPageHandler({ variables, lang }),
  });
  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Article className={className} style={style} variables={variables}>
        {children}
      </Article>
    </HydrationBoundary>
  );
}
