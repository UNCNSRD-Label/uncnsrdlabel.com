"use client";

import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { type ReactPlayerProps } from "react-player";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export type VideoProps = ReactPlayerProps;
//  & {
//   ref?: MutableRefObject<HTMLElement | null>;
// };

export const Video = forwardRef<HTMLElement, VideoProps>(
  ({ alt,
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
    ...props }, forwardedRef) => (
  <figure
    className={cn(
      className,
      "relative h-full w-full",
    )}
    id={id}
    ref={forwardedRef}
  >
    {poster && <Image
      alt={alt}
      className="absolute h-full object-cover"
      fill
      priority={priority}
      revealEffect={false}
      sizes="100vw"
      src={poster}
      title={title}
    />}
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
    {props.title && <figcaption>{props.title}</figcaption>}
  </figure>
));