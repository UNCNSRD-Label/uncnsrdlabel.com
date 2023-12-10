"use client";

import { LoadingDots } from "@/components/loading/dots";
import { minWidthLg, minWidthSm } from "@/lib/tailwind";
import { useMediaQuery } from "@react-hookz/web";
import { cn } from "@uncnsrdlabel/lib";
import Carousel, { type CarouselProps } from "nuka-carousel";
import { Suspense } from "react";

export type { CarouselProps as NukaCarouselProps };

export function NukaCarousel(props: CarouselProps) {
  const isSm = useMediaQuery(`(min-width: ${minWidthSm})`);

  const isLg = useMediaQuery(`(min-width: ${minWidthLg})`);

  let slidesToShow = 1;

  if (isSm) {
    slidesToShow = 2;
  }

  if (isLg) {
    slidesToShow = 3;
  }

  return (
    <Suspense fallback={<LoadingDots />}>
      <Carousel
        {...props}
        className={cn(props.className)}
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
      <span className="hidden">
        Showing {slidesToShow} slides
      </span>
    </Suspense>
  );
}
