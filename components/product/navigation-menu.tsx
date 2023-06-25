"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { clsx } from "clsx";
import type { MutableRefObject } from "react";
import useScrollSpy from "react-use-scrollspy";
import slugify from "slugify";

const LinkClassName =
  "block select-none rounded-[4px] px-3 py-2 text-xs no-underline outline-none focus:underline hover:underline";
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
      sectionElementRefs,
    }) ?? 0;

  return (
    <NavigationMenuPrimitive.Root
      className={clsx("flex justify-center bg-white", className)}
    >
      <NavigationMenuPrimitive.List className="center m-0 flex list-none p-1 uppercase">
        {sectionElements.map((sectionElement, index) => (
          <NavigationMenuPrimitive.Item key={sectionElement}>
            <NavigationMenuPrimitive.Link
              className={clsx(
                LinkClassName,
                activeSection === index && "!underline"
              )}
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
