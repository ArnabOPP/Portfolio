import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Dancing_Script } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Dancing_Script({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Arnab Chatterjee | Full Stack & AI Engineer',
        template: '%s | Arnab Chatterjee',
    },
    description: 'B.Tech CSE (AIML) student at IEM Saltlake building AI systems, full-stack apps, IoT hardware, and open-source tools. Creator of Lightswind UI.',
    keywords: ['Arnab Chatterjee', 'Full Stack Developer', 'AI Engineer', 'IoT', 'React', 'Next.js', 'Flutter', 'Python', 'Machine Learning', 'ESP32', 'Lightswind UI'],
    authors: [{ name: 'Arnab Chatterjee' }],
    creator: 'Arnab Chatterjee',
    metadataBase: new URL('https://github.com/ArnabOPP'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://github.com/ArnabOPP',
        title: 'Arnab Chatterjee | Full Stack & AI Engineer',
        description: 'B.Tech CSE (AIML) student building AI systems, full-stack apps, IoT hardware, and open-source tools.',
        siteName: 'Arnab Chatterjee Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Arnab Chatterjee | Full Stack & AI Engineer',
        description: 'B.Tech CSE (AIML) student building AI systems, full-stack apps, IoT hardware, and open-source tools.',
        creator: '@ArnabOPP',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.svg',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ChatBot } from '@/components/layout/ChatBot';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ConditionalNavigation>
                                    {children}
                                </ConditionalNavigation>
                                <ChatBot headless />
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
