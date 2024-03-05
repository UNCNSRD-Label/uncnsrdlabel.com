import { type LanguageCode } from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { PRE_GENERATED_BCP47_LANGUAGE_TAGS } from "@uncnsrdlabel/lib";
import { intersection } from "lodash";

export const getAlternativeLanguages = ({
  localization,
  path,
}: {
  localization: {
    availableCountries: {
      availableLanguages: {
        isoCode: string;
      }[];
      isoCode: string;
    }[];
  };
  path: string;
}) => {
  const BCP47LanguageTags: Intl.BCP47LanguageTag[] =
    localization.availableCountries.flatMap((availableCountry) =>
      availableCountry.availableLanguages.map(
        (availableLanguage) =>
          `${availableLanguage.isoCode.toLocaleLowerCase()}-${availableCountry.isoCode}` as Intl.BCP47LanguageTag,
      ),
    );

  const languages: Record<string, string> = {};

  BCP47LanguageTags?.forEach((BCP47LanguageTag) => {
    languages[BCP47LanguageTag] = `/${BCP47LanguageTag}/${path}`.replace(
      /([^:]\/)\/+/g,
      "$1",
    );
  });

  return languages;
};

export const getAvailableBCP47LanguageTags = async () => {
  const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en-AU";

  const localization = await getLocalizationDetailsHandler({ lang });

  const languageCodes = localization.availableLanguages.map(
    (availableLanguage) =>
      availableLanguage.isoCode.toLocaleLowerCase() as LanguageCode,
  );

  const shopifyBCP47LanguageTags: Intl.BCP47LanguageTag[] =
    localization.availableCountries.flatMap((availableCountry) =>
      availableCountry.availableLanguages.map(
        (availableLanguage) =>
          `${availableLanguage.isoCode.toLocaleLowerCase()}-${
            availableCountry.isoCode
          }` as Intl.BCP47LanguageTag,
      ),
    );

  // To prevent extremely large builds, limit pre-generated BCP47 language tags to the intersection of the ones the Shopify store supports and the hard-coded list
  const preGeneratedBCP47LanguageTags = intersection(
    PRE_GENERATED_BCP47_LANGUAGE_TAGS,
    shopifyBCP47LanguageTags,
  );

  const availableBCP47LanguageTags = [
    ...languageCodes,
    ...preGeneratedBCP47LanguageTags,
  ];

  return availableBCP47LanguageTags;
};

export const getAvailableCountries = async () => {
  const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en-AU";

  const localization = await getLocalizationDetailsHandler({ lang });

  const availableCountries = localization.availableCountries;

  return availableCountries;
};

export const getAvailableLanguages = async () => {
  const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en-AU";

  const localization = await getLocalizationDetailsHandler({ lang });

  const availableLanguages = localization.availableLanguages;

  return availableLanguages;
};
