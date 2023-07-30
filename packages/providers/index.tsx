import { PropsWithChildren } from "react";

import { AnalyticsProvider } from "@/providers/analytics";
import { ReactQueryProvider } from "@/providers/react-query";
import { ShopifyProvider } from "@/providers/shopify";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <ShopifyProvider>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </ShopifyProvider>
    </ReactQueryProvider>
  );
}
