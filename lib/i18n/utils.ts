import { mapLocaleToLocaleUpper } from '#/lib/hooks/i18n'
import { Locale } from '#/lib/i18n/types'

export const getLocaleProperties = (
  localeCode = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!
) => {
  const localeUpper = mapLocaleToLocaleUpper[localeCode as Locale]

  if (!localeUpper) throw new Error('Invalid locale code')

  const locale: Intl.Locale = new Intl.Locale(localeUpper)
  return {
    country: locale.region,
    countryCode: locale.region,
    language: locale.language,
  }
}
