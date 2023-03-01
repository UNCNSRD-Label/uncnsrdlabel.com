"use client";

import type { ShopifyContextProps } from "@shopify/hydrogen-react/dist/types/ShopifyProvider";

import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";
import { CountryCode } from "@shopify/hydrogen-react/storefront-api-types";
import { ReactNode } from "react";

export default function Provider({
  children,
  shopifyConfig,
}: {
  children: ReactNode;
  shopifyConfig: ShopifyContextProps;
}) {
  const locale = new Intl.Locale(shopifyConfig.locale!);

  return (
    <ShopifyProvider shopifyConfig={shopifyConfig}>
      <CartProvider countryCode={locale.region as CountryCode}>
        {children}
      </CartProvider>
    </ShopifyProvider>
  );
}
