"use client";

import Carousel, { type CarouselProps } from "nuka-carousel";
import { Suspense } from "react";

export type { CarouselProps as NukaCarouselProps };

export async function NukaCarousel(props: CarouselProps) {
  return (
    <Suspense>
      <Carousel
        {...props}
        onDragEnd={(e) => {
          (e.target as HTMLElement)
            .closest(".slider-frame")
            ?.classList.remove("dragging");
        }}
        onDragStart={(e) => {
          (e.target as HTMLElement)
            .closest(".slider-frame")
            ?.classList.add("dragging");
        }}
      >
        {props.children}
      </Carousel>
    </Suspense>
  );
}
