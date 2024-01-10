import { state$ } from "@/lib/store";
import { createIntl, type IntlShape } from "@formatjs/intl";
import { useSelector } from "@legendapp/state/react";
import { type ResolvedIntlConfig } from "react-intl";

export type GetIntlFn = (_tag: string | undefined, _namespace: string) => Promise<IntlShape<string>>

export function getIntl() {
  const locale = useSelector<Intl.BCP47LanguageTag>(() => state$.lang.get());
  const messages = useSelector<ResolvedIntlConfig["messages"]>(() => state$.messages.get());

  return createIntl({
    locale,
    messages,
  });
}