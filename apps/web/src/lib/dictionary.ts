import { ResultOf } from "@graphql-typed-document-node/core";
import {
  getLocalizationDetailsQuery
} from "@uncnsrdlabel/graphql-shopify-storefront";
import merge from "deepmerge";
import { deepKeys, getProperty } from 'dot-prop';
import { type ResolvedIntlConfig } from "react-intl";

export const getDictionary = async ({ localization, namespace }: { localization: ResultOf<typeof getLocalizationDetailsQuery>['localization']; namespace?: string }): Promise<ResolvedIntlConfig["messages"]> => {
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
    const { default: languageGenericDictionary } = await import(`@/dictionaries/${localization?.language?.isoCode.toLocaleLowerCase()}.json`) ?? {};
    languageGeneric = languageGenericDictionary;
  } catch (error) {
    console.error(error);
  }

  try {
    const { default: languageLocalisedDictionary } = await import(`@/dictionaries/${localization?.language?.isoCode.toLocaleLowerCase()}-${localization?.country?.isoCode}.json`) ?? {};
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
    const allMessagesFlattened = deepKeys(allMessages) as unknown as ResolvedIntlConfig["messages"];

    return allMessagesFlattened
  }

  const namespaceMessages = getProperty(allMessages, namespace);

  const namespaceMessagesFlattened = deepKeys(namespaceMessages) as unknown as ResolvedIntlConfig["messages"];

  return namespaceMessagesFlattened
};
