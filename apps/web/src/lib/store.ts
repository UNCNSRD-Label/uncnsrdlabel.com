import { observable } from "@legendapp/state";
import { persistObservable } from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/persist-plugins/local-storage';
import { getLocaleObjectFromIETFLanguageTag } from "@uncnsrdlabel/lib";

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

const locale = getLocaleObjectFromIETFLanguageTag(lang);

export const state$ = observable({
  lang,
  locale,
});

persistObservable(state$, {
  local: 'app',
  persistLocal: ObservablePersistLocalStorage,
});