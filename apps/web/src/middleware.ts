import { match } from "@formatjs/intl-localematcher";
import {
  type CountryCode,
  type LanguageCode,
} from "@shopify/hydrogen/storefront-api-types";
import { getLocalizationDetailsHandler } from "@uncnsrdlabel/graphql-shopify-storefront";
import { getLangProperties } from "@uncnsrdlabel/lib";
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
    } else if (check(cookie?.value)) {
      const lang = cookie.value as Intl.BCP47LanguageTag;

      // Redirect if there is no BCP47LanguageTag in the pathname
      // e.g. incoming request is /products, new URL is now /en-AU/products
      request.nextUrl.pathname = `/${lang}${pathname}`

      const response = NextResponse.redirect(request.nextUrl);

      return response;
    }
  }

  {
    const detectedLang = request.headers.get("accept-language")?.split(",")?.[0] ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

    const { language: detectedLanguageCode } = getLangProperties(detectedLang);

    const detectedCountryCode = (request.geo?.country ?? defaultCountryCode) as CountryCode;

    const localization = await getLocalizationDetailsHandler({
      lang: `${detectedLanguageCode}-${detectedCountryCode}`,
    });

    const matchingCountryCode = localization.availableCountries.find((availableCountry) => availableCountry.isoCode === detectedCountryCode) ?? localization.country;

    const BCP47LanguageTags: Intl.BCP47LanguageTag[] = matchingCountryCode?.availableLanguages.flatMap((availableLanguage) => [
      availableLanguage.isoCode.toLocaleLowerCase() as LanguageCode,
      `${availableLanguage.isoCode.toLocaleLowerCase()}-${matchingCountryCode.isoCode}` as Intl.BCP47LanguageTag
    ]);

    const headers: Negotiator.Headers = {
      "accept-language": `${detectedLanguageCode}-${detectedCountryCode},en;q=0.5`,
    };

    const languages = new Negotiator({ headers }).languages();

    const availableLocales = BCP47LanguageTags

    const detectedLanguageTag = match(languages, availableLocales, defaultLanguageCode);

    // Check if there is any supported BCP47LanguageTag in the pathname
    const pathnameHasSupportedBCP47LanguageTag = BCP47LanguageTags?.some(
      (BCP47LanguageTag) => pathname.startsWith(`/${BCP47LanguageTag}`)
    )

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
