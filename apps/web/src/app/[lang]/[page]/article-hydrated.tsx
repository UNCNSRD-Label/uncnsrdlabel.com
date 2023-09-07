import { server } from "@/clients/shopify";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import {
  getShopifyQueryClient
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Article, type ArticleProps } from "./article";

export default async function ArticleHydrated({
  variables
}: ArticleProps) {
  const shopifyQueryClient = getShopifyQueryClient();
  await shopifyQueryClient.prefetchQuery([`getPage:${JSON.stringify(variables)}`], () => server.getPage(variables));
  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Article variables={variables} />
    </Hydrate>
  );
}
