import { ResultOf } from "@graphql-typed-document-node/core";
import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";

import {
  getLocalizationDetailsQuery
} from "@uncnsrdlabel/graphql-shopify-storefront";

const cartId: string | null = null;

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag;

const country = lang.split("-")[1] as CountryCode;

const language = lang.split("-")[0] as LanguageCode;

const localization: ResultOf<typeof getLocalizationDetailsQuery>['localization'] = {
  availableCountries: [{
    availableLanguages: [{
      // @ts-expect-error Type '"AF"' is not assignable to type 'LanguageCode'
      isoCode: language
    }],
    // @ts-expect-error Type '"AC"' is not assignable to type 'CountryCode'
    isoCode: country
  }],
  country: {
    // @ts-expect-error Type '"AC"' is not assignable to type 'CountryCode'
    isoCode: country,
  },
  language: {
    // @ts-expect-error Type '"AF"' is not assignable to type 'LanguageCode'
    isoCode: language,
  },
};

const defaultState = {
  cartId,
  country,
  lang,
  language,
  localization,
};

export const state$ = observable(defaultState);

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

persistObservable(state$, {
  local: "app",
});
