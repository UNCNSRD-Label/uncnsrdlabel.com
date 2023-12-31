"use client";

import { state$ } from "@/lib/store";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { useEffect } from "react";

// This component is used to set the state of the app for the client, and only exists as the RootLayout component is rendered on the server.

export function SetState({ lang }: { lang: Intl.BCP47LanguageTag }) {
  useEffect(() => {
    const setState = async () => {
      const localization = await getLocalizationDetailsHandler({ lang });

      state$.country.set(lang.split("-")[1] as CountryCode);
      state$.lang.set(lang);
      state$.language.set(lang.split("-")[0] as LanguageCode);
      state$.localization.set(localization);
    };

    setState();
  });

  return null;
}
