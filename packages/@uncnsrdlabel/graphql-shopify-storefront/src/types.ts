
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";

export type PolicyName =
  | "privacyPolicy"
  | "refundPolicy"
  | "shippingPolicy"
  | "termsOfService";

export type VariablesWithContext = {
  country: CountryCode;
  language: LanguageCode;
}