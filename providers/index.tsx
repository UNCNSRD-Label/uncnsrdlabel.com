import { PropsWithChildren } from "react";

import AnalyticsProvider from "@/providers/analytics";
import ReactQueryProvider from "@/providers/react-query";
import ShopifyProvider from "@/providers/shopify";
// import SupabaseProvider from "@/providers/supabase";

export default function AppProviders({ children }: PropsWithChildren) {
  return (
    // <SupabaseProvider>
    <ReactQueryProvider>
      <ShopifyProvider>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </ShopifyProvider>
    </ReactQueryProvider>
    // </SupabaseProvider>
  );
}
