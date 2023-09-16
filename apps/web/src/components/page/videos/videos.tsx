"use client";

import { LoadingDots } from "@/components/loading-dots";
import MediaVideos from "@/components/media/videos";
import { WithVideo } from "@/types/shopify";
import {
  getFragmentData,
  getPageQuery,
  pageFragment,
  useGetShopifyGraphQL
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Suspense } from "react";

export function Videos({ handle, ...props }: { handle: string }) {
  const variables = { handle };

  const { data } = useGetShopifyGraphQL(getPageQuery, variables);

  if (!data) return null;

  const { pageByHandle: pageFragmentRef } = data;

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return null;

  const mediaVideos = page.mediaVideos?.references?.edges
    .map((edge) => edge?.node);

  const videos = mediaVideos?.filter((node): node is WithVideo => node?.__typename === "Video");

  return (
    <Suspense fallback={<LoadingDots />}>
      <MediaVideos {...props} videos={videos} />
    </Suspense>
  );
}
