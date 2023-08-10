'use client'

import { getDictionary } from "@/dictionaries";
import { createIntl } from '@formatjs/intl';
import { useParams } from "next/navigation";
import { use } from "react";

export function useIntl(namespace) {
    const { lang } = useParams();
 
    const tag = Array.isArray(lang) ? lang[0] : lang;

    const locale = new Intl.Locale(tag);
  
    return createIntl({
      locale: tag,
      messages: use(getDictionary(locale, namespace))
    });
  }