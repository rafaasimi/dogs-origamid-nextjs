import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith('/entrar')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (!token && request.nextUrl.pathname.startsWith('/acoes')) {
    response.cookies.set('entrouAcoes', 'true', {
      httpOnly: true,
      secure: true,
    });
    return NextResponse.redirect(new URL('/login', request.url));
  } else {
    return response;
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
