import { observable } from "@legendapp/state";
import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import { getLocaleTagFromIETFLanguageTag } from "@uncnsrdlabel/lib";

enableReactUse();

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

const locale = getLocaleTagFromIETFLanguageTag(lang);

export const state$ = observable({
  lang,
  locale,
});
