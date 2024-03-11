"use client";

import { AnalyticsPageType } from "@shopify/hydrogen";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePage } from "use-analytics";

export function NavigationEvents({
  pageType,
}: {
  pageType: keyof typeof AnalyticsPageType;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = usePage();

  useEffect(() => {
    // const url = `${pathname}?${searchParams}`;
    // console.log("page", { url });

    page({
      pageType,
    });
  }, [pathname, searchParams]);

  return null;
}
