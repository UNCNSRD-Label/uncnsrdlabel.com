import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";
import { type ReactPlayerProps } from "react-player";
import { VideoClient } from "./video-client";

export type VideoProps = ReactPlayerProps;

export const Video = ({
  alt,
  autoPlay = false,
  className,
  fallback,
  id,
  loop = false,
  poster,
  priority,
  title,
  url,
}: VideoProps) => (
  <figure className={cn(className, "relative h-full w-full")} id={id}>
    {poster && (
      <Image
        alt={alt}
        blurDataURL={poster.blurDataURL}
        className="absolute h-full object-cover"
        fill
        priority={priority}
        revealEffect={false}
        sizes="100vw"
        src={poster.url}
        title={title}
      />
    )}
    <VideoClient
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
    {title && <figcaption>{title}</figcaption>}
  </figure>
);
