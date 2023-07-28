import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const savedCode = "arizona";

const target = "https://holding.uncnsrdlabel.com";

export default async function middleware(request: NextRequest) {
  const suppliedCode = request.nextUrl.searchParams.get("code");

  const response = NextResponse.next();

  if (suppliedCode === savedCode) {
    request.cookies.set("preview", "true");
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
