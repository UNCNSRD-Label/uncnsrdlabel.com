"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, ZoomInIcon } from "@radix-ui/react-icons";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

import { ProductImage } from "components/product/image";

export function Images({
  images,
  sizes,
}: {
  images: { src: string; altText: string }[];
  sizes?: string;
}) {
  const [scale, setScale] = useState(1);

  return images.length > 1 ? (
    <>
      {images.map((image) => {
        return (
          <Dialog.Root key={image.src}>
            <Dialog.Trigger asChild>
              <button
                aria-label="Enlarge product image"
                className="relative w-full"
              >
                <ProductImage
                  alt={image?.altText}
                  className="aspect-3/4 w-full"
                  fill
                  sizes={sizes}
                  src={image.src}
                />
                <ZoomInIcon className="absolute bottom-6 right-6 h-8 w-8 text-white drop-shadow" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-white">
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed inset-0 overflow-auto focus:outline-none">
                  <ProductImage
                    alt={image?.altText}
                    className="aspect-3/4 w-full"
                    fill
                    quality={100}
                    scale={scale}
                    sizes="500vw"
                    src={image.src}
                  />
                  <Slider.Root
                    className="fixed bottom-8 right-8 flex h-5 w-64 touch-none select-none items-center"
                    defaultValue={[1]}
                    max={5}
                    min={1}
                    step={0.05}
                    onValueChange={(value) => {
                      setScale(value[0]);
                    }}
                  >
                    <Slider.Track className="relative h-[3px] grow rounded-full bg-white/50 drop-shadow">
                      <Slider.Range className="absolute h-full rounded-full bg-white " />
                    </Slider.Track>
                    <Slider.Thumb
                      className="block h-5 w-5 cursor-grab rounded-[10px] bg-white shadow-[0_1px_10px] shadow-black/70 focus:cursor-grabbing focus:outline-none"
                      aria-label="Volume"
                    />
                  </Slider.Root>
                  <Dialog.Close asChild>
                    <button
                      className="fixed right-8 top-8 inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full p-2 drop-shadow focus:shadow-[0_0_0_1px] focus:shadow-white focus:outline-none"
                      aria-label="Close"
                      onClick={() => {
                        setScale(1);
                      }}
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
