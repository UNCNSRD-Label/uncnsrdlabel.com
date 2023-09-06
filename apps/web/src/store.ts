import { observable } from "@legendapp/state";
import { enableReactUse } from "@legendapp/state/config/enableReactUse";
import { getLocaleObjectFromIETFLanguageTag } from "@uncnsrdlabel/lib/i18n";

enableReactUse();

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

const locale = getLocaleObjectFromIETFLanguageTag(lang);

export const state$ = observable({
  lang,
  locale,
});
