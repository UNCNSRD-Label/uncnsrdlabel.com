"use client";

import { Image } from "@/components/media/image";
import { ImageFragment } from "@uncnsrdlabel/graphql-shopify-storefront";
import { cn } from "@uncnsrdlabel/lib";
import { type MutableRefObject } from "react";

export function Images({
  className,
  idPrefix,
  images,
  imageElementRefs,
  instance = 0,
  sizes,
}: {
  className?: string;
  idPrefix?: string;
  images: ImageFragment[];
  imageElementRefs?: MutableRefObject<HTMLButtonElement | null>[];
  instance?: number;
  sizes?: string;
}) {
  const delayOffset = instance * images.length;

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
              alt={image.altText ?? "Product image"}
              blurDataURL={image.blurDataURL}
              className={cn(
                "absolute inset-0 object-center object-cover",
              )}
              delay={delayOffset + (index * 100)}
              fill
              id={`${idPrefix}-${index}`}
              key={image.id}
              placeholder="blur"
              priority={index <= 1}
              quality={100}
              revealEffect={false}
              sizes={sizes}
              src={image.url}
            />
          </figure>
        );
      })}
    </>
  ) : null;
}
