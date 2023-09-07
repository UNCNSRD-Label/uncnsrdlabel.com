import {
  type CountryCode,
  type LanguageCode
} from "@shopify/hydrogen-react/storefront-api-types";

export const getInContextVariables = (lang: Intl.BCP47LanguageTag) => {
  const locale = new Intl.Locale(lang);

  const country = (locale.region) as CountryCode;

  const language = (
    locale.language
  ).toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
};
