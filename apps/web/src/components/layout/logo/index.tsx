"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { useIntersectionObserver } from "@react-hookz/web";
import { cn } from "@uncnsrdlabel/lib";
import Link from "next/link";
import { useRef } from "react";

type Props = { blend?: boolean; className?: string; fill?: "dark" | "light" };

export function Logo({ blend, className, fill }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    threshold: [0, 0.5],
  });

  return (
    <div
      className={cn(
        "grid pointer-events-none relative inset-0 z-50",
        blend && "mix-blend-difference",
      )}
      ref={rootRef}
    >
      <Link
        className={cn(
          "bottom-12 grid justify-items-center pointer-events-auto sm:bottom-20 justify-self-center",
          className,
        )}
        href="/"
        style={{
          position:
            (rootIntersection?.intersectionRatio ?? 0) > 0 ||
            (rootIntersection?.boundingClientRect?.top ?? 0) < 0
              ? "absolute"
              : "fixed",
        }}
      >
        <AccessibleIcon.Root
          label={`${process.env.NEXT_PUBLIC_SITE_NAME} logotype`}
        >
          <LogotypeIcon
            className={cn(
              "h-8 fill-inherit drop-shadow transition duration-300 ease-in-out hover:scale-110 sm:h-10",
              {
                "fill-white": fill === "light" || blend,
                "fill-black": fill === "dark",
              },
            )}
          />
        </AccessibleIcon.Root>
      </Link>
    </div>
  );
}
