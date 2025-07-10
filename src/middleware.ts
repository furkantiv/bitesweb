import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the path is /bitesweb without a locale
  if (pathname === "/bitesweb") {
    // Redirect to the default locale
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}/bitesweb`, request.url)
    );
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
