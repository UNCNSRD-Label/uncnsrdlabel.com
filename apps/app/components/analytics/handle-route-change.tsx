"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePage } from "use-analytics";

export const HandleRouteChange = () => {
  const page = usePage();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    page();
  }, [page, pathname, searchParams]);

  return null;
};

export default HandleRouteChange;
