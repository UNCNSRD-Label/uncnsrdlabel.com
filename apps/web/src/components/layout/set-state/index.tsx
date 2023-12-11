"use client";

import { state$ } from "@/lib/store";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { useEffect } from "react";

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

  return (
    <i className="supports-not-[animation-timeline:view()]:hidden animate-grow-progress from-hotOrange to-hotPink fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-30% to-70% [animation-timeline:_scroll()]" />
  );
}
