"use client";

import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";
import { type MutableRefObject } from "react";

export function Images({
  className,
  idPrefix,
  images,
  imageElementRefs,
  sizes,
}: {
  className?: string;
  idPrefix?: string;
  images: { id: string; src: string; altText: string }[];
  imageElementRefs?: MutableRefObject<HTMLButtonElement | null>[];
  sizes?: string;
}) {
  return images.length > 1 ? (
    <>
      {images.map((image, index) => {
        return (
          <figure
            className={cn("w-[100dvw]", className)}
            key={image.id}
            ref={imageElementRefs?.[index]}
          >
            <Image
              alt={image.altText}
              className={cn(
                "absolute inset-0 object-center object-cover",
              )}
              fill
              id={`${idPrefix}-${index}`}
              key={image.id}
              priority={index === 0}
              quality={100}
              sizes={sizes}
              src={image.src}
            />
          </figure>
        );
      })}
    </>
  ) : null;
}
