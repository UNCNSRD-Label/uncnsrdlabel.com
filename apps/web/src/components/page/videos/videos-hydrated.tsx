import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {
    getInContextVariables,
    getPageQuery,
    getQueryKey,
    getShopifyGraphQL,
    getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Videos } from "./videos";

// TODO: Change to videosHydrated and pass query and variables (handle) in props
export async function VideosHydrated({ handle, lang, ...props }: { handle: string; lang: Intl.BCP47LanguageTag; }) {
  if (!lang) {
    console.error("No lang in VideosHydrated");
    return null;
  }

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
        variables,
      ),
  });

  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Videos {...props} handle={handle} />
    </HydrationBoundary>
  );
}
