import { PropsWithChildren } from "react";

import { AppAnalyticsProvider } from "@uncnsrdlabel/providers/analytics/index";
import { AppReactQueryProvider } from "@uncnsrdlabel/providers/react-query";
import { AppShopifyProvider } from "@uncnsrdlabel/providers/shopify";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppReactQueryProvider>
      <AppShopifyProvider>
        <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
      </AppShopifyProvider>
    </AppReactQueryProvider>
  );
}
