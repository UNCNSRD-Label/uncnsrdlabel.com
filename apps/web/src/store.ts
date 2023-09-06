import { observable } from "@legendapp/state";
import { getLocaleObjectFromIETFLanguageTag } from "@uncnsrdlabel/lib";

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

const locale = getLocaleObjectFromIETFLanguageTag(lang);

export const state$ = observable({
  lang,
  locale,
});

state$.onChange(({ value }) => console.log('state changed to', value))