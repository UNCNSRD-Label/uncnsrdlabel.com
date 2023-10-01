"use client";

import { Image } from "@/components/media/image";
import { cn } from "@uncnsrdlabel/lib";
import { useRef } from "react";

export function ProductImageZoom({
  active,
  className,
  ...props
}: {
  active?: boolean;
  className?: string;
} & React.ComponentProps<typeof Image>) {
  const figureRef = useRef<HTMLElement>(null);

  if (!props.src) {
    return null;
  }

  return (
    <>
      <figure
        className={cn(
          "w-[100dvw]",
          className,
        )}
        ref={figureRef}
      >
        <Image
          {...props}
          alt={props.title || ""}
          className={cn("relative block min-h-full min-w-full object-cover")}
          quality={100}
          sizes="500vw"
          height={400}
          width={300}
        />
      </figure>
    </>
  );
}
