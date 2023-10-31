"use client";

import { Image } from "@/components/media/image";
import { ProductImageZoom } from "@/components/media/image-zoom";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { type MutableRefObject } from "react";
import { SlMagnifierAdd } from "react-icons/sl";

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
          <Dialog.Root key={image.id || index}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Enlarge product image"
                className={className}
                id={`${idPrefix}-${index}`}
                ref={imageElementRefs?.[index]}
              >
                <Image
                  alt={image?.altText}
                  fill
                  priority={index < 4}
                  revealEffect={false}
                  sizes={sizes}
                  src={image.src}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <SlMagnifierAdd className="icon text-light absolute bottom-4 right-4 h-5 w-5 drop-shadow" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-white">
                <Dialog.Content className="data-[state=open]:animate-contentShow relative h-full w-full touch-none">
                  <ProductImageZoom
                    alt={image?.altText}
                    className="relative h-full w-full touch-pinch-zoom overflow-scroll"
                    src={image.src}
                  />
                  <Dialog.Close asChild>
                    <button
                      className="fixed right-4 top-4 inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full p-2 drop-shadow focus:shadow-[0_0_0_1px] focus:shadow-white focus:outline-none"
                      aria-label="Close"
                      // onClick={() => {
                      //   setScale(1);
                      // }}
                    >
                      <Cross2Icon className="text-light h-full w-full" />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        );
      })}
    </>
  ) : null;
}
