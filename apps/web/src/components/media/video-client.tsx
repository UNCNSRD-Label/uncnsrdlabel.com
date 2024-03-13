"use client";

import dynamic from "next/dynamic";
import { type ReactPlayerProps } from "react-player";

const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

export type VideoProps = ReactPlayerProps;

export function VideoClient({
  autoPlay = false,
  fallback,
  loop = false,
  poster,
  url,
}: VideoProps) {
  return (
    <ReactPlayer
      autoPlay={autoPlay}
      className="absolute inset-0 w-full [&>video]:object-cover"
      fallback={fallback}
      height="100%"
      light={!autoPlay && poster}
      loop={loop}
      muted={autoPlay}
      playing={autoPlay}
      playsinline
      pip
      stopOnUnmount={false}
      url={url}
      width="100%"
    />
  );
}
