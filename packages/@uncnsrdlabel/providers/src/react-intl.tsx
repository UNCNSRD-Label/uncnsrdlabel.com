"use client";

import {
  getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { PropsWithChildren } from "react";
import { IntlProvider, type ResolvedIntlConfig } from "react-intl";

export async function AppIntlProvider({
  children,
  lang,
  messages,
}: PropsWithChildren<{
  lang: Intl.BCP47LanguageTag;
  messages: ResolvedIntlConfig["messages"];
}>) {
  const localization = await getLocalizationHandler({
    lang,
  });

  const defaultLocale = localization.country.isoCode;

  return (
    <IntlProvider
      messages={messages}
      locale={lang}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
}
