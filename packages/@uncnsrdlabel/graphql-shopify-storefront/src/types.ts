import {
  type CountryCode,
  type LanguageCode,
  type ProductVariant,
} from "@shopify/hydrogen-react/storefront-api-types";

export type PolicyName =
  | "privacyPolicy"
  | "refundPolicy"
  | "shippingPolicy"
  | "termsOfService";

export type VariablesWithContext = {
  country: CountryCode;
  language: LanguageCode;
};

export type ProductVariantSubset = Pick<ProductVariant, "id" | "price" | "selectedOptions" | "sku">