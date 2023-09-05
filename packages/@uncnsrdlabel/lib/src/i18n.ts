import { type IETFLanguageTag } from "@uncnsrdlabel/types";

export const getLocaleTagFromIETFLanguageTag = (
  tag = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! as Intl.BCP47LanguageTag,
) => new Intl.Locale(tag);

export const getIETFLanguageTagFromlocaleTag = (localeTag: Intl.Locale) => localeTag?.baseName as IETFLanguageTag

export const defaultLocale = new Intl.Locale(process.env.NEXT_PUBLIC_DEFAULT_LOCALE!);

export const locales = (
  process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? getIETFLanguageTagFromlocaleTag(defaultLocale)
).split(",").map(locale => new Intl.Locale(locale));