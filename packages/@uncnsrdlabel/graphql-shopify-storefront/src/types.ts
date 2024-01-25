import {
  type CountryCode,
  type LanguageCode,
} from "./codegen/graphql";

export type PolicyName =
  | "privacyPolicy"
  | "refundPolicy"
  | "shippingPolicy"
  | "termsOfService";

export type VariablesWithContext = {
  country: CountryCode;
  language: LanguageCode;
};
