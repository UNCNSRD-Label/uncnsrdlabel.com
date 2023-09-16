"use client";

import { Video } from "@/components/video";
import { WithVideo } from "@/types/shopify";

export function Videos({
  videos,
}: {
  videos: WithVideo[];
}) {
  return videos.length > 0 ? (
    <>
      {videos.map((video, index) => {
        return (
          <Video
            alt={video?.alt}
            autoPlay={index === 0 ? true : false}
            className="aspect-3/4 relative w-full lg:w-4/6"
            loop={true}
            key={video.id}
            poster={video.previewImage?.url}
            url={video.sources.filter(source => source.format !== 'm3u8').map((source) => ({
              src: source.url,
              type: `video/${source.format}`,
            }))}
            // url={video.sources.filter(source => source.format !== 'm3u8').map((source) => source.url)?.[0]}
          />
        );
      })}
    </>
  ) : null;
}
