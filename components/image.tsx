"use client";

import { useIntersectionObserver } from "@react-hookz/web";
import clsx from "clsx";
import NextImage, { type ImageProps } from "next/image";
import { useRef } from "react";

import { onLoadingComplete } from "lib/image";

export default function Image(props: ImageProps) {
  const rootRef = useRef<HTMLImageElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    rootMargin: "-15dvh",
    threshold: [0, 0.5],
  });

  return (
    <NextImage
      {...props}
      alt={props.alt || ""}
      className={clsx(
        "transition duration-700 ease-out motion-reduce:transition-none",
        "translate-y-48 opacity-0",
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
