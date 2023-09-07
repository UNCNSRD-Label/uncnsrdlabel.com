import { LoadingDots } from "@/components/loading-dots";
import { state$ } from "@/store";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import {
  getPageQuery,
  getQueryKey,
  getShopifyGraphQL,
  getShopifyQueryClient,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { getInContextVariables } from "@uncnsrdlabel/lib";
import { Suspense, type CSSProperties } from "react";
import { HomepageCarousel } from "./homepage-carousel";

// TODO: Change to CarouselHydrated and pass query and variables (handle) in props
export async function HomepageCarouselHydrated({
  handle,
  style,
}: {
  handle: string;
  style?: CSSProperties;
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
        <HomepageCarousel handle={handle} style={style} />
      </Hydrate>
    </Suspense>
  );
}

export default HomepageCarouselHydrated;
