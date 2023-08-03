import { PropsWithChildren } from "react";

import { AppAnalyticsProvider } from "@uncnsrdlabel/providers/analytics/index.js";
import { AppReactQueryProvider } from "@uncnsrdlabel/providers/react-query.js";
import { AppShopifyProvider } from "@uncnsrdlabel/providers/shopify.js";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppReactQueryProvider>
      <AppShopifyProvider>
        <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
      </AppShopifyProvider>
    </AppReactQueryProvider>
  );
}
