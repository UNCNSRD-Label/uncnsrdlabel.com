import { state$ } from "@/lib/store";
import merge from "deepmerge";
import { dot } from 'dot-object';
import { getProperty } from "dot-prop";
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async (namespace?: string) => {
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
    console.error(error);
  }

  try {
    const { default: languageLocalisedDictionary } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}-${localization.country.isoCode}.json`) ?? {};
    languageLocalised = languageLocalisedDictionary;
  } catch (error) {
    console.error(error);
  }

  const allMessages = merge.all([
    languageFallback,
    languageGeneric,
    languageLocalised,
  ]) as typeof languageFallback;

  if (!namespace) {
    const allMessagesFlattened = dot(allMessages) as ResolvedIntlConfig["messages"];

    return allMessagesFlattened
  }

  const namespaceMessages = getProperty(allMessages, namespace) as ResolvedIntlConfig["messages"];

  const namespaceMessagesFlattened = dot(namespaceMessages);

  return namespaceMessagesFlattened
};
