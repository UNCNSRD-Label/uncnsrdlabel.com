"use client";

import Carousel, { type CarouselProps } from "nuka-carousel";
import { Suspense } from "react";

export type { CarouselProps as NukaCarouselProps };

export async function NukaCarousel(props: CarouselProps) {
  return (
    <Suspense>
      <Carousel {...props}>{props.children}</Carousel>
    </Suspense>
  );
}
