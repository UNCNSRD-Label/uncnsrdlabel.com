import { match } from "@formatjs/intl-localematcher";
import {
  getLocalizationHandler,
} from "@uncnsrdlabel/graphql-shopify-storefront/server";
import { type IETFLanguageTag } from "@uncnsrdlabel/types";
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

  const localization = await getLocalizationHandler();

  const defaultLocale = localization.country.isoCode;

  const IETFLanguageTags = localization.availableCountries.flatMap((availableCountry) => availableCountry.availableLanguages.map((availableLanguage) => `${availableCountry.isoCode}-${availableLanguage.isoCode}` as unknown as IETFLanguageTag))

  const getLocale = (languages: string[]) =>
    match(languages, IETFLanguageTags, defaultLocale);

  const detectedLanguage =
    request.headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || "en";

  const detectedCountry =
    request.geo?.country ?? defaultLocale.split("-")?.[1] ?? "AU";

  const headers: Negotiator.Headers = {
    "accept-language": `${detectedLanguage}-${detectedCountry},en;q=0.5`,
  };

  const languages = new Negotiator({ headers }).languages();

  // Check if there is any supported locale in the pathname
  const pathname = url.pathname;

  const pathnameIsMissingLocale = IETFLanguageTags.every(
    (IETFLanguageTag) =>
      !pathname.startsWith(`/${IETFLanguageTag}/`) && pathname !== `/${IETFLanguageTag}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(languages);

    // e.g. incoming request is /products, new URL is now /en-AU/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}
