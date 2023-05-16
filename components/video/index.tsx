'use client';

import { type ReactPlayerProps } from 'react-player';
import ReactPlayer from 'react-player/lazy';

import { FC } from 'react';

export type VideoProps = ReactPlayerProps;

export const Video: FC<VideoProps> = ({
  autoPlay = false,
  className,
  contentType,
  fallback,
  loop = false,
  //   poster,
  ...props
}) => (
  <figure className={'relative aspect-video'}>
    <ReactPlayer
      {...props}
      aspectRatio="16:9"
      autoPlay={autoPlay}
      className={'absolute inset-0 w-full object-cover'}
      fallback={fallback}
      // fluid
      height="100%"
      light={!autoPlay && props.poster}
      loop={loop}
      muted={autoPlay}
      playing={autoPlay}
      playsinline
      pip
      //   poster={poster}
      stopOnUnmount={false}
      // style={{
      //   aspectRatio: props.width && props.height ? `${props.width} / ${props.height}` : undefined
      // }}
      width="100%"
    />
    {props.title && <figcaption>{props.title}</figcaption>}
  </figure>
);

export default Video;
