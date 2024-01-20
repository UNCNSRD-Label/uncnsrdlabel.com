"use client";

import { PropsWithChildren } from "react";
import { IntlProvider, type ResolvedIntlConfig } from "react-intl";

export function AppIntlProvider({
  children,
  defaultLocale,
  lang,
  messages,
}: PropsWithChildren<{
  defaultLocale: Intl.BCP47LanguageTag;
  lang: Intl.BCP47LanguageTag;
  messages: ResolvedIntlConfig["messages"];
}>) {
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
