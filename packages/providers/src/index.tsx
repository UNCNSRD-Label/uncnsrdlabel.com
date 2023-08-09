import { PropsWithChildren } from "react";

import { AppAnalyticsProvider } from "@uncnsrdlabel/providers/analytics/index";
import { AppIntlProvider } from "@uncnsrdlabel/providers/react-intl";
import { AppReactQueryProvider } from "@uncnsrdlabel/providers/react-query";
import { AppShopifyProvider } from "@uncnsrdlabel/providers/shopify";
import { IETFLanguageTag } from "@uncnsrdlabel/types";
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
