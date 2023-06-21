"use client";

import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { useIntersectionObserver } from "@react-hookz/web";
import { clsx } from "clsx";
import LogotypeIcon from "components/icons/logotype";
import { useRef } from "react";

type Props = { theme: "dark" | "light" };

const { SITE_NAME } = process.env;

export default function Logo({ theme = "light" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const logotypeRef = useRef<SVGSVGElement>(null);

  const rootIntersection = useIntersectionObserver(rootRef, {
    threshold: [0, 0.5],
  });

  return (
    <div className="pointer-events-none relative inset-0 z-30" ref={rootRef}>
      <div
        className="bottom-12 grid w-full justify-items-center sm:bottom-20"
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
              "w-56 fill-white",
              theme === "light" ? "fill-white" : "fill-black"
            )}
            ref={logotypeRef}
          />
        </AccessibleIcon.Root>
      </div>
    </div>
  );
}
