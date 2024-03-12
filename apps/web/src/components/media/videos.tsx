import { Video } from "@/components/media/video";
import {
  getFragmentData,
  imageFragment,
  videoFragment,
  type FragmentType,
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
      {videos?.map((videoFragmentRef, index) => {
        const video = getFragmentData(videoFragment, videoFragmentRef);

        if (video.__typename !== "Video") {
          return null;
        }

        const previewImage = getFragmentData(
          imageFragment,
          video.previewImage,
        );

        return (
          <Video
            alt={video?.alt}
            autoPlay={index === 0 ? true : false}
            className={className}
            id={`${idPrefix}-${index}`}
            loop={true}
            key={video.id}
            poster={previewImage}
            ref={videoElementRefs?.[index]}
            url={video.sources
              .filter((source) => source.format !== "m3u8")
              .map((source) => ({
                src: source.url,
                type: `video/${source.format}`,
              }))}
          />
        );
      })}
    </>
  ) : null;
}
