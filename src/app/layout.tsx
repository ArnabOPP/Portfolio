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

const BASE_URL = 'https://arnabchatterjee.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Arnab Chatterjee | AI Engineer & Full Stack Developer',
        template: '%s | Arnab Chatterjee',
    },
    description: 'Arnab Chatterjee — B.Tech CSE (AIML) student at IEM Saltlake, Kolkata. Building AI systems, full-stack web apps, IoT & embedded hardware, and cross-platform mobile apps. Founder of ENGImitra. Neo4j Certified. Google Cloud GenAI Academy graduate.',
    keywords: [
        'Arnab Chatterjee',
        'AI Engineer',
        'Full Stack Developer',
        'IEM Saltlake',
        'Kolkata',
        'Machine Learning',
        'Deep Learning',
        'TensorFlow',
        'LangChain',
        'Next.js',
        'React',
        'Python',
        'FastAPI',
        'Flutter',
        'ESP32',
        'IoT',
        'MQTT',
        'TFLite',
        'Ollama',
        'Neo4j',
        'ENGImitra',
        'ThermalSense AI',
        'ESG Auditor',
        'Attendinn',
        'Google Cloud',
        'portfolio',
        'developer India',
    ],
    authors: [{ name: 'Arnab Chatterjee', url: BASE_URL }],
    creator: 'Arnab Chatterjee',
    publisher: 'Arnab Chatterjee',
    category: 'technology',
    alternates: {
        canonical: BASE_URL,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        title: 'Arnab Chatterjee | AI Engineer & Full Stack Developer',
        description: 'B.Tech CSE (AIML) at IEM Saltlake. Building AI systems, full-stack apps, IoT hardware, and mobile apps. Founder of ENGImitra.',
        siteName: 'Arnab Chatterjee Portfolio',
        images: [
            {
                url: '/about/ArnabCh.jpeg',
                width: 1200,
                height: 630,
                alt: 'Arnab Chatterjee — AI Engineer & Full Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Arnab Chatterjee | AI Engineer & Full Stack Developer',
        description: 'B.Tech CSE (AIML) at IEM Saltlake. Building AI systems, full-stack apps, IoT hardware, and mobile apps.',
        creator: '@ARNABintheCHAT',
        images: ['/about/ArnabCh.jpeg'],
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
        icon: '/about/pp3.jpg',
        shortcut: '/about/pp3.jpg',
        apple: '/about/pp3.jpg',
    },
    verification: {
        google: '',
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
import { MobileRedirect } from '@/components/MobileRedirect';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Arnab Chatterjee',
        url: BASE_URL,
        image: `${BASE_URL}/about/ArnabCh.jpeg`,
        sameAs: [
            'https://github.com/ArnabOPP',
            'https://linkedin.com/in/arnab-chatterjee-prsnl/',
            'https://twitter.com/ARNABintheCHAT',
            'https://instagram.com/mainly_arnab__/',
        ],
        jobTitle: 'AI Engineer & Full Stack Developer',
        description: 'B.Tech CSE (AIML) student at IEM Saltlake, Kolkata. Building AI systems, full-stack apps, IoT hardware, and mobile apps.',
        alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Institute of Engineering & Management (IEM), Saltlake',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kolkata',
                addressRegion: 'West Bengal',
                addressCountry: 'IN',
            },
        },
        knowsAbout: [
            'Artificial Intelligence',
            'Machine Learning',
            'Full Stack Web Development',
            'IoT & Embedded Systems',
            'Flutter',
            'Next.js',
            'Python',
            'LangChain',
            'TensorFlow',
            'ESP32',
        ],
        email: 'arnabchatterjee281205@gmail.com',
    };

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/about/pp3.jpg" type="image/jpeg" />
                <link rel="shortcut icon" href="/about/pp3.jpg" type="image/jpeg" />
                <link rel="apple-touch-icon" href="/about/pp3.jpg" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <MobileRedirect />
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
