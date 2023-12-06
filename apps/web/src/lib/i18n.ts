import { getDictionary } from "@/lib/dictionary";
import { state$ } from "@/lib/store";
import { createIntl } from "@formatjs/intl";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { useParams } from "next/navigation";
import { cache, use } from "react";

export const getLocalizationDetailsCached = cache(async ({ lang }: { lang?: string; }) => getLocalizationDetailsHandler({ lang }))

export const getAlternativeLanguages = async ({ localization, path }: {
  localization: {
    availableCountries: {
      availableLanguages: {
        isoCode: string;
      }[]
      isoCode: string;
    }[]
  }; path: string
}) => {
  const BCP47LanguageTags: Intl.BCP47LanguageTag[] = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableLanguage.isoCode.toLocaleLowerCase()}-${availableCountry.isoCode}` as Intl.BCP47LanguageTag))

  const languages: Record<string, string> = {};

  BCP47LanguageTags.forEach((BCP47LanguageTag) => {
    languages[BCP47LanguageTag] = `/${BCP47LanguageTag}/${path}`.replace(/([^:]\/)\/+/g, "$1");
  })

  return languages;
}

export async function getIntl(tag: Intl.BCP47LanguageTag, namespace: string) {
  // createIntl refers to a BCP47LanguageTag as a "locale"
  let locale: Intl.BCP47LanguageTag = state$.lang.get();

  try {
    // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
    const [canonicalLocale] = Intl.getCanonicalLocales(tag)

    locale = canonicalLocale as Intl.BCP47LanguageTag;
  } catch (error) {
    console.error({ error });
  } finally {
    return createIntl({
      locale,
      messages: await getDictionary(namespace),
    });
  }
}

export function useGetIntl(namespace: string) {
  const { lang } = useParams();

  const locale = Array.isArray(lang) ? lang[0] : lang;

  return createIntl({
    locale,
    messages: use(getDictionary(namespace)),
  });
}
