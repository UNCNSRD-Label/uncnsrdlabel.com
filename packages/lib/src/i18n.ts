import { IETFLanguageTag } from "@uncnsrdlabel/types";

export const localeTagToIETFLanguageTag = (localeTag: Intl.Locale) => localeTag.baseName as IETFLanguageTag

export const defaultLocale = new Intl.Locale(process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en-AU");

export const locales = (
  process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? localeTagToIETFLanguageTag(defaultLocale)
).split(",").map(locale => new Intl.Locale(locale));