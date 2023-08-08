"use client";

import { Image } from "@/components/image";
import { LoadingDots } from "@/components/loading-dots";
import { clsx } from "clsx";
import { useRef } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export function ProductImageZoom({
  active,
  className,
  isInteractive = true,
  ...props
}: {
  active?: boolean;
  className?: string;
  isInteractive?: boolean;
  scale?: number;
} & React.ComponentProps<typeof Image>) {
  const figureRef = useRef<HTMLElement>(null);

  if (!props.src) {
    return null;
  }

  return (
    <>
      <TransformWrapper
        centerZoomedOut={false}
        limitToBounds={false}
        onPanningStop={(ref, event) => {
          console.info("onPanningStop", ref, event);
          if (figureRef.current) {
            figureRef.current.classList.remove("dragging");
          }
        }}
        onPanningStart={(ref, event) => {
          console.info("onPanningStart", ref, event);
          if (figureRef.current) {
            figureRef.current.classList.add("dragging");
          }
        }}
      >
        <TransformComponent>
          <figure
            className={clsx(
              "relative grid w-[100dvw] cursor-grab place-items-center bg-black [&.dragging]:cursor-grabbing",
              className,
            )}
            ref={figureRef}
          >
            <Image
              className={clsx("relative block h-full w-full object-cover", {
                "z-10 transition duration-300 ease-in-out": isInteractive,
              })}
              {...props}
              alt={props.title || ""}
            />
            <div className="bg-red place-center absolute top-0 z-0 grid h-[100dvh]">
              <LoadingDots className="h-4 w-4 bg-white" />
            </div>
          </figure>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
