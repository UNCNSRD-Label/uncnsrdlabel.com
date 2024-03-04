"use client";

import { Images } from "@/components/media/images";
import { Videos } from "@/components/media/videos";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import { useRef, type MutableRefObject } from "react";

export function ProductMedia({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const mediaClassName =
    "lg:aspect-2/3 min-h-[max(100dvh,_theme(space.96))] overflow-y-clip relative snap-start w-[100dvw] lg:w-auto";

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
    <div
      className="ghost-scrollbar relative z-0 col-span-full grid h-fit w-full snap-both snap-mandatory grid-flow-col justify-start overflow-x-scroll scroll-smooth lg:absolute"
      id="images"
    >
      <Images
        className={mediaClassName}
        idPrefix="image"
        images={images}
        imageElementRefs={imageElementRefs}
        instance={0}
        sizes="(max-width: 639px) 100vw, 50vw"
      />

      <Videos
        className={mediaClassName}
        idPrefix="video"
        videoElementRefs={videoElementRefs}
        videos={videos}
      />

      <Images
        className={cn(mediaClassName, "hidden lg:grid")}
        idPrefix="suffix"
        images={images}
        instance={1}
        sizes="(max-width: 639px) 100vw, 50vw"
      />

      <nav className="pointer-events-none fixed left-8 top-0 z-30 hidden h-full w-16 grid-flow-row content-center gap-4 lg:grid">
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

          return video.__typename === "Video" ? (
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
              {video.previewImage?.url && (
                <Image
                  alt={video?.previewImage?.altText ?? product.title}
                  fill
                  sizes="5vw"
                  src={video.previewImage?.url}
                  style={{
                    objectFit: "cover",
                  }}
                />
              )}
            </Link>
          ) : null;
        })}
      </nav>
    </div>
  );
}
