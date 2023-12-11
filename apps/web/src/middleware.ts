import { state$ } from "@/lib/store";
import { match } from "@formatjs/intl-localematcher";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { check } from 'language-tags';
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: [
    /*
     * Skip all internal paths (_next)
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next|_vercel|images|videos|favicon.ico|favicon.svg|icon.svg|manifest.json|opengraph-image.jpg|opengraph-image.jpeg|opengraph-image.png|robots.txt|sw.js|workbox-*).*)",
  ],
};

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('lang');

  const { pathname } = request.nextUrl

  const defaultLanguageTag = process.env.NEXT_PUBLIC_DEFAULT_LOCALE as Intl.BCP47LanguageTag;

  const defaultLanguageCode = defaultLanguageTag.split("-")?.[0] as LanguageCode;

  const defaultCountryCode = defaultLanguageTag.split("-")?.[1] as CountryCode;

  const detectedLanguageTagInPathname = pathname.split("/")?.[1];

  if (detectedLanguageTagInPathname && check(detectedLanguageTagInPathname)) {
    const response = NextResponse.next();

    response.cookies.set('lang', detectedLanguageTagInPathname)

    return response;
  }

  if (cookie?.value) {
    const pathnameHasLangCookieValue = pathname.startsWith(`/${cookie.value}`)

    if (pathnameHasLangCookieValue) {
      return
    } else {
      // Redirect if there is no BCP47LanguageTag in the pathname
      // e.g. incoming request is /products, new URL is now /en-AU/products
      request.nextUrl.pathname = `/${cookie.value}${pathname}`

      const response = NextResponse.redirect(request.nextUrl);

      return response;
    }
  }

  {
    const detectedLanguageCode =
      (request.headers
        .get("accept-language")
        ?.split(",")?.[0]
        .split("-")?.[0]?.toLocaleUpperCase() ?? defaultLanguageCode) as LanguageCode;

    const detectedCountryCode = (request.geo?.country ?? defaultCountryCode) as CountryCode;

    const localization = await getLocalizationDetailsHandler({
      lang: `${detectedLanguageCode}-${detectedCountryCode}`,
    });

    const languageCodes = localization.availableLanguages.map(
      (availableLanguage) =>
        availableLanguage.isoCode.toLocaleLowerCase() as LanguageCode,
    );

    const BCP47LanguageTags: Intl.BCP47LanguageTag[] = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableLanguage.isoCode.toLocaleLowerCase()}-${availableCountry.isoCode}` as Intl.BCP47LanguageTag))

    const headers: Negotiator.Headers = {
      "accept-language": `${detectedLanguageCode}-${detectedCountryCode},en;q=0.5`,
    };

    const languages = new Negotiator({ headers }).languages();

    const detectedLanguageTag = match(languages, [...languageCodes, ...BCP47LanguageTags], defaultLanguageCode);

    // Check if there is any supported BCP47LanguageTag in the pathname
    const pathnameHasSupportedBCP47LanguageTag = BCP47LanguageTags.some(
      (BCP47LanguageTag) => pathname.startsWith(`/${BCP47LanguageTag}`)
    )

    state$.country.set(detectedCountryCode);
    state$.lang.set(detectedLanguageTag);
    state$.language.set(detectedLanguageCode);
    state$.localization.set(localization);

    if (pathnameHasSupportedBCP47LanguageTag) {
      return
    }

    // Redirect if there is no BCP47LanguageTag in the pathname
    // e.g. incoming request is /products, new URL is now /en-AU/products
    request.nextUrl.pathname = `/${detectedLanguageTag}${pathname}`

    const response = NextResponse.redirect(request.nextUrl);

    response.cookies.set('lang', detectedLanguageTag)

    return response;
  }
}
