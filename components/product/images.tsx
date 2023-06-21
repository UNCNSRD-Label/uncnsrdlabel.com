"use client";

import { useState } from "react";

import { ProductImage } from "components/product/image";

export function Images({
  images,
  sizes,
}: {
  images: { src: string; altText: string }[];
  sizes?: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      {images.length > 1 ? (
        <>
          {images.map((image, index) => {
            const isActive = index === currentImage;
            return (
              <button
                aria-label="Enlarge product image"
                key={image.src}
                className="w-full"
                onClick={() => setCurrentImage(index)}
              >
                <ProductImage
                  active={isActive}
                  alt={image?.altText}
                  className="aspect-3/4 h-full w-full"
                  fill
                  sizes={sizes}
                  src={image.src}
                />
              </button>
            );
          })}
        </>
      ) : null}
    </>
  );
}
