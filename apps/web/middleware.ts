import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const headers = { "accept-language": "en-US,en;q=0.5" };
const languages = new Negotiator({ headers }).languages();
const locales = ["en-US", "nl-NL", "nl"];
const defaultLocale = "en-US";

const savedCode = "arizona";

const target = "https://holding.uncnsrdlabel.com";

match(languages, locales, defaultLocale); // -> 'en-US'

export async function middleware(request: NextRequest) {
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
