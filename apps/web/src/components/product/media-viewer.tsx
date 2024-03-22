"use client";

import { Button } from "@uncnsrdlabel/components/atoms/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
  type CarouselOptions,
} from "@uncnsrdlabel/components/atoms/carousel";
import {
  getFragmentData,
  imageFragment,
  productDetailsFragment,
  videoFragment,
  type FragmentType,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import Image from "next/image";
import { Children, PropsWithChildren, isValidElement, useState } from "react";

export function MediaViewer({
  children,
  className,
  productDetailsFragmentRef,
}: PropsWithChildren<{
  className?: string;
  productDetailsFragmentRef: FragmentType<typeof productDetailsFragment>;
}>) {
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
  } satisfies CarouselOptions;

  const [api, setApi] = useState<CarouselApi>();

  const thumbnailClassName =
    "pointer-events-auto relative my-auto aspect-square w-full overflow-hidden rounded-full shadow bg-black/50";

  const arrayChildren = Children.toArray(children);

  return (
    <>
      <Carousel
        className={cn("landscape:h-[100dvh] [&_>_div]:h-full", className)}
        opts={opts}
        setApi={setApi}
      >
        <CarouselContent className="ml-0 h-full">{children}</CarouselContent>
        <CarouselPrevious className="lg:hidden" />
        <CarouselNext className="lg:hidden" />
      </Carousel>
      <nav className="pointer-events-none absolute left-8 top-0 z-30 hidden h-full w-16 grid-flow-row content-center gap-4 lg:grid">
        {arrayChildren.map((child, index) => {
          if (!isValidElement(child)) return null;

          if (child.props["data-thumbnail-enabled"] !== true) return null;

          return (
            <Button
              className={thumbnailClassName}
              key={child.props["data-thumbnail-id"]}
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <Image
                alt={`Scroll to media item ${index + 1} of ${product.title}`}
                blurDataURL={child.props["data-thumbnail-blur-data-url"]}
                fill
                sizes="5vw"
                src={child.props["data-thumbnail-src"]}
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
