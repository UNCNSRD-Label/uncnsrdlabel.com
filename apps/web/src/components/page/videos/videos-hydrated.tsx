import { LoadingDots } from "@/components/loading-dots";
import { state$ } from "@/lib/store";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  getPageQuery,
  getQueryKey,
  getShopifyGraphQL,
  getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getInContextVariables } from "@uncnsrdlabel/lib";
import { Suspense } from "react";
import { Videos } from "./videos";

// TODO: Change to videosHydrated and pass query and variables (handle) in props
export async function VideosHydrated({
  handle, ...props
}: {
  handle: string;
}) {
  const lang = state$.lang.get();

  const shopifyQueryClient = getShopifyQueryClient();

  const variables = { handle };

  const inContextVariables = getInContextVariables(lang);

  const variablesWithContext = { ...inContextVariables, ...variables };

  await shopifyQueryClient.prefetchQuery({
    // @ts-ignore
    queryKey: getQueryKey(getPageQuery, variablesWithContext),
    queryFn: () =>
    getShopifyGraphQL(
      // TODO: Change to getPageImagesQuery to retrieve smaller data response
      getPageQuery,
      variables
    )
  });

  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <Suspense fallback={<LoadingDots />}>
      <HydrationBoundary state={dehydratedState}>
        <Videos {...props} handle={handle} />
      </HydrationBoundary>
    </Suspense>
  );
}

export default VideosHydrated;
