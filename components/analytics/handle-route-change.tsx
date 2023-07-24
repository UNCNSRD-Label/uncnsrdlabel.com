"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAnalytics } from "use-analytics";

export const HandleRouteChange = () => {
  const analytics = useAnalytics();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    analytics?.page();
  }, [analytics, pathname, searchParams]);

  return null;
};

export default HandleRouteChange;
