"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAnalytics } from "use-analytics";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { page } = useAnalytics();

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`;

    page();
  }, [pathname, searchParams]);

  return null;
}
