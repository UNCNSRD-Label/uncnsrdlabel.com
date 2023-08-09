import { localeTagToIETFLanguageTag, locales } from "@uncnsrdlabel/lib/i18n";
import merge from "deepmerge";
import { getProperty } from 'dot-prop';
import { type ResolvedIntlConfig } from "react-intl";
import languageFallback from "./dictionaries/en.json";

const dictionariesFiles = [
  ...locales.map((locale) => [
    locale.language,
    () =>
      import(`./dictionaries/${locale.language}.json`).then(
        (module) => module.default,
      ),
  ]),
  ...locales.map((locale) => [
    localeTagToIETFLanguageTag(locale),
    () =>
      import(`./dictionaries/${localeTagToIETFLanguageTag(locale)}.json`).then(
        (module) => module.default,
      ),
  ]),
];

const dictionaries = Object.fromEntries(dictionariesFiles);

export const getDictionary = async (locale: Intl.Locale, namespace: string) => {
  const language = await dictionaries[locale.language]();

  const languageLocalised = await dictionaries[localeTagToIETFLanguageTag(locale)]();

  const merged = merge.all([languageFallback, language, languageLocalised]) as typeof languageFallback;

  return getProperty(merged, namespace) as ResolvedIntlConfig["messages"];
};