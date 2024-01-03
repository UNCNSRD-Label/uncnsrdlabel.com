"use client";

import { PropsWithChildren } from "react";
import { AppAnalyticsProvider } from "./analytics/index";
import { AppIntlProvider } from "./react-intl";
import { AppReactQueryProvider } from "./react-query";
import { AppShopifyProvider } from "./shopify";

export {
  AppAnalyticsProvider,
  AppIntlProvider,
  AppReactQueryProvider,
  AppShopifyProvider
};

export function AppProviders({
  children,
  lang,
}: PropsWithChildren<{
  lang: Intl.BCP47LanguageTag;
}>) {
  return (
    <AppReactQueryProvider>
      <AppShopifyProvider lang={lang}>
        <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
      </AppShopifyProvider>
    </AppReactQueryProvider>
  );
}
