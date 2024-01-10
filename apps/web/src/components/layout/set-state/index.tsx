"use client";

import { state$ } from "@/lib/store";
import {
  getLangProperties
} from "@uncnsrdlabel/lib";
import { useEffect } from "react";

// This component is used to set the state of the app for the client, and only exists as the RootLayout component is rendered on the server.
export function SetState({ lang }: { lang: Intl.BCP47LanguageTag }) {
  useEffect(() => {
    const setState = async () => {
      const { country, language } = getLangProperties(lang);

      state$.country.set(country);
      state$.lang.set(lang);
      state$.language.set(language);
      
      state$.setLocalization({ lang });
    };

    setState();
  });

  return null;
}
