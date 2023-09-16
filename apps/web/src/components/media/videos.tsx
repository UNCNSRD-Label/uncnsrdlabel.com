"use client";

import { Video } from "@/components/video";
import { WithVideo } from "@/types/shopify";

export function Videos({
  className,
  videos,
}: {
  className?: string;
  videos?: WithVideo[];
}) {
  return videos && videos.length > 0 ? (
    <>
      {videos?.map((video, index) => {
        return (
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
        );
      })}
    </>
  ) : null;
}

export default Videos;