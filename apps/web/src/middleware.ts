import { match } from "@formatjs/intl-localematcher";
import { defaultLocale, locales } from "@uncnsrdlabel/lib/i18n";
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

  const locale = getLocale(languages);
  
  requestHeaders.set("x-locale", locale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const suppliedCode = request.nextUrl.searchParams.get("code");

  if (suppliedCode === savedCode) {
    response.cookies.set("preview", "true");
  }

  if (
    process.env.FEATURE_FLAG_HOLDING_REDIRECT_ENABLE === "true" &&
    suppliedCode !== savedCode &&
    request.cookies.get("preview")?.value !== "true"
  ) {
    return NextResponse.redirect(target);
  }

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(languages);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
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
