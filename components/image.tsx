"use client";

import { useIntersectionObserver } from "@react-hookz/web";
import { clsx } from "clsx";
import NextImage, { type ImageProps } from "next/image";
import { useRef } from "react";

import { onLoadingComplete } from "@/lib/image";

export default function Image({
  revealEffect = true,
  ...props
}: ImageProps & { revealEffect?: boolean }) {
  const rootRef = useRef<HTMLImageElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    // rootMargin: "-15%",
    threshold: [0, 0.5],
  });

  return (
    <NextImage
      {...props}
      alt={props.alt || ""}
      className={clsx(
        revealEffect &&
          "ease-in-out [transition:transform_1000ms,opacity_500ms] motion-reduce:transition-none",
        revealEffect && "translate-y-8 opacity-0",
        revealEffect &&
          rootIntersection?.isIntersecting &&
          "data-[loaded=true]:translate-y-0 data-[loaded=true]:opacity-100",
        props.className
      )}
      onLoadingComplete={(img: HTMLImageElement) => {
        onLoadingComplete(img);

        if (props.onLoadingComplete) {
          props.onLoadingComplete(img);
        }
      }}
      ref={rootRef}
    />
  );
}
