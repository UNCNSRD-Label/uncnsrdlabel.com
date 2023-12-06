import { state$ } from "@/lib/store";
import { match } from "@formatjs/intl-localematcher";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|static|images|videos|favicon.ico|favicon.svg|icon.svg|manifest.json|opengraph-image.jpg|opengraph-image.jpeg|opengraph-image.png|robots.txt|sw.js|workbox-*).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const localization = await getLocalizationDetailsHandler({});

  const defaultLocale = `${localization.language.isoCode}-${localization.country.isoCode}`;

  const BCP47LanguageTags: Intl.BCP47LanguageTag[] = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableLanguage.isoCode.toLocaleLowerCase()}-${availableCountry.isoCode}` as Intl.BCP47LanguageTag))

  const getLocale = (languages: string[]) =>
    match(languages, BCP47LanguageTags, defaultLocale);

  const detectedCountry =
    (request.geo?.country ?? localization.country.isoCode) as CountryCode;

  const detectedLanguage =
    (request.headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0] ?? localization.language.isoCode) as LanguageCode;

  const headers: Negotiator.Headers = {
    "accept-language": `${detectedLanguage}-${detectedCountry},en;q=0.5`,
  };

  const languages = new Negotiator({ headers }).languages();

  const lang = getLocale(languages);

  state$.country.set(detectedCountry);
  state$.lang.set(lang);
  state$.language.set(detectedLanguage);
  state$.localization.set(localization);

  // Check if there is any supported locale in the pathname
  const pathname = url.pathname;

  const pathnameIsMissingLocale = BCP47LanguageTags.every(
    (IETFLanguageTag) =>
      !pathname.startsWith(`/${IETFLanguageTag}`),
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // e.g. incoming request is /products, new URL is now /en-AU/products
    return NextResponse.redirect(
      new URL(`/${lang}/${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}
