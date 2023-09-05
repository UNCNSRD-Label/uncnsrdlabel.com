import "server-only";

import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { headers } from "next/headers";

export const getInContextVariables = async () => {
  "use server";

  const headersList = headers();

  const localeHeader =
    headersList.get("x-locale") ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

  const locale = new Intl.Locale(localeHeader);

  const country = (locale.region ?? "US") as CountryCode;
  const language = (
    locale.language ?? "en"
  ).toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
};
