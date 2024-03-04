"use client";

import { LogotypeIcon } from "@/components/icons/logotype";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { useIntersectionObserver } from "@react-hookz/web";
import { Link } from "@uncnsrdlabel/components/atoms/link";
import { cn } from "@uncnsrdlabel/lib";
import { useRef } from "react";

type Props = { blend?: boolean; className?: string; fill?: "dark" | "light" };

export function Logo({ blend, className, fill }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    threshold: [0, 0.5],
  });

  const intersecting = (((rootIntersection?.intersectionRatio ?? 0) > 0) ||
  ((rootIntersection?.boundingClientRect?.top ?? 0) < 0))

  const position = intersecting ? "absolute" : "fixed";

  return (
    <div
      className={cn(
        "pointer-events-none relative inset-0 z-50 grid",
        blend && "mix-blend-difference",
        className,
      )}
      ref={rootRef}
    >
      <div
        className="bottom-12 grid w-full justify-items-center justify-self-center"
        ref={rootRef}
        style={{
          position
        }}
      >
        <Link className={cn("pointer-events-auto", className)} href="/">
          <AccessibleIcon.Root
            label={`${process.env.NEXT_PUBLIC_SITE_NAME} logotype`}
          >
            <LogotypeIcon
              className={cn(
                "h-8 fill-inherit transition duration-300 ease-in-out hover:scale-110 sm:h-10",
                {
                  "fill-white": fill === "light" || blend,
                  "fill-black": fill === "dark",
                },
              )}
            />
          </AccessibleIcon.Root>
        </Link>
      </div>
    </div>
  );
}
