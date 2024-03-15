"use client";

import Image from "next/image";
// import { Image } from "@/components/media/image";
import { Video } from "@/components/media/video";
import { breakpoints } from "@/lib/tailwind";
import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@uncnsrdlabel/components/atoms/carousel";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn, getMediaQueryForURL } from "@uncnsrdlabel/lib";
import { useState } from "react";

export function MediaViewer({
  className,
  productDetailsFragmentRef,
}: {
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}) {
  const product = getFragmentData(
    productDetailsFragment,
    productDetailsFragmentRef,
  );

  const imagesNodes = product.images.edges.map((edge) => edge?.node);

  const images = imagesNodes.map((imageFragmentRef) =>
    getFragmentData(imageFragment, imageFragmentRef),
  );

  const media = product.media.edges.map((edge) => edge?.node);

  const videoNodes = media.filter((node) => node.__typename === "Video");

  const videos = videoNodes.map((videoFragmentRef) =>
    getFragmentData(videoFragment, videoFragmentRef),
  );

  const opts = {
    align: "start",
    dragFree: true,
    loop: true,
  };

  const [api, setApi] = useState<CarouselApi>();

  const thumbnailClassName =
    "pointer-events-auto relative my-auto aspect-square w-full overflow-hidden rounded-full shadow bg-black/50";

  return (
    <>
      <Carousel
        className={cn("landscape:h-[100dvh]", className)}
        opts={opts}
        setApi={setApi}
      >
        <CarouselContent className="">
          {images?.map((image, index) => {
            return (
              <CarouselItem
                className="shrink-1 grow-1 relative h-full basis-auto"
                key={image.url || index}
              >
                <Image
                  alt={image.altText ?? product.title}
                  // blurDataURL={image.blurDataURL}
                  className="h-full w-auto object-cover"
                  height={image.height ?? 1}
                  sizes={`(max-width: ${breakpoints.sm.max.toString()}) 100vw, (max-width: ${breakpoints.md.max.toString()}) 50vw, (max-width: ${breakpoints.lg.max.toString()}) 33vw, 25vw`}
                  src={image.url}
                  width={image.width ?? 1}
                />
              </CarouselItem>
            );
          })}
          {videos?.map((video, index) => {
            if (video.__typename !== "Video") {
              return null;
            }

            const previewImage = getFragmentData(
              imageFragment,
              video.previewImage,
            );

            return (
              <CarouselItem
                className="relative sm:basis-1/2 lg:basis-1/3"
                key={video.id || index}
              >
                <Video
                  alt={video?.alt ?? product.title}
                  autoPlay={index === 0 ? true : false}
                  className={className}
                  loop={true}
                  key={video.id}
                  poster={previewImage}
                  url={video.sources
                    .filter((source) => source.format !== "m3u8")
                    .map((source) => ({
                      media: getMediaQueryForURL(source.url),
                      src: source.url,
                      type: `video/${source.format}`,
                    }))}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="lg:hidden" />
        <CarouselNext className="lg:hidden" />
      </Carousel>
      <nav className="pointer-events-none absolute left-8 top-0 z-30 hidden h-full w-16 grid-flow-row content-center gap-4 lg:grid">
        {images.map((image, index) => (
          <Button
            className={thumbnailClassName}
            key={image.id}
            onClick={() => {
              api.scrollTo(index);
            }}
          >
            <Image
              alt={image.altText ?? product.title}
              // blurDataURL={image.blurDataURL}
              fill
              sizes="5vw"
              src={image.url}
              style={{
                objectFit: "cover",
              }}
            />
          </Button>
        ))}
        {videos.map((video, index) => {
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
            <Button
              className={thumbnailClassName}
              key={video.id}
              onClick={() => {
                api.scrollTo(index + images.length);
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
            </Button>
          );
        })}
      </nav>
    </>
  );
}
