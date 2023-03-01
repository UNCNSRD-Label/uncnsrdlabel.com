"use client";

import dynamic from "next/dynamic";
import type { ReactPlayerProps } from "react-player";
// import { useEffect, useState } from 'react'

import { clsx } from "clsx";
// import ReactPlayer from 'react-player/lazy'
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

import styles from "./Video.module.css";

export type VideoProps = ReactPlayerProps;

const Video = (props: VideoProps) => {
  return (
    <figure className={clsx(styles.wrapper, props.className)}>
      <ReactPlayer
        {...props}
        className={clsx(styles.player)}
        height="100%"
        light={!props.autoplay && props.poster}
        muted={props.autoplay}
        playing={props.autoplay}
        playsinline
        pip
        stopOnUnmount={false}
        style={{
          aspectRatio: `${props.width} / ${props.height}`,
        }}
        width="100%"
      />
      {props.title && <figcaption>{props.title}</figcaption>}
    </figure>
  );
};

export default Video;
