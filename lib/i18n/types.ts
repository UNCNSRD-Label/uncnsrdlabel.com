export type LangCode = 'en'
export type CountryCodeLower = 'gb' | 'us'
export type Locale = `${LangCode}-${CountryCodeLower}`
export type LocaleCountryCodeUpper =
  `${LangCode}-${Uppercase<CountryCodeLower>}`
