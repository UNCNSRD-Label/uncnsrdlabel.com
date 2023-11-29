"use client";

import {
  getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";
import { PropsWithChildren } from "react";
import { IntlProvider, type ResolvedIntlConfig } from "react-intl";

export async function AppIntlProvider({
  children,
  locale,
  messages,
}: PropsWithChildren<{
  locale: IETFLanguageTag;
  messages: ResolvedIntlConfig["messages"];
}>) {
  const localization = await getLocalizationHandler();

  const defaultLocale = localization.country.isoCode;

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </IntlProvider>
  );
}
