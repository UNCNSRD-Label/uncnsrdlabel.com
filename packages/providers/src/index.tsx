import { PropsWithChildren } from "react";

import { AppAnalyticsProvider } from "./providers/analytics";
import { AppReactQueryProvider } from "./providers/react-query";
import { AppShopifyProvider } from "./providers/shopify";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <AppReactQueryProvider>
      <AppShopifyProvider>
        <AppAnalyticsProvider>{children}</AppAnalyticsProvider>
      </AppShopifyProvider>
    </AppReactQueryProvider>
  );
}
