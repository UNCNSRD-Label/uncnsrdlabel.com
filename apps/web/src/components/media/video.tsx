"use client";

import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";
import dynamic from "next/dynamic";
import { type ReactPlayerProps } from "react-player";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

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
  priority,
  title,
  ...props
}) => (
  <figure
    className={cn(
      className,
      "relative h-full w-full overflow-hidden",
    )}
  >
    <Image
      alt={alt}
      className="absolute h-full object-cover"
      fill
      priority={priority}
      revealEffect={false}
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