"use client";

import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { PropsWithChildren } from "react";

const storefrontToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontApiVersion =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION!;

export default function AppShopifyProvider({ children }: PropsWithChildren) {
  const shopifyConfig = {
    countryIsoCode: "US" as CountryCode,
    languageIsoCode: "en" as LanguageCode,
    storeDomain,
    storefrontApiVersion,
    storefrontToken,
  };

  return (
    <ShopifyProvider {...shopifyConfig}>
      <CartProvider>{children}</CartProvider>
    </ShopifyProvider>
  );
}
