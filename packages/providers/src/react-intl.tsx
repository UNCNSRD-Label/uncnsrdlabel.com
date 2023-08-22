"use client";

import { defaultLocale } from "@uncnsrdlabel/lib";
import { IETFLanguageTag } from "@uncnsrdlabel/types";
import { PropsWithChildren } from "react";
import { IntlProvider, type ResolvedIntlConfig } from "react-intl";

export function AppIntlProvider({
  children,
  locale,
  messages,
}: PropsWithChildren<{
  locale: IETFLanguageTag;
  messages: ResolvedIntlConfig["messages"]
}>) {
  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale.language}
    >
      {children}
    </IntlProvider>
  );
}