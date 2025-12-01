import { NextResponse } from "next/server";

const locales = ["en", "ar"];
const defaultLocale = "en";

function getLocale(request) {
    const pathname = request.nextUrl.pathname;

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // If no locale found, return default locale
    if (!pathnameHasLocale) {
        return defaultLocale;
    }

    // Locale is already present
    return null;
}

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Skip internal Next.js paths, API routes, and static files
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".") // Skip files with extensions (images, favicon, etc.)
    ) {
        return NextResponse.next();
    }

    const locale = getLocale(request);

    // If locale is determined, redirect to add it to the path
    if (locale) {
        // Handle root path
        if (pathname === "/") {
            return NextResponse.redirect(new URL(`/${locale}`, request.url));
        }

        // Handle other paths without locale
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Match all paths except those starting with _next, api, or containing a dot
        "/((?!_next|api).*)",
    ],
};
