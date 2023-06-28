"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { SlMagnifierAdd } from "react-icons/sl";

import { ProductImage } from "components/product/image";
import { ProductImageZoom } from "components/product/image-zoom";

export function Images({
  images,
  sizes,
}: {
  images: { src: string; altText: string }[];
  sizes?: string;
}) {
  return images.length > 1 ? (
    <>
      {images.map((image) => {
        return (
          <Dialog.Root key={image.src}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Enlarge product image"
                className="relative w-full md:w-4/6"
              >
                <ProductImage
                  alt={image?.altText}
                  className="aspect-3/4 w-full"
                  fill
                  sizes={sizes}
                  src={image.src}
                />
                <SlMagnifierAdd className="icon absolute bottom-4 right-4 h-5 w-5 text-white drop-shadow" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-40 bg-white">
                <Dialog.Content className="data-[state=open]:animate-contentShow focus:outline-none">
                  <Suspense>
                    <ProductImageZoom
                      alt={image?.altText}
                      className="aspect-3/4"
                      fill
                      quality={100}
                      // scale={scale}
                      sizes="500vw"
                      src={image.src}
                    />
                  </Suspense>
                  <Dialog.Close asChild>
                    <button
                      className="fixed right-4 top-4 inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full p-2 drop-shadow focus:shadow-[0_0_0_1px] focus:shadow-white focus:outline-none"
                      aria-label="Close"
                      // onClick={() => {
                      //   setScale(1);
                      // }}
                    >
                      <Cross2Icon className="h-full w-full text-white" />
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
