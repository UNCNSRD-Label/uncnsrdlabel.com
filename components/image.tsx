"use client";

import { useIntersectionObserver } from "@react-hookz/web";
import { clsx } from "clsx";
import NextImage, { type ImageProps } from "next/image";
import { useRef } from "react";

import { onLoadingComplete } from "@/lib/image";

export default function Image(props: ImageProps & { transition?: boolean }) {
  const rootRef = useRef<HTMLImageElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    // rootMargin: "-15%",
    threshold: [0, 0.5],
  });

  const { transition = true } = props;

  return (
    <NextImage
      {...props}
      alt={props.alt || ""}
      className={clsx(
        transition &&
          "ease-in-out [transition:transform_1000ms,opacity_500ms] motion-reduce:transition-none",
        transition && "translate-y-8 opacity-0",
        transition &&
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
