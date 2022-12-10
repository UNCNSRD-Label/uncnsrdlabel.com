"use client";

import { NextAdapter } from "next-query-params";
import { QueryParamProvider } from "use-query-params";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <QueryParamProvider adapter={NextAdapter}>{children}</QueryParamProvider>
  );
}
