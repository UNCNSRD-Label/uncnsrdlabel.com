import getQueryClient from "@/clients/react-query";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import { getPage } from "@uncnsrdlabel/graphql-shopify-storefront";
import { Article, type ArticleProps } from "./article";

export default async function ArticleHydrated({
  variables
}: ArticleProps) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([`getPage:${JSON.stringify(variables)}`], () => getPage(variables));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Article variables={variables} />
    </Hydrate>
  );
}
