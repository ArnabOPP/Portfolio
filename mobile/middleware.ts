import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DESKTOP_URL = 'https://arnabchatterjee.vercel.app';

export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (!isMobile) {
        const path = request.nextUrl.pathname;
        return NextResponse.redirect(`${DESKTOP_URL}${path}`);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
