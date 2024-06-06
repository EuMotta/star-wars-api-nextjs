import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

import { MiddlewareFactory } from './MiddlewareFactory';

export const auth: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    /* Troque a session pelo auth desejado */
    const pushRoutes = ['/choices/people', '/choices/planets'];
    const isProtectedRoute = pushRoutes.some(
      (route) => request.nextUrl.pathname === route,
    );
    if (isProtectedRoute) {
      const redirectTo = `${request.nextUrl.pathname}/1`;
      const absoluteURL = new URL(redirectTo, request.nextUrl.origin);
      return NextResponse.rewrite(absoluteURL.toString());
    }
    return next(request, _next);
  };
};
