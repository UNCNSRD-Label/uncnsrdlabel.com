'use server';

import {
  type CountryCode,
  type InputMaybe,
  type LanguageCode
} from "@shopify/hydrogen-react/storefront-api-types";

export const getInContextVariables = (lang: Intl.BCP47LanguageTag) => {
  const locale = new Intl.Locale(lang);

  const country = (locale.region) as InputMaybe<CountryCode>;

  const language = (
    locale.language
  ).toLocaleUpperCase() as InputMaybe<LanguageCode>;

  return {
    country,
    language,
  };
};
