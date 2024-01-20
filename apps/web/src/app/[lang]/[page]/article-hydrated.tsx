"use server";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  getPageHandler,
  getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Article, type ArticleProps } from "./article";

export async function ArticleHydrated({
  children,
  className,
  lang,
  style,
  variables,
}: ArticleProps) {
  const shopifyQueryClient = getShopifyQueryClient();
  await shopifyQueryClient.prefetchQuery({
    queryKey: [`getPage:${JSON.stringify(variables)}`],
    queryFn: () => getPageHandler({ variables, lang }),
  });
  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Article className={className} lang={lang} style={style} variables={variables}>
        {children}
      </Article>
    </HydrationBoundary>
  );
}
