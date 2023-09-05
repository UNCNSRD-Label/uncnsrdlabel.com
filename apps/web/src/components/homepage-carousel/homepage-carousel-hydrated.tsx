import { LoadingDots } from "@/components/loading-dots";
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
  style,
}: {
  style?: CSSProperties;
}) {
  const shopifyQueryClient = getShopifyQueryClient();

  const variables = { handle: "home" };

  const inContextVariables = getInContextVariables();

  const variablesWithContext = { ...inContextVariables, ...variables };

  await shopifyQueryClient.prefetchQuery(getQueryKey(getPageQuery, variablesWithContext), () =>
    getShopifyGraphQL(
      // TODO: Change to getPageImageQuery to retrieve smaller data response
      getPageQuery,
      { handle: "home" },
    ),
  );

  const dehydratedState = dehydrate(shopifyQueryClient);

  return (
    <Suspense fallback={<LoadingDots />}>
      <Hydrate state={dehydratedState}>
        <HomepageCarousel style={style} />
      </Hydrate>
    </Suspense>
  );
}

export default HomepageCarouselHydrated;
