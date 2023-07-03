"use client";

import clsx from "clsx";
import NextImage, { type ImageProps } from "next/image";

import { onLoadingComplete } from "lib/image";

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      alt={props.alt || ""}
      className={clsx(
        "opacity-0 transition-opacity data-[loaded=true]:opacity-100",
        props.className
      )}
      onLoadingComplete={(img: HTMLImageElement) => {
        onLoadingComplete(img);

        if (props.onLoadingComplete) {
          props.onLoadingComplete(img);
        }
      }}
    />
  );
}
