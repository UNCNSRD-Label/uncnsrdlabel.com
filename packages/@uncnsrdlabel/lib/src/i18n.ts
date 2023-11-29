import { type IETFLanguageTag } from "@uncnsrdlabel/types";

export const getLocaleObjectFromIETFLanguageTag = (
  tag: Intl.BCP47LanguageTag,
) => new Intl.Locale(tag);

export const getIETFLanguageTagFromlocaleTag = (localeTag: Intl.Locale) =>
  localeTag?.baseName as IETFLanguageTag;