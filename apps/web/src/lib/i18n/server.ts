import { state$ } from "@/lib/store";
import { createIntl, type IntlShape } from "@formatjs/intl";
// import { ResultOf } from "@graphql-typed-document-node/core";
// import {
//   getLocalizationDetailsQuery
// } from "@uncnsrdlabel/graphql-shopify-storefront";
// import { type ResolvedIntlConfig } from "react-intl";

export type GetIntlFn = (_tag: string | undefined, _namespace: string) => Promise<IntlShape<string>>

export function getIntl() {
// export function getIntl({ localization, messages }: { localization: ResultOf<typeof getLocalizationDetailsQuery>['localization']; messages: ResolvedIntlConfig["messages"]; }) {
  // const lang = (localization ? `${localization.language.isoCode}-${localization.country.isoCode}` : process.env.NEXT_PUBLIC_DEFAULT_LOCALE) as Intl.BCP47LanguageTag;
  
  // const [canonicalLocale] = Intl.getCanonicalLocales(lang)

  // const locale = canonicalLocale as Intl.BCP47LanguageTag;

  const locale = state$.lang.get();
  const messages = state$.messages.get();
console.log('locale', locale);
console.log('messages', messages);
  return createIntl({
    locale,
    messages,
  });
}