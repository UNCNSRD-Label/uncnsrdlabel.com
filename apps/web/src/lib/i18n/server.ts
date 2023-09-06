"use server";

import { getDictionary } from "@/lib/get-dictionary";
import { createIntl } from "@formatjs/intl";
import { headers } from "next/headers";
// import "server-only";

export async function getIntl(namespace: string) {
  // TODO: Replace with state manager
  const headersList = headers();

  const localeHeader =
    headersList.get("x-locale") ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

  const locale = new Intl.Locale(localeHeader);

  return createIntl({
    locale: localeHeader,
    messages: await getDictionary(locale, namespace),
  });
}
