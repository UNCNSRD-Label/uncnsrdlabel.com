import { Locale, LocaleCountryCodeUpper } from '#/lib/i18n/types'
import { useRouter } from 'next/router'

export const mapLocaleToLocaleUpper: Record<Locale, LocaleCountryCodeUpper> = {
  'en-gb': 'en-GB',
  'en-us': 'en-US',
}

export const useI18nData = () => {
  const {
    locale,
    locales,
    defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!,
  } = useRouter()
  const currentLocale = (locale || defaultLocale) as Locale

  return {
    currentLocale,
    defaultLocale: defaultLocale as Locale,
    locales: locales as Locale[],
    isValidStoreCode: locales?.includes(currentLocale),
  }
}

export const useLocale = (): Locale => {
  const { currentLocale } = useI18nData()
  return currentLocale
}

export const useLocaleCountryCodeUpper = (): LocaleCountryCodeUpper => {
  const { currentLocale } = useI18nData()
  return mapLocaleToLocaleUpper[currentLocale]
}
