import {
    getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";

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