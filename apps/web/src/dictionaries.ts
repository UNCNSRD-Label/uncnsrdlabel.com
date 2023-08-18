import { getIETFLanguageTagFromlocaleTag, locales } from "@uncnsrdlabel/lib";
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
    getIETFLanguageTagFromlocaleTag(locale),
    () =>
      import(`./dictionaries/${getIETFLanguageTagFromlocaleTag(locale)}.json`).then(
        (module) => module.default,
      ),
  ]),
];

const dictionaries = Object.fromEntries(dictionariesFiles);

export const getDictionary = async (locale: Intl.Locale, namespace: string) => {
  const language = await dictionaries[locale.language]();

  const languageLocalised = await dictionaries[getIETFLanguageTagFromlocaleTag(locale)]();

  const merged = merge.all([languageFallback, language, languageLocalised]) as typeof languageFallback;

  return getProperty(merged, namespace) as ResolvedIntlConfig["messages"];
};