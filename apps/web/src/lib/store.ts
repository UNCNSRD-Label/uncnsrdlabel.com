import { getIntl } from "@/lib/i18n/server";
import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  // getLocalizationDetailsQuery,
  getLocalizationDetailsHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  getInContextVariables
} from "@uncnsrdlabel/lib";

const cartId: string | null = null;

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag;

const { country, language } = getInContextVariables(lang);

// const localization = await getLocalizationDetailsHandler({ lang });
const localization = {} as ReturnType<typeof getLocalizationDetailsHandler>;

// const intl = await getIntl({ localization });
const intl = {} as ReturnType<typeof getIntl>;

const defaultState = {
  cartId,
  country,
  intl,
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
