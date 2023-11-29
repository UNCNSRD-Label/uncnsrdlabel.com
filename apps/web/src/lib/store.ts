import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";

const lang = 'en-AU' as IETFLanguageTag;

export const state$ = observable({
  lang,
});

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

persistObservable(state$, {
  local: "app",
});
