import { PropsWithChildren } from "react";
import { type ResolvedIntlConfig } from "react-intl";
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
  defaultLocale,
  lang,
  messages,
}: PropsWithChildren<{
  defaultLocale: Intl.BCP47LanguageTag;
  lang: Intl.BCP47LanguageTag;
  messages: ResolvedIntlConfig["messages"];
}>) {
  return (
    <AppReactQueryProvider>
      <AppIntlProvider defaultLocale={defaultLocale} lang={lang} messages={messages}>
        <AppShopifyProvider lang={lang}>
          <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
        </AppShopifyProvider>
      </AppIntlProvider>
    </AppReactQueryProvider>
  );
}
