import {
  type CountryCode,
  type InputMaybe,
  type LanguageCode,
} from "@shopify/hydrogen-react/storefront-api-types";
import { useParams } from "next/navigation";

export const getIETFLanguageTagFromlocaleTag = (localeTag: Intl.Locale) =>
  localeTag?.baseName as Intl.BCP47LanguageTag;


export const getLocaleObjectFromIETFLanguageTag = (
  tag: Intl.BCP47LanguageTag,
) => new Intl.Locale(tag);


export const getInContextVariables = (tag?: Intl.BCP47LanguageTag) => {
  if (!tag) {
    return null;
  }

  try {
    // @ts-expect-error Property 'getCanonicalLocales' does not exist on type 'typeof Intl'.
    const [canonicalLocale] = Intl.getCanonicalLocales(tag)

    const locale = new Intl.Locale(tag);

    const country = locale.region as InputMaybe<CountryCode>;

    const language =
      locale.language.toLocaleUpperCase() as InputMaybe<LanguageCode>;

    return {
      country,
      language,
    };
  } catch (error) {
    console.error({ error }, 'getInContextVariables');

    return {};
  }
};

export function useGetInContextVariables() {
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
