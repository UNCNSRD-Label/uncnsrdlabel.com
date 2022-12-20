"use client";

import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";
import { ShopifyContextProps } from "@shopify/hydrogen-react/dist/types/ShopifyProvider";
import { ReactNode } from "react";

export default function Provider({
  children,
  shopifyConfig,
}: {
  children: ReactNode;
  shopifyConfig: ShopifyContextProps;
}) {
  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <CartProvider>{children}</CartProvider>
    </ShopifyProvider>
  );
}
