import "server-only";

import { getDictionary } from "@/dictionaries";
import { createIntl } from '@formatjs/intl';
import { headers } from "next/headers";

export async function getIntl(namespace) {
    const headersList = headers();
  
    const localeHeader = headersList.get("x-locale");
  
    const locale = new Intl.Locale(localeHeader);
  
    return createIntl({
      locale: localeHeader,
      messages: await getDictionary(locale, namespace)
    });
  }