import { getDictionary } from "@/lib/dictionary";
import { createIntl, type IntlShape } from "@formatjs/intl";
import { ResultOf } from "@graphql-typed-document-node/core";
import {
  getLocalizationDetailsQuery
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { type ResolvedIntlConfig } from "react-intl";

export type GetIntlFn = (_tag: string | undefined, _namespace: string) => Promise<IntlShape<string>>

export async function getIntl({ localization, namespace }: { localization: ResultOf<typeof getLocalizationDetailsQuery>['localization']; namespace?: string }) {
  const lang = (localization ? `${localization.language.isoCode}-${localization.country.isoCode}` : process.env.NEXT_PUBLIC_DEFAULT_LOCALE) as Intl.BCP47LanguageTag;
  
  // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
  const [canonicalLocale] = Intl.getCanonicalLocales(lang)

  const locale = canonicalLocale as Intl.BCP47LanguageTag;

  const messages: ResolvedIntlConfig["messages"] = await getDictionary({ localization, namespace });

  return createIntl({
    locale,
    messages,
  });
}