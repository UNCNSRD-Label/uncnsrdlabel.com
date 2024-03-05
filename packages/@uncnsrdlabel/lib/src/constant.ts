export const TAGS = {
  cart: "cart",
  collections: "collections",
  products: "products",
};

export const HIDDEN_PRODUCT_TAG = "web-frontend-hidden";
export const DEFAULT_OPTION = "Default Title";

export const SITE_DOMAIN_WEB =
  process.env.NEXT_PUBLIC_SITE_DOMAIN_WEB ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  "localhost:3000";

export const SITE_URL_WEB = `${process.env.NEXT_PUBLIC_PROTOCOL}://${SITE_DOMAIN_WEB}`;

export const COOKIE_CONSENT = "consent";

export const COOKIE_LOCATION = "location";

export const COOKIE_REDEEM_CODE = "redeem-code";

export const PRE_GENERATED_BCP47_LANGUAGE_TAGS: Intl.BCP47LanguageTag[] = [
  "ar-SA",
  "bn-BD",
  "bn-IN",
  "cs-CZ",
  "da-DK",
  "de-AT",
  "de-CH",
  "de-DE",
  "el-GR",
  "en-AU",
  "en-CA",
  "en-GB",
  "en-IE",
  "en-IN",
  "en-NZ",
  "en-US",
  "en-ZA",
  "es-AR",
  "es-CL",
  "es-CO",
  "es-ES",
  "es-MX",
  "es-US",
  "fi-FI",
  "fr-BE",
  "fr-CA",
  "fr-CH",
  "fr-FR",
  "he-IL",
  "hi-IN",
  "hu-HU",
  "id-ID",
  "it-CH",
  "it-IT",
  "ja-JP",
  "ko-KR",
  "nl-BE",
  "nl-NL",
  "no-NO",
  "pl-PL",
  "pt-BR",
  "pt-PT",
  "ro-RO",
  "ru-RU",
  "sk-SK",
  "sv-SE",
  "ta-IN",
  "ta-LK",
  "th-TH",
  "tr-TR",
  "zh-CN",
  "zh-HK",
  "zh-TW",
];
