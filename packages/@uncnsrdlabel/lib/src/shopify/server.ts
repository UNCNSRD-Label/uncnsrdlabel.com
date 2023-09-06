"use server";

import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { headers } from "next/headers";
// import "server-only";

export const getInContextVariables = async () => {
  const headersList = headers();

  const localeHeader =
    headersList.get("x-locale") ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

  const locale = new Intl.Locale(localeHeader);

  const country = (locale.region) as CountryCode;

  const language = (
    locale.language
  ).toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
};
