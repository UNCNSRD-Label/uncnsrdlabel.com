"use client";

import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { type ReactPlayerProps } from "react-player";

const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });

export type VideoProps = ReactPlayerProps;

export const Video = forwardRef<HTMLElement, VideoProps>(
  (
    {
      alt,
      autoPlay = false,
      className,
      contentType,
      fallback,
      id,
      loop = false,
      poster,
      priority,
      ref,
      title,
      url,
      ...props
    },
    forwardedRef,
  ) => (
    <figure
      className={cn(className, "relative h-full w-full")}
      id={id}
      ref={forwardedRef}
    >
      <ReactPlayer
        autoPlay={autoPlay}
        className="absolute inset-0 z-10 w-full [&>video]:object-cover"
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
      {poster && (
        <Image
          alt={alt}
          blurDataURL={poster.blurDataURL}
          className="absolute h-full object-cover"
          fill
          priority={priority}
          revealEffect={false}
          sizes="100vw"
          src={poster.url}
          title={title}
        />
      )}
      {props.title && <figcaption>{props.title}</figcaption>}
    </figure>
  ),
);
