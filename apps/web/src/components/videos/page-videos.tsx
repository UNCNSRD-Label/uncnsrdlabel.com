"use client";

// TODO: Remove this deprecated file

import { LoadingDots } from "@/components/loading/dots";
import { Videos } from "@/components/media/videos";
import {
  getFragmentData,
  pageFragment,
  pageQuery,
  useGetShopifyGraphQL,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Suspense } from "react";

export function PageVideos({ handle, ...props }: { handle: string }) {
  const variables = { handle };

  const { data, error, isError, isLoading } = useGetShopifyGraphQL(
    pageQuery,
    variables,
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  if (!data) {
    return null;
  }

  const { page: pageFragmentRef } = data;

  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return null;

  const mediaVideos = page?.mediaVideos?.references?.edges.map(
    (edge) => edge?.node,
  );

  const videos = mediaVideos?.filter(
    (node) => node.__typename === "Video",
  ) as unknown as FragmentType<typeof videoFragment>[];

  return (
    <Suspense fallback={<LoadingDots />}>
      <Videos {...props} videos={videos} />
    </Suspense>
  );
}
