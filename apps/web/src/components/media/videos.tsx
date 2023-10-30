"use client";

import { Video } from "@/components/media/video";
// import { WithVideo } from "@/types/shopify";
import {
  FragmentType,
  getFragmentData,
  videoFragment
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type MutableRefObject } from "react";

export function Videos({
  className,
  idPrefix,
  videoElementRefs,
  videos,
}: {
  className?: string;
  idPrefix?: string;
  videoElementRefs?: MutableRefObject<HTMLElement | null>[];
  videos?: FragmentType<typeof videoFragment>[];
}) {
  return videos && videos.length > 0 ? (
    <>
      {videos
      ?.map((videoFragmentRef, index) => {
        const video = getFragmentData(videoFragment, videoFragmentRef);

        return video.__typename === "Video" ? (
          <Video
            alt={video?.alt}
            autoPlay={index === 0 ? true : false}
            className={className}
            id={`${idPrefix}-${index}`}
            loop={true}
            key={video.id}
            poster={video.previewImage?.url}
            ref={videoElementRefs?.[index]}
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