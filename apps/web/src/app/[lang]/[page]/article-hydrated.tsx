import { server } from "@/clients/shopify";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  getShopifyQueryClient
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Article, type ArticleProps } from "./article";

export async function ArticleHydrated({
  children,
  className,
  style,
  variables
}: ArticleProps) {
  const shopifyQueryClient = getShopifyQueryClient();
  await shopifyQueryClient.prefetchQuery({
    queryKey: [`getPage:${JSON.stringify(variables)}`],
    queryFn: () => server.getPage(variables),
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

export default ArticleHydrated;