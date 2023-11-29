import languageFallback from "@/dictionaries/en.json";
import {
    getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { getIETFLanguageTagFromlocaleTag } from "@uncnsrdlabel/lib";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";
import merge from "deepmerge";
import { getProperty } from "dot-prop";
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async (locale: Intl.Locale, namespace: string) => {
  const localization = await getLocalizationHandler();

  const IETFLanguageTags = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableCountry.isoCode}-${availableLanguage.isoCode}` as unknown as IETFLanguageTag))

  const dictionariesFiles = [
    ...localization.availableLanguages.map((availableLanguage) => [
      availableLanguage.isoCode,
      () =>
        import(`@/dictionaries/${availableLanguage.isoCode}.json`).then(
          (module) => module.default,
        ),
    ]),
    ...IETFLanguageTags.map((IETFLanguageTag) => [
      IETFLanguageTag,
      () =>
        import(
          `@/dictionaries/${IETFLanguageTag}.json`
        ).then((module) => module.default),
    ]),
  ];

  const dictionaries = Object.fromEntries(dictionariesFiles);

  const language = await dictionaries[locale.language]();

  const languageLocalised =
    await dictionaries[getIETFLanguageTagFromlocaleTag(locale)]();

  const merged = merge.all([
    languageFallback,
    language,
    languageLocalised,
  ]) as typeof languageFallback;

  return getProperty(merged, namespace) as ResolvedIntlConfig["messages"];
};
