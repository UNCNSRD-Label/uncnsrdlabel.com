import { LoadingDots } from "@/components/loading-dots";
import PageVideos from "@/components/page/videos";
import { state$ } from "@/lib/store";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import {
  getPageQuery,
  getQueryKey,
  getShopifyGraphQL,
  getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getInContextVariables } from "@uncnsrdlabel/lib";
import { Suspense } from "react";

// TODO: Change to videosHydrated and pass query and variables (handle) in props
export async function PageVideosHydrated({
  handle,
  ...props
}: {
  handle: string;
}) {
  const lang = state$.lang.get();

  const shopifyQueryClient = getShopifyQueryClient();

  const variables = { handle };

  const inContextVariables = getInContextVariables(lang);

  const variablesWithContext = { ...inContextVariables, ...variables };

  await shopifyQueryClient.prefetchQuery(getQueryKey(getPageQuery, variablesWithContext), () =>
    getShopifyGraphQL(
      // TODO: Change to getPageImageQuery to retrieve smaller data response
      getPageQuery,
      variables
    ),
  );

  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <Suspense fallback={<LoadingDots />}>
      <Hydrate state={dehydratedState}>
        <PageVideos {...props} handle={handle} />
      </Hydrate>
    </Suspense>
  );
}

export default PageVideosHydrated;
