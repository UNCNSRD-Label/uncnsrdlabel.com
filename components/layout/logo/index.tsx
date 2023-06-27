"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { useIntersectionObserver } from "@react-hookz/web";
import { clsx } from "clsx";
import LogotypeIcon from "components/icons/logotype";
import { useRef } from "react";

type Props = { blend?: boolean; className?: string; theme: "dark" | "light" };

const { SITE_NAME } = process.env;

export default function Logo({ blend, className, theme = "light" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logotypeRef = useRef<SVGSVGElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    threshold: [0, 0.5],
  });

  return (
    <div
      className={clsx(
        "pointer-events-none relative inset-0 z-50",
        blend && "mix-blend-difference"
      )}
      ref={rootRef}
    >
      <div
        className={clsx(
          "bottom-12 grid w-full justify-items-center sm:bottom-20",
          className
        )}
        style={{
          position:
            (rootIntersection?.intersectionRatio ?? 0) > 0
              ? "absolute"
              : "fixed",
        }}
      >
        <AccessibleIcon.Root label={`${SITE_NAME} logotype`}>
          <LogotypeIcon
            className={clsx(
              "h-10 drop-shadow transition duration-300 ease-in-out hover:scale-110",
              theme === "light" ? "fill-white" : "fill-black"
            )}
            ref={logotypeRef}
          />
        </AccessibleIcon.Root>
      </div>
    </div>
  );
}
