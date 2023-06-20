"use client";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import { clsx } from "clsx";
import { ReactNode, useRef } from "react";

export default function ScrollControls({
  children,
  classNames = {},
}: {
  children: ReactNode;
  classNames?: {
    [key: string]: string;
  };
}) {
  const scrollAreaViewportRef = useRef<HTMLDivElement>(null);

  const scrollTowardEnd = () => {
    scrollAreaViewportRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const scrollTowardStart = () => {
    scrollAreaViewportRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={clsx("controls", classNames.controls)}>
        <button
          className={clsx("button", classNames.button)}
          onClick={scrollTowardStart}
          title="Scroll toward start"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <button
          className={clsx("button", classNames.button)}
          onClick={scrollTowardEnd}
          title="Scroll toward end"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <ScrollArea.Root
        className={clsx("ScrollAreaRoot", classNames.ScrollAreaRoot)}
      >
        <ScrollArea.Viewport
          className={clsx("ScrollAreaViewport", classNames.ScrollAreaViewport)}
          ref={scrollAreaViewportRef}
        >
          {children}
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className={clsx(
            "ScrollAreaScrollbar",
            classNames.ScrollAreaScrollbar
          )}
          orientation="vertical"
        >
          <ScrollArea.Thumb
            className={clsx("ScrollAreaThumb", classNames.ScrollAreaThumb)}
          />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className={clsx(
            "ScrollAreaScrollbar",
            classNames.ScrollAreaScrollbar
          )}
          orientation="horizontal"
        >
          <ScrollArea.Thumb
            className={clsx("ScrollAreaThumb", classNames.ScrollAreaThumb)}
          />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner
          className={clsx("ScrollAreaCorner", classNames.ScrollAreaCorner)}
        />
      </ScrollArea.Root>
    </>
  );
}
