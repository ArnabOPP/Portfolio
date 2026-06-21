import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const MOBILE_URL = process.env.MOBILE_SITE_URL || 'https://arnaborwhat.vercel.app';

export function middleware(request: NextRequest) {
    if (!MOBILE_URL) return NextResponse.next();

    const userAgent = request.headers.get('user-agent') || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        const path = request.nextUrl.pathname;
        return NextResponse.redirect(`${MOBILE_URL}${path}`);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
