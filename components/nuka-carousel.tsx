"use client";

import { useMediaQuery } from "@react-hookz/web";
import Carousel, { type CarouselProps } from "nuka-carousel";
import { Suspense } from "react";

export type { CarouselProps as NukaCarouselProps };

export async function NukaCarousel(props: CarouselProps) {
  const isMobile = useMediaQuery("(max-width: 639px)");

  const slidesToShow = isMobile ? 1 : props.slidesToShow ?? 3;

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
        slidesToShow={slidesToShow}
      >
        {props.children}
      </Carousel>
    </Suspense>
  );
}
