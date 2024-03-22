import {
  type CountryCode,
  type LanguageCode
} from "@shopify/hydrogen-react/storefront-api-types";
import { useParams } from "next/navigation";

export function getIETFLanguageTagFromlocaleTag(locale: Intl.Locale) {
  return locale?.baseName as Navigator['language'];
}

export function getLocaleObjectFromIETFLanguageTag(
  lang: Navigator['language'] = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Navigator['language'],
) {
  return new Intl.Locale(lang);
}

export function getLangProperties(lang: Navigator['language'] = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Navigator['language']) {
  const [canonicalLocale] = Intl.getCanonicalLocales(lang)

  const locale = new Intl.Locale(canonicalLocale);

  const country = locale.region as CountryCode;

  const language =
    locale.language.toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
};

export function useGetLangProperties() {
  const { lang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Navigator['language'] } = useParams();

  const tag = Array.isArray(lang) ? lang[0] : lang;

  const locale = new Intl.Locale(tag);

  const country = locale.region as CountryCode;
  
  const language = locale.language.toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
}