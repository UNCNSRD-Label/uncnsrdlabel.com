"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type { MutableRefObject } from "react";
import useScrollSpy from "react-use-scrollspy";
import slugify from "slugify";

const LinkClassName =
  "block select-none rounded-[4px] px-3 py-3 text-xs no-underline outline-none drop-shadow";
export function NavigationMenu({
  className,
  sectionElementRefs,
}: {
  className: string;
  sectionElementRefs: MutableRefObject<null>[];
}) {
  const sectionElements = ["Images", "Purchase Options", "Details"];

  const activeSection =
    useScrollSpy({
      offsetPx: -100,
      sectionElementRefs,
    }) ?? 0;

  return (
    <NavigationMenuPrimitive.Root
      className={cn("bg-black text-light", className)}
    >
      <NavigationMenuPrimitive.List className="center m-0 grid w-full list-none grid-flow-col justify-stretch text-center uppercase">
        {sectionElements.map((sectionElement, index) => (
          <NavigationMenuPrimitive.Item
            key={sectionElement || index}
            className={cn(activeSection === index && "bg-hotPink")}
          >
            <NavigationMenuPrimitive.Link
              className={cn(LinkClassName)}
              href={`#${slugify(sectionElement, { lower: true })}`}
              // onClick={() => setActiveLink(index)}
            >
              {sectionElement}
            </NavigationMenuPrimitive.Link>
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
