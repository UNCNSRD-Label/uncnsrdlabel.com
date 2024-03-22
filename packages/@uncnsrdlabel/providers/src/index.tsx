import { SpeedInsights } from "@vercel/speed-insights/next";
import { PropsWithChildren } from "react";
import { AppAnalyticsProvider } from "./analytics/index";
import { AppIntlProvider } from "./app-react-intl";
import { AppReactQueryProvider } from "./app-react-query";
import { AppShopifyProvider } from "./app-shopify";

export {
    AppAnalyticsProvider,
    AppIntlProvider,
    AppReactQueryProvider,
    AppShopifyProvider
};

export function AppProviders({
  children,
  lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!,
}: PropsWithChildren<{
  lang: Navigator['language'];
}>) {
  return (
    <AppReactQueryProvider>
      <AppShopifyProvider lang={lang}>
        <AppAnalyticsProvider>
          {children}
          <SpeedInsights />
        </AppAnalyticsProvider>
      </AppShopifyProvider>
    </AppReactQueryProvider>
  );
}
