import { getDictionary } from "@/lib/dictionary";
import { createIntl } from "@formatjs/intl";
import {
  getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import { useParams } from "next/navigation";
import { use } from "react";

export const getAlternativeLanguages = async ({ lang, path }: { lang: Intl.BCP47LanguageTag; path: string }) => {
  const localization = await getLocalizationHandler({ lang });

  const BCP47LanguageTags = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableCountry.isoCode}-${availableLanguage.isoCode}` as Intl.BCP47LanguageTag))

  const languages = [];

  for (const BCP47LanguageTag in BCP47LanguageTags) {
    languages.push([BCP47LanguageTag, {
      title: BCP47LanguageTag,
      url: `/${BCP47LanguageTag}/${path}`,
    }]);
  }

  return Object.fromEntries(languages);
}

export async function getIntl(tag: Intl.BCP47LanguageTag, namespace: string) {
  let locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'en-AU';

  try {
    // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
    const [canonicalLocale] = Intl.getCanonicalLocales(tag)

    locale = canonicalLocale;
  } catch (error) {
    console.error({ error });
  } finally {
    return createIntl({
      locale,
      messages: await getDictionary(locale, namespace),
    });
  }
}

export function useGetIntl(namespace: string) {
  const { lang } = useParams();

  const locale = Array.isArray(lang) ? lang[0] : lang;

  return createIntl({
    locale,
    messages: use(getDictionary(locale, namespace)),
  });
}
