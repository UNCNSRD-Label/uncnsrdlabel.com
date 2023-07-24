import { PropsWithChildren } from "react";

import AnalyticsProvider from "@/providers/analytics";
import ReactQueryProvider from "@/providers/react-query";
// import SupabaseProvider from "@/providers/supabase";

export default function Providers({ children }: PropsWithChildren) {
  return (
    // <SupabaseProvider>
    <ReactQueryProvider>
      <AnalyticsProvider>{children}</AnalyticsProvider>
    </ReactQueryProvider>
    // </SupabaseProvider>
  );
}
