"use client";

import { useIntersectionObserver } from "@react-hookz/web";
import { clsx } from "clsx";
import NextImage, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

import { onLoadingComplete } from "@uncnsrdlabel/lib/tmp/image";

export function Image({
  revealEffect = true,
  ...props
}: ImageProps & { revealEffect?: boolean }) {
  const rootRef = useRef<HTMLImageElement>(null);

  const [previousY, setPreviousY] = useState(0);
  // const [previousRatio, setPreviousRatio] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"end" | "start">(
    "end",
  );

  const rootIntersection = useIntersectionObserver(rootRef, {
    // rootMargin: "-15%",
    threshold: [0, 0.5],
  });

  const currentY = rootIntersection?.boundingClientRect.y || 0;
  // const currentRatio = rootIntersection?.intersectionRatio || 0
  const isIntersecting = rootIntersection?.isIntersecting || false;

  useEffect(() => {
    // Scrolling down/up
    if (currentY < previousY) {
      setScrollDirection("end");

      // if (currentRatio > previousRatio && isIntersecting) {
      //   state.textContent ="Scrolling down enter"
      // } else {
      //   state.textContent ="Scrolling down leave"
      // }
    } else if (currentY > previousY && isIntersecting) {
      setScrollDirection("start");

      // if (currentRatio < previousRatio) {
      //   state.textContent ="Scrolling up leave"
      // } else {
      //   state.textContent ="Scrolling up enter"
      // }
    }

    setPreviousY(currentY);
    // setPreviousRatio(currentRatio)
  }, [currentY, isIntersecting, previousY]);

  return (
    <NextImage
      {...props}
      alt={props.alt || ""}
      className={clsx(
        revealEffect &&
          "ease-in-out [transition:filter_500ms,opacity_250ms,transform_1000ms] motion-reduce:transition-none",
        revealEffect && "scale-105 opacity-0 blur-sm",
        revealEffect && scrollDirection === "end" && "translate-y-8",
        revealEffect && scrollDirection === "start" && "-translate-y-8",
        revealEffect && "data-[loaded=true]:opacity-100",
        revealEffect &&
          rootIntersection?.isIntersecting &&
          "data-[loaded=true]:translate-y-0 data-[loaded=true]:scale-100 data-[loaded=true]:blur-none",
        props.className,
      )}
      onLoadingComplete={(img: HTMLImageElement) => {
        onLoadingComplete(img);

        if (props.onLoadingComplete) {
          props.onLoadingComplete(img);
        }
      }}
      ref={rootRef}
    />
  );
}
