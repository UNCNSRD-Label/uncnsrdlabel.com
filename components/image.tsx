"use client";

import clsx from "clsx";
import NextImage, { type ImageProps } from "next/image";

import { onLoadingComplete } from "lib/image";

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      className={clsx("opacity-0 transition-opacity", props.className)}
      onLoadingComplete={(img: HTMLImageElement) => {
        onLoadingComplete(img);

        if (props.onLoadingComplete) {
          props.onLoadingComplete(img);
        }
      }}
    />
  );
}
