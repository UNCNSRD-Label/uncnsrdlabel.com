import { getDictionary } from "@/lib/dictionary";
import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  getLocalizationDetailsHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  getLangProperties
} from "@uncnsrdlabel/lib";
import { type ResolvedIntlConfig } from "react-intl";

const cartId: string | null = null;

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag;

const { country, language } = getLangProperties(lang);

const localization = await getLocalizationDetailsHandler({ lang });

const messages: ResolvedIntlConfig["messages"] = await getDictionary({ localization });

const defaultState = {
  cartId,
  country,
  lang,
  language,
  localization,
  messages,
};

export const state$ = observable(defaultState);

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

persistObservable(state$, {
  local: "app",
});
