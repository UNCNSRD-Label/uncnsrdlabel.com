"use client";

import { Image } from "@/components/media/image";
import { Images } from "@/components/media/images";
import { Videos } from "@/components/media/videos";
import { breakpoints } from "@/lib/tailwind";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { useRef, type MutableRefObject } from "react";

export function MediaViewerFull({
  className,
  productDetailsFragmentRef,
}: {
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const mediaClassName = "relative snap-start grid aspect-2/3";

  const thumbnailClassName =
    "pointer-events-auto relative my-auto aspect-square w-full overflow-hidden rounded-full shadow bg-black/50";

  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const imageElementRefs: MutableRefObject<HTMLButtonElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const videoElementRefs: MutableRefObject<HTMLElement | null>[] = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const imagesNodes = product.images.edges.map((edge) => edge?.node);

  const images = imagesNodes.map((imageFragmentRef) =>
    getFragmentData(imageFragment, imageFragmentRef),
  );

  const media = product.media.edges.map((edge) => edge?.node);

  const videos = media.filter((node) => node.__typename === "Video");

  return (
    <div className={cn("relative", className)}>
      <div className="ghost-scrollbar absolute inset-0 inline-flex h-full w-full snap-both  snap-mandatory grid-flow-col content-stretch items-stretch justify-start overflow-x-scroll scroll-smooth">
        <Images
          className={mediaClassName}
          idPrefix="image"
          images={images}
          imageElementRefs={imageElementRefs}
          instance={0}
          sizes={`(max-width: ${breakpoints.sm.max.toString()}) 100vw, (max-width: ${breakpoints.md.max.toString()}) 50vw, (max-width: ${breakpoints.lg.max.toString()}) 33vw, 25vw`}
        />

        <Videos
          className={mediaClassName}
          idPrefix="video"
          videoElementRefs={videoElementRefs}
          videos={videos}
        />

        <Images
          className={cn(mediaClassName, "hidden lg:inline-grid")}
          idPrefix="suffix"
          images={images}
          instance={1}
          sizes={`(max-width: ${breakpoints.sm.max.toString()}) 100vw, (max-width: ${breakpoints.md.max.toString()}) 50vw, (max-width: ${breakpoints.lg.max.toString()}) 33vw, 25vw`}
        />
      </div>

      <nav className="pointer-events-none absolute left-8 top-0 z-30 hidden h-full w-16 grid-flow-row content-center gap-4 lg:grid">
        {images.map((image, index) => (
          <Link
            className={thumbnailClassName}
            href={`#image-${index}`}
            key={image.id}
            onClick={(event) => {
              event.preventDefault();
              imageElementRefs?.[index].current?.scrollIntoView({
                block: "start",
                inline: "start",
              });
            }}
          >
            <Image
              alt={image.altText ?? product.title}
              blurDataURL={image.blurDataURL}
              fill
              sizes="5vw"
              src={image.url}
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        ))}
        {videos.map((videoFragmentRef, index) => {
          const video = getFragmentData(videoFragment, videoFragmentRef);

          if (video.__typename !== "Video") {
            return null;
          }
  
          const previewImage = getFragmentData(
            imageFragment,
            video.previewImage,
          );

          if (!previewImage) {
            return null;
          }

          return (
            <Link
              className={thumbnailClassName}
              href={`#video-${index}`}
              key={video.id}
              onClick={(event) => {
                event.preventDefault();

                videoElementRefs?.[index].current?.scrollIntoView({
                  block: "start",
                  inline: "start",
                });
              }}
            >
              <Image
                alt={previewImage?.altText ?? product.title}
                blurDataURL={previewImage.blurDataURL}
                fill
                sizes="5vw"
                src={previewImage.url}
                style={{
                  objectFit: "cover",
                }}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
