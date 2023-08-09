import "server-only";

import { locales } from "@uncnsrdlabel/lib/i18n";

const dictionariesFiles = [
  ...locales.map((locale) => [
    locale.language,
    () =>
      import(`./dictionaries/${locale.language}.json`).then(
        (module) => module.default,
      ),
  ]),
  ...locales.map((locale) => [
    locale.toString(),
    () => import(`./dictionaries/${locale.toString()}.json`).then((module) => module.default),
  ])
];

const dictionaries = Object.fromEntries(dictionariesFiles);

console.log({ dictionaries });

export const getDictionary = async (locale: Intl.Locale) => {
  const language = await dictionaries[locale.language]();
  const languageLocalised = await dictionaries[locale.toString()]()

  console.log({language, languageLocalised})

  return {
    ...language,
    ...languageLocalised
  };
};
