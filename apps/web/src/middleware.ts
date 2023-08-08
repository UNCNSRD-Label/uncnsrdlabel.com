import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse, type NextRequest } from "next/server";

const defaultLocale = "en-US";
const headers = { "accept-language": `${defaultLocale},en;q=0.5` };
const languages = new Negotiator({ headers }).languages();
const locales = (
  process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? defaultLocale
).split(",");

const savedCode = "arizona";

const target = "https://holding.uncnsrdlabel.com";

const getLocale = () => match(languages, locales, defaultLocale);

export function middleware(request: NextRequest) {
  const suppliedCode = request.nextUrl.searchParams.get("code");

  const response = NextResponse.next();

  if (suppliedCode === savedCode) {
    response.cookies.set("preview", "true");
  }

  if (
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
    const locale = getLocale();

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
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
