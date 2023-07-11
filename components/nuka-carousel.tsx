"use client";

import { config } from "@/lib/tailwind";
import { useMediaQuery } from "@react-hookz/web";
import Carousel, { type CarouselProps } from "nuka-carousel";
import { Suspense } from "react";

export type { CarouselProps as NukaCarouselProps };

export async function NukaCarousel(props: CarouselProps) {
  const minWidth = (!Array.isArray(config.theme?.screens) && config.theme?.screens?.md) ?? "0px";

  const isMd = useMediaQuery(`(min-width: ${minWidth})`);

  const slidesToShow = isMd ? (props.slidesToShow ?? 3) : 1;

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
