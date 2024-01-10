import {
  type CountryCode,
  type InputMaybe,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { useParams } from "next/navigation";

export function getIETFLanguageTagFromlocaleTag(locale: Intl.Locale) {
  return locale?.baseName as Intl.BCP47LanguageTag;
}

export function getLocaleObjectFromIETFLanguageTag(
  lang: Intl.BCP47LanguageTag = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag,
) {
  return new Intl.Locale(lang);
}

export function getLangProperties(lang: Intl.BCP47LanguageTag) {
  // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
  const [canonicalLocale] = Intl.getCanonicalLocales(lang)

  const locale = new Intl.Locale(lang);

  const country = locale.region as InputMaybe<CountryCode>;

  const language =
    locale.language.toLocaleUpperCase() as InputMaybe<LanguageCode>;

  return {
    country,
    language,
  };
};

export function useGetLangProperties() {
  const { lang } = useParams();

  const tag = Array.isArray(lang) ? lang[0] : lang;

  const locale = new Intl.Locale(tag);

  const country = locale.region as CountryCode;
  const language = locale.language.toLocaleUpperCase() as LanguageCode;

  return {
    country,
    language,
  };
}
