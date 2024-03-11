"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePage } from "use-analytics";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = usePage();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log("page", { url });

    page();
  }, [pathname, searchParams]);

  return null;
}
