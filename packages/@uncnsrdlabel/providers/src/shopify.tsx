"use client";

import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { getLocaleObjectFromIETFLanguageTag } from "@uncnsrdlabel/lib";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";
import { PropsWithChildren } from "react";

const storefrontToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontApiVersion =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION!;

export function AppShopifyProvider({ children, locale }: PropsWithChildren<{
  locale: IETFLanguageTag;
}>) {
  const localeTag = getLocaleObjectFromIETFLanguageTag(locale);

  const countryIsoCode = (localeTag.region ?? "US") as CountryCode;
  const languageIsoCode = (localeTag.language ?? "en") as LanguageCode;

  const shopifyConfig = {
    countryIsoCode,
    languageIsoCode,
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
