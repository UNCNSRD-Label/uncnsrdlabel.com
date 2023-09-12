import { observable } from "@legendapp/state";
import { getLocaleObjectFromIETFLanguageTag } from "@uncnsrdlabel/lib";

const lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

const locale = getLocaleObjectFromIETFLanguageTag(lang);

const consent = {
  open: false
}

export const state$ = observable({
  consent,
  lang,
  locale,
});

state$.onChange(({ value }) => console.log('state changed to', value))