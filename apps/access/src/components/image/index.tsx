"use client";

import { onLoadingComplete } from "@/utils/image";
import { cn } from "@uncnsrdlabel/lib";
import NextImage, { type ImageProps } from "next/image";
import styles from "./index.module.css";

export default function Image(props: ImageProps) {
  return (
    <NextImage
      {...props}
      className={cn(props.className, styles.onLoadingComplete)}
      onLoadingComplete={onLoadingComplete}
    />
  );
}
