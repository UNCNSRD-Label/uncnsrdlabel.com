export const getLocaleFromTag = (
  tag = process.env.NEXT_PUBLIC_DEFAULT_LOCALE! as Intl.BCP47LanguageTag,
) => new Intl.Locale(tag);
