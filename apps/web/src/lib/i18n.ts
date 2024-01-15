export const getAlternativeLanguages = ({ localization, path }: {
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

  BCP47LanguageTags?.forEach((BCP47LanguageTag) => {
    languages[BCP47LanguageTag] = `/${BCP47LanguageTag}/${path}`.replace(/([^:]\/)\/+/g, "$1");
  })

  return languages;
}