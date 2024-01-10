import { state$ } from "@/lib/store";
import { createIntl, type IntlShape } from "@formatjs/intl";

export type GetIntlFn = (_tag: string | undefined, _namespace: string) => Promise<IntlShape<string>>

export function getIntl(lang?: Intl.BCP47LanguageTag) {
  const locale = lang ?? state$.lang.get();
  const messages = state$.messages.get();

  return createIntl({
    locale,
    messages,
  });
}