"use client";

import clsx from "clsx";
import NextImage, { type ImageProps } from "next/image";

import { onLoadingComplete } from "#/utils/image";

import styles from "./index.module.css";

export default function Image(props: ImageProps) {
  console.log("Image", styles.onLoadingComplete);
  return (
    <NextImage
      {...props}
      className={clsx(props.className, styles.onLoadingComplete)}
      onLoadingComplete={onLoadingComplete}
    />
  );
}
