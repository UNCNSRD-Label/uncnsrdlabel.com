import { LoadingDots } from "@/components/loading/dots";
import { Videos as MediaVideos } from "@/components/media/videos";
import {
  getFragmentData,
  pageFragment,
  videoFragment,
  type FragmentType
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { Suspense } from "react";

export async function Videos({ pageFragmentRef, ...props }: { pageFragmentRef: FragmentType<typeof pageFragment>; }) {
  const page = getFragmentData(pageFragment, pageFragmentRef);

  if (!page) return null;

  const mediaVideos = page.mediaVideos?.references?.edges.map(
    (edge) => edge?.node,
  );

  const videos = mediaVideos?.filter(
    (node) => node.__typename === "Video",
  ) as unknown as FragmentType<typeof videoFragment>[];

  return (
    <Suspense fallback={<LoadingDots />}>
      <MediaVideos {...props} videos={videos} />
    </Suspense>
  );
}
