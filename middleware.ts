import { NextRequest, NextResponse } from 'next/server'

let locales: string[] = ['en', 'ru', 'fr', 'ua', 'de']

function getLocale(request: NextRequest): string {
  const acceptLanguageHeader = request.headers.get('Accept-Language')

  if (!acceptLanguageHeader || acceptLanguageHeader.trim() === '') {
    return 'ru'
  }

  const acceptedLocales = acceptLanguageHeader.split(',')
    .map((locale) => locale.trim().split(';')[0])

  for (const acceptedLocale of acceptedLocales) {
    if (locales.includes(acceptedLocale)) {
      return acceptedLocale
    }
  }

  return 'ru'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )


  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}