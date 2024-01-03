"use client";

import { useIntersectionObserver } from "@react-hookz/web";
import { cn, onLoad, onLoading } from "@uncnsrdlabel/lib";
import NextImage, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

export function Image({
  revealEffect = true,
  ...props
}: ImageProps & { delay?: number; revealEffect?: boolean }) {
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

  useEffect(() => {
    if (rootRef.current) {
      onLoading(rootRef.current);
    }
  }, [rootRef.current]);

  return (
    <NextImage
      {...props}
      alt={props.alt || ""}
      className={cn(
        revealEffect &&
          "ease-in-out [transition:transform_500ms] motion-reduce:transition-none",
        revealEffect && "scale-105",
        revealEffect && scrollDirection === "end" && "translate-y-2",
        revealEffect && scrollDirection === "start" && "-translate-y-2",
        revealEffect &&
          rootIntersection?.isIntersecting &&
          "data-[status=loaded]:translate-y-0 data-[status=loaded]:scale-100",
        props.className,
      )}
      onLoad={(event) => {
        const img = event.currentTarget as HTMLImageElement;

        setTimeout(() => {
          onLoad(img);
        }, props.delay || 0);

        if (props.onLoad) {
          props.onLoad(event);
        }
      }}
      ref={rootRef}
    />
  );
}
