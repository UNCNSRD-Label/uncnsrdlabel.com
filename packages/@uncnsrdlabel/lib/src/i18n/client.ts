"use client";

import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { useParams } from "next/navigation";

export function useGetInContextVariables() {
  const { lang } = useParams();

  const tag = Array.isArray(lang) ? lang[0] : lang;

  const locale = new Intl.Locale(tag);

  const country = (locale.region) as CountryCode;
  const language = (locale.language).toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
}
