import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";

export { type CountryCode, type LanguageCode };

export type IETFLanguageTag = `${LanguageCode}-${CountryCode}`;
