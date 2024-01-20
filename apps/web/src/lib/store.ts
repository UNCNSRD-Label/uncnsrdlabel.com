import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";

const cartId: string | null = null;

const defaultState = {
  cartId,
};

export const state$ = observable<{
  cartId: string | null;
}>(defaultState);

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

persistObservable(state$, {
  local: "app",
});
