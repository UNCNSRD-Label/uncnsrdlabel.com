"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import { SlMagnifierAdd } from "react-icons/sl";

import { Image } from "@/components/media/image";
import { ProductImageZoom } from "@/components/media/image-zoom";

export function Images({
  className,
  images,
  sizes,
}: {
  className?: string;
  images: { id: string; src: string; altText: string }[];
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
              >
                <Image
                  alt={image?.altText}
                  fill
                  sizes={sizes}
                  src={image.src}
                />
                <SlMagnifierAdd className="icon absolute bottom-4 right-4 h-5 w-5 text-light drop-shadow" />
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
                      <Cross2Icon className="h-full w-full text-light" />
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