"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
// import { useAnalytics } from "use-analytics";
import { analytics } from "@/providers/analytics";

export const HandleRouteChange = () => {
  // const { page } = useAnalytics();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log({ analytics, pathname, searchParams });
    analytics.page();
  }, [pathname, searchParams]);

  return null;
};

export default HandleRouteChange;
