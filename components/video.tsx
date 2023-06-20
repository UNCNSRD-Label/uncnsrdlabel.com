"use client";

import clsx from "clsx";
import Image from "next/image";
import { type ReactPlayerProps } from "react-player";
import ReactPlayer from "react-player/lazy";

import { FC } from "react";

export type VideoProps = ReactPlayerProps;

export const Video: FC<VideoProps> = ({
  alt,
  autoPlay = false,
  className,
  contentType,
  fallback,
  loop = false,
  poster,
  title,
  ...props
}) => (
  <figure
    className={clsx(
      className,
      "relative h-full w-full overflow-hidden sm:aspect-video"
    )}
  >
    <Image
      alt={alt}
      className="absolute h-full object-cover"
      fill
      sizes="100vw"
      src={poster}
      title={title}
    />
    <ReactPlayer
      {...props}
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
      width="100%"
    />
    {props.title && <figcaption>{props.title}</figcaption>}
  </figure>
);

export default Video;
