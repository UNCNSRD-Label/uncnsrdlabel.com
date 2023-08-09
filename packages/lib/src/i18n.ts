
export const defaultLocale = new Intl.Locale(process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en-AU");

export const locales = (
  process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? defaultLocale.toString()
).split(",").map(locale => new Intl.Locale(locale));