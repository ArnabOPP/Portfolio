'use client';
import { useEffect } from 'react';

export function MobileRedirect() {
    useEffect(() => {
        const ua = navigator.userAgent;
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
        if (isMobile) {
            window.location.replace('https://arnaborwhat.vercel.app' + window.location.pathname);
        }
    }, []);
    return null;
}
