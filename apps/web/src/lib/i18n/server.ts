'use server';

import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { createIntl, type IntlShape } from "@formatjs/intl";
import { type ResolvedIntlConfig } from "react-intl";

export type GetIntlFn = (_tag: string | undefined, _namespace: string) => Promise<IntlShape<string>>

export async function getIntl(tag: Intl.BCP47LanguageTag = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!, namespace: string) {
  'use server';

  // createIntl refers to a BCP47LanguageTag as a "locale"
  let locale: Intl.BCP47LanguageTag = state$.lang.get();


  if (!namespace) {
    throw new Error("No namespace provided to getIntl")
  }

  if (!tag) {
    throw new Error("No tag provided to getIntl")
  }

  // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
  const [canonicalLocale] = Intl.getCanonicalLocales(tag)

  locale = canonicalLocale as Intl.BCP47LanguageTag;

  const messages: ResolvedIntlConfig["messages"] = await getDictionary(namespace);

  return createIntl({
    locale,
    messages,
  });
}