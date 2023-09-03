'use client';

import { type IETFLanguageTag } from "@uncnsrdlabel/types";
import { PropsWithChildren } from "react";
import { type ResolvedIntlConfig } from "react-intl";
import { AppAnalyticsProvider } from "./analytics/index";
import { AppIntlProvider } from "./react-intl";
import { AppReactQueryProvider } from "./react-query";
import { AppShopifyProvider } from "./shopify";

export function AppProviders({ children, locale, messages }: PropsWithChildren<{
  locale: IETFLanguageTag;
  messages: ResolvedIntlConfig["messages"]
}>) {
  return (
    <AppReactQueryProvider>
      <AppIntlProvider locale={locale} messages={messages}>
        <AppShopifyProvider locale={locale}>
          <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
        </AppShopifyProvider>
      </AppIntlProvider>
    </AppReactQueryProvider>
  );
}
