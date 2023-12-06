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

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag;

const country = lang.split("-")[1] as CountryCode;

const language = lang.split("-")[0] as LanguageCode;

const localization: {
  availableCountries: {
    availableLanguages: {
      isoCode: string;
    }[]
    isoCode: string;
  }[]
  country: {
    isoCode: string;
  }
  language: {
    isoCode: string;
  }
} = {
  availableCountries: [{
    availableLanguages: [{
      isoCode: language
    }],
    isoCode: country
  }],
  country: {
    isoCode: country,
  },
  language: {
    isoCode: language,
  },
};

export const state$ = observable({
  country,
  lang,
  language,
  localization,
});

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

persistObservable(state$, {
  local: "app",
});
