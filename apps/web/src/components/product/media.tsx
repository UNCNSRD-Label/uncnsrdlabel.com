"use client";

import { Images } from "@/components/media/images";
import { Videos } from "@/components/media/videos";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import {
  FragmentType,
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  videoFragment,
} from "@uncnsrdlabel/graphql-shopify-storefront/client";
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import { useRef, type MutableRefObject } from "react";

export function ProductMedia({
  productDetailsFragmentRef,
}: {
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const mediaClassName =
    "lg:aspect-3/4 min-h-[100dvh] lg:h-[100dvh] overflow-y-clip relative snap-start w-[100dvw] lg:w-auto";

  const thumbnailClassName =
    "bg-black pointer-events-auto relative my-auto aspect-square w-full overflow-hidden rounded-full shadow";

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

  const images = imagesNodes
    .map((imageFragmentRef) => getFragmentData(imageFragment, imageFragmentRef))
    .map((image, index) => ({
      altText: image.altText ?? product.title,
      id: image.id ?? `image-${index}`,
      src: image.url,
    }));

  const media = product.media.edges.map((edge) => edge?.node);

  const videos = media.filter((node) => node.__typename === "Video");

  return (
    <div
      className="ghost-scrollbar relative z-0 col-span-full grid w-full snap-both snap-mandatory grid-flow-col justify-start overflow-x-scroll scroll-smooth bg-black lg:fixed lg:inset-0"
      id="images"
    >
      <Images
        className={mediaClassName}
        idPrefix="image"
        images={images}
        imageElementRefs={imageElementRefs}
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
              alt={image?.altText}
              fill
              sizes="5vw"
              src={image.src}
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
