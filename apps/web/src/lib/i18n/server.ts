import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";

export async function getIntl(lang: Intl.BCP47LanguageTag, namespace: string) {
  return createIntl({
    locale: lang,
    messages: await getDictionary(lang, namespace),
  });
}
