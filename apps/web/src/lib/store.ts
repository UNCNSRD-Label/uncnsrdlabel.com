import { getDictionary } from "@/lib/dictionary";
import { ResultOf } from "@graphql-typed-document-node/core";
import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import {
  getLocalizationDetailsHandler,
  getLocalizationDetailsQuery,
} from "@uncnsrdlabel/graphql-shopify-storefront";
import {
  getLangProperties
} from "@uncnsrdlabel/lib";
import { type ResolvedIntlConfig } from "react-intl";

const cartId: string | null = null;

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag;

const { country, language } = getLangProperties(lang);

const localization = {} as unknown as ResultOf<typeof getLocalizationDetailsQuery>['localization'];

const messages = [] as unknown as ResolvedIntlConfig["messages"];

const defaultState = {
  cartId,
  country,
  lang,
  language,
  localization,
  setLocalization: async ({ lang }: { lang: Intl.BCP47LanguageTag }) => {
    const localization = await getLocalizationDetailsHandler({ lang });
    
    const messages: ResolvedIntlConfig["messages"] = await getDictionary({ localization });

    state$.assign({
      localization,
      messages,
    });
  },
  messages,
  setMessages: async () => {
    const messages: ResolvedIntlConfig["messages"] = await getDictionary({ localization: state$.localization.get() });

    state$.assign({
      messages,
    });
  },
};

export const state$ = observable(defaultState);

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

persistObservable(state$, {
  local: "app",
});
