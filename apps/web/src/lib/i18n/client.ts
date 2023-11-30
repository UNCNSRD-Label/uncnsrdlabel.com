"use client";

import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import { useParams } from "next/navigation";
import { use } from "react";

export function useGetIntl(namespace: string) {
  const { lang } = useParams();

  const locale = Array.isArray(lang) ? lang[0] : lang;

  return createIntl({
    locale,
    messages: use(getDictionary(locale, namespace)),
  });
}
