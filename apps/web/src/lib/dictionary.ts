import {
    getLocalizationDetailsHandler
} from "@uncnsrdlabel/graphql-shopify-storefront";
import merge from "deepmerge";
import { deepKeys, getProperty } from 'dot-prop';
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async ({ lang, namespace }: { lang: Navigator['language']; namespace?: string }): Promise<ResolvedIntlConfig["messages"]> => {
  if(!lang) {
    console.error("No lang in getDictionary")
  }

  const localization = await getLocalizationDetailsHandler({ lang });

  let languageFallback = {}
  let languageGeneric = {}
  let languageLocalised = {}

  try {
    const { default: languageFallbackDictionary } = await import(`@/dictionaries/en.json`);
    languageFallback = languageFallbackDictionary;
  } catch (error) {
    console.debug(error);
  }

  try {
    const { default: languageGenericDictionary } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}.json`) ?? {};
    languageGeneric = languageGenericDictionary;
  } catch (error) {
    // console.debug(error);
  }

  try {
    const { default: languageLocalisedDictionary } = await import(`@/dictionaries/${localization.language.isoCode.toLocaleLowerCase()}-${localization.country.isoCode}.json`) ?? {};
    languageLocalised = languageLocalisedDictionary;
  } catch (error) {
    // console.debug(error);
  }

  const allMessages = merge.all([
    languageFallback,
    languageGeneric,
    languageLocalised,
  ]) as typeof languageFallback;

  const namespaceMessagesFlattened: Record<string, string> = {}

  let messages = allMessages

  if (namespace) {
    messages = getProperty(allMessages, namespace) as {};
  }

  for (const property of deepKeys(messages)) {
    namespaceMessagesFlattened[property] = getProperty(messages, property)
  }

  return namespaceMessagesFlattened
};
