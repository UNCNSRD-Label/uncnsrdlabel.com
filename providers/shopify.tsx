"use client";

import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";

import { ShopifyContextProps } from "@shopify/hydrogen-react/dist/types/ShopifyProvider";

export default function Provider({
  children,
  shopifyConfig,
}: {
  children: React.ReactNode;
  shopifyConfig: ShopifyContextProps;
}) {
  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <CartProvider>{children}</CartProvider>
    </ShopifyProvider>
  );
}
