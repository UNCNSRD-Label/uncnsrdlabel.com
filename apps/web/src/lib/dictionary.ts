import languageFallback from "@/dictionaries/en.json";
import {
  getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import merge from "deepmerge";
import { getProperty } from "dot-prop";
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async (lang: Intl.BCP47LanguageTag, namespace: string) => {
  const localization = await getLocalizationHandler(lang);

  const languageGeneric = import(`@/dictionaries/${localization.language.isoCode}.json`).then(
    (module) => module.default,
  );

  const languageLocalised = import(`@/dictionaries/${localization.language.isoCode}-${localization.country.isoCode}.json`).then(
    (module) => module.default,
  );

  const merged = merge.all([
    languageFallback,
    languageGeneric,
    languageLocalised,
  ]) as typeof languageFallback;

  return getProperty(merged, namespace) as ResolvedIntlConfig["messages"];
};
