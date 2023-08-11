import { match } from "@formatjs/intl-localematcher";
import {
  defaultLocale,
  localeTagToIETFLanguageTag,
  locales,
} from "@uncnsrdlabel/lib/i18n";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

const savedCode = "arizona";

const target = "https://holding.uncnsrdlabel.com";

const getLocale = (languages: string[]) =>
  match(
    languages,
    locales.map((locale) => locale.toString()),
    defaultLocale.toString(),
  );

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const pathname = request.nextUrl.pathname;

  const detectedLanguage =
    request.headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || "en";

  const detectedCountry = request.geo?.country ?? defaultLocale.region ?? "AU";

  const headers = {
    "accept-language": `${detectedLanguage}-${detectedCountry},en;q=0.5`,
  };

  const languages = new Negotiator({ headers }).languages();

  const detectedLocale = getLocale(languages);

  // Check if there is any supported locale in the pathname
  const routeLocale = locales.find((locale) =>
    pathname.startsWith(`/${locale}`),
  );

  const locale = localeTagToIETFLanguageTag(routeLocale) ?? detectedLocale;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  requestHeaders.set("x-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const suppliedCode = request.nextUrl.searchParams.get("code");

  const suppliedCodeMatches = suppliedCode === savedCode;

  const holdingRedirectEnabled = process.env.NEXT_PUBLIC_FEATURE_FLAG_HOLDING_REDIRECT_ENABLE === "true";

  const previewCookieSet = request.cookies.get("preview")?.value === "true"

  console.log({ holdingRedirectEnabled, suppliedCodeMatches, previewCookieSet })

  if (
    holdingRedirectEnabled &&
    !suppliedCodeMatches &&
    !previewCookieSet
  ) {
    console.info("Redirecting to holding page")
    return NextResponse.redirect(target);
  } else if (pathnameIsMissingLocale) {
    // Redirect if there is no locale
    const locale = getLocale(languages);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }

  if (suppliedCodeMatches) {
    response.cookies.set("preview", "true");
  }

  return response;
}

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    "/((?!static|.*\\..*|_next|api|favicon.ico).*)",
    "/",
  ],
};
