import { state$ } from "@/lib/store";
import {
  type CountryCode
} from "@shopify/hydrogen/storefront-api-types";
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

  const country = request.geo?.country as CountryCode ?? state$.country.get()

  // Check if there is any supported locale in the pathname
  const pathname = url.pathname;

  const pathnameIsMissingLocale = true;

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const lang = 'en-GB'

    state$.country.set(country);
    state$.lang.set(lang);

    // e.g. incoming request is /products, new URL is now /en-AU/products
    return NextResponse.redirect(
      new URL(`/${lang}/${pathname}`, request.url),
    );
  }

  return NextResponse.next();
}
