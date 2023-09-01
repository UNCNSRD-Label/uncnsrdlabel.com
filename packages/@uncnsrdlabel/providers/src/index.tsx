'use client';

import { AppAnalyticsProvider } from "@uncnsrdlabel/providers/analytics/index.js";
import { AppIntlProvider } from "@uncnsrdlabel/providers/react-intl.js";
import { AppReactQueryProvider } from "@uncnsrdlabel/providers/react-query.js";
import { AppShopifyProvider } from "@uncnsrdlabel/providers/shopify.js";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";
import { PropsWithChildren } from "react";
import { type ResolvedIntlConfig } from "react-intl";

export function AppProviders({ children, locale, messages }: PropsWithChildren<{
  locale: IETFLanguageTag;
  messages: ResolvedIntlConfig["messages"]
}>) {
  return (
    <AppReactQueryProvider>
      <AppIntlProvider locale={locale} messages={messages}>
        <AppShopifyProvider>
          <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
        </AppShopifyProvider>
      </AppIntlProvider>
    </AppReactQueryProvider>
  );
}
