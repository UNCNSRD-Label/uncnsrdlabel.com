"use server";

// TODO: Remove this deprecated file

import { VideosHydrated } from "@/components/page/videos/videos-hydrated";
import { state$ } from "@/lib/store";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
    getPageQuery,
    getQueryKey,
    getShopifyGraphQL,
    getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getLangProperties } from "@uncnsrdlabel/lib";

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

  const inContextVariables = getLangProperties(lang);

  const variablesWithContext = { ...inContextVariables, ...variables };

  await shopifyQueryClient.prefetchQuery({
    // @ts-ignore
    queryKey: getQueryKey(getPageQuery, variablesWithContext),
    queryFn: () =>
      getShopifyGraphQL(
        // TODO: Change to getPageImagesQuery to retrieve smaller data response
        getPageQuery,
        variables,
      ),
  });

  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <VideosHydrated {...props} handle={handle} />
    </HydrationBoundary>
  );
}
