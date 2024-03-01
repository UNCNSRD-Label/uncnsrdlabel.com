"use server";

// TODO: Remove this deprecated file

import { VideosHydrated } from "@/components/page/videos/videos-hydrated";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
  getInContextVariables,
  getShopifyGraphQL,
  getShopifyQueryClient,
  pageQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getQueryKey } from "@uncnsrdlabel/lib";

// TODO: Change to videosHydrated and pass query and variables (handle) in props
export async function PageVideosHydrated({
  handle,
  lang,
  ...props
}: {
  handle: string;
  lang: Intl.BCP47LanguageTag;
}) {
  if (!lang) {
    console.error("No lang in PageVideosHydrated");
    return null;
  }

  const shopifyQueryClient = getShopifyQueryClient();

  const variables = { handle };

  const inContextVariables = getInContextVariables(lang);

  const variablesWithContext = { ...inContextVariables, ...variables };

  await shopifyQueryClient.prefetchQuery({
    // @ts-ignore
    queryKey: getQueryKey(pageQuery, variablesWithContext),
    queryFn: () =>
      getShopifyGraphQL(
        // TODO: Change to getPageImagesQuery to retrieve smaller data response
        pageQuery,
        variables,
      ),
  });

  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <VideosHydrated {...props} handle={handle} lang={lang} />
    </HydrationBoundary>
  );
}
