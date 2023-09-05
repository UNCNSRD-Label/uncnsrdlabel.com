import { dehydrate, Hydrate } from "@tanstack/react-query";
import {
  getPage,
  getShopifyQueryClient
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Article, type ArticleProps } from "./article";

export default async function ArticleHydrated({
  variables
}: ArticleProps) {
  const shopifyQueryClient = getShopifyQueryClient();
  await shopifyQueryClient.prefetchQuery([`getPage:${JSON.stringify(variables)}`], () => getPage(variables));
  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Article variables={variables} />
    </Hydrate>
  );
}
