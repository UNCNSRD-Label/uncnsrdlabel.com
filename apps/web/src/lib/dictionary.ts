import { state$ } from "@/lib/store";
import merge from "deepmerge";
import { getProperty } from "dot-prop";
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async (namespace: string) => {
  const localization = state$.localization.get();

  let languageFallback = {}
  let languageGeneric = {}
  let languageLocalised = {}

  try {
    const { default: languageFallbackDictionary } = await import(`@/dictionaries/en.json`);
    languageFallback = languageFallbackDictionary;
  } catch (error) {
    console.error(error);
  }

  try {
    const { default: languageGenericDictionary } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}.json`) ?? {};
    languageGeneric = languageGenericDictionary;
  } catch (error) {
    // console.error(error);
  }

  try {
    const { default: languageLocalisedDictionary } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}-${localization.country.isoCode}.json`) ?? {};
    languageLocalised = languageLocalisedDictionary;
  } catch (error) {
    // console.error(error);
  }

  const merged = merge.all([
    languageFallback,
    languageGeneric,
    languageLocalised,
  ]) as typeof languageFallback;

  return getProperty(merged, namespace) as ResolvedIntlConfig["messages"];
};
