"use client";

import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { useParams } from "next/navigation";

export function useInContextVariables() {
  const { lang } = useParams();

  const tag = Array.isArray(lang) ? lang[0] : lang;

  const locale = new Intl.Locale(tag);

  const country = (locale.region ?? "US") as CountryCode;
  const language = (locale.language ?? "en").toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
}
