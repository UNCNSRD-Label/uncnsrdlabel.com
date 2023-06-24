"use client";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { clsx } from "clsx";

import { Product } from "lib/shopify/types";

const LinkClassName =
  "block select-none rounded-[4px] px-3 py-2 text-base no-underline outline-none focus:shadow-[0_0_0_2px]";
export function NavigationMenu({
  className,
  product,
}: {
  className: string;
  product: Product;
}) {
  console.log({ product });
  return (
    <NavigationMenuPrimitive.Root className={clsx("flex", className)}>
      <NavigationMenuPrimitive.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className={LinkClassName}
            href="#summary"
          >
            Summary
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className={LinkClassName}
            href="#purchase-options"
          >
            Purchase Options
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className={LinkClassName}
            href="#details"
          >
            Details
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
