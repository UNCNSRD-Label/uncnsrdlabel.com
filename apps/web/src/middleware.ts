import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE!;

const locales = (
  process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? defaultLocale
).split(",");

const getLocale = (languages: string[]) =>
  match(languages, locales, defaultLocale);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|static|images|videos|favicon.ico|favicon.svg|manifest.json|robots.txt).*)",
  ],
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  const accessCodeActual = process.env.NEXT_PUBLIC_PREVIEW_ACCESS_CODE!;

  const accessCodeReceived = url.searchParams.get("code");

  const match = accessCodeReceived === accessCodeActual;

  const previewCookie = request.cookies.get("preview")?.value;

  if (match === true) {
    url.searchParams.delete("code");

    const response = NextResponse.redirect(url);

    response.cookies.set("preview", "true");

    return response;
  } else {
    if (previewCookie !== "true") {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_SITE_DOMAIN_ACCESS}`);
    }
  }

  const detectedLanguage =
    request.headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || "en";

  const detectedCountry =
    request.geo?.country ?? defaultLocale.split("-")?.[1] ?? "AU";

  const headers = {
    "accept-language": `${detectedLanguage}-${detectedCountry},en;q=0.5`,
  };

  const languages = new Negotiator({ headers }).languages();

  // Check if there is any supported locale in the pathname
  const pathname = url.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
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