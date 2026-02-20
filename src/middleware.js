import { NextResponse } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

function detectPreferredLocale(request) {
  const acceptLang = request.headers.get('accept-language');
  if (!acceptLang) return defaultLocale;

  const preferred = acceptLang
    .split(',')
    .map((lang) => lang.split(';')[0].split('-')[0])
    .find((lang) => locales.includes(lang));

  return preferred || defaultLocale;
}
export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isInternal =
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (isInternal) return NextResponse.next();

  const locale = detectPreferredLocale(request);

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};