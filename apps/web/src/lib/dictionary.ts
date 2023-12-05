import {
  getLocalizationDetailsHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import merge from "deepmerge";
import { getProperty } from "dot-prop";
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async (lang: Intl.BCP47LanguageTag, namespace: string) => {
  const localization = await getLocalizationDetailsHandler({ lang });

  const { default: languageFallback } = await import(`@/dictionaries/en.json`);

  const { default: languageGeneric } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}.json`);

  const { default: languageLocalised } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}-${localization.country.isoCode}.json`);

  const merged = merge.all([
    languageFallback,
    languageGeneric,
    languageLocalised,
  ]) as typeof languageFallback;

  return getProperty(merged, namespace) as ResolvedIntlConfig["messages"];
};
