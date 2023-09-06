import { getDictionary } from "@/lib/get-dictionary";
import { createIntl } from "@formatjs/intl";

export async function getIntl(lang: Intl.BCP47LanguageTag, namespace: string) {
  const locale = new Intl.Locale(lang);

  return createIntl({
    locale: lang,
    messages: await getDictionary(locale, namespace),
  });
}
