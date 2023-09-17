"use client";

import { Video } from "@/components/media/video";
// import { WithVideo } from "@/types/shopify";
import {
  FragmentType,
  getFragmentData,
  videoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";

export function Videos({
  className,
  videos,
}: {
  className?: string;
  videos?: FragmentType<typeof videoFragment>[];
  // videos?: WithVideo[];
}) {
  return videos && videos.length > 0 ? (
    <>
      {videos
      // ?.filter((node): node is WithVideo => node.__typename === "Video")
      ?.map((videoFragmentRef, index) => {
        const video = getFragmentData(videoFragment, videoFragmentRef);

        return video.__typename === "Video" ? (
          <Video
            alt={video?.alt}
            autoPlay={index === 0 ? true : false}
            className={className}
            loop={true}
            key={video.id}
            poster={video.previewImage?.url}
            url={video.sources.filter(source => source.format !== 'm3u8').map((source) => ({
              src: source.url,
              type: `video/${source.format}`,
            }))}
          />
        ) : null;
      })}
    </>
  ) : null;
}

export default Videos;