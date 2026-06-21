import Navbar from "@/components/navbar";
import { DesktopRedirect } from "@/components/desktop-redirect";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { LanguageProvider } from "@/i18n/context";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

const BASE_URL = "https://arnaborwhat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Arnab Chatterjee | AI Engineer & Full Stack Developer",
    template: "%s | Arnab Chatterjee",
  },
  description:
    "Arnab Chatterjee — B.Tech CSE (AIML) student at IEM Saltlake, Kolkata. Building AI systems, full-stack web apps, IoT & embedded hardware, and cross-platform mobile apps. Founder of ENGImitra. Neo4j Certified. Google Cloud GenAI Academy graduate.",
  keywords: [
    "Arnab Chatterjee",
    "AI Engineer",
    "Full Stack Developer",
    "IEM Saltlake",
    "Kolkata",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "LangChain",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "Flutter",
    "ESP32",
    "IoT",
    "MQTT",
    "TFLite",
    "Ollama",
    "Neo4j",
    "ENGImitra",
    "Google Cloud",
    "portfolio",
    "developer India",
  ],
  authors: [{ name: "Arnab Chatterjee", url: BASE_URL }],
  creator: "Arnab Chatterjee",
  publisher: "Arnab Chatterjee",
  category: "technology",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "Arnab Chatterjee | AI Engineer & Full Stack Developer",
    description:
      "B.Tech CSE (AIML) at IEM Saltlake. Building AI systems, full-stack apps, IoT hardware, and mobile apps. Founder of ENGImitra.",
    url: BASE_URL,
    siteName: "Arnab Chatterjee Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/about/ArnabCh.jpeg",
        width: 1200,
        height: 630,
        alt: "Arnab Chatterjee — AI Engineer & Full Stack Developer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Arnab Chatterjee | AI Engineer & Full Stack Developer",
    description:
      "B.Tech CSE (AIML) at IEM Saltlake. Building AI systems, full-stack apps, IoT hardware, and mobile apps.",
    card: "summary_large_image",
    creator: "@ARNABintheCHAT",
    images: ["/about/ArnabCh.jpeg"],
  },
  verification: {
    google: "uWFi9RAaIdfR7iV-A_7EiCcxcAwp09fN4HdNvYPNPx4",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arnab Chatterjee",
  url: BASE_URL,
  image: `${BASE_URL}/about/ArnabCh.jpeg`,
  sameAs: [
    "https://github.com/ArnabOPP",
    "https://linkedin.com/in/arnab-chatterjee-opp",
    "https://twitter.com/ARNABintheCHAT",
  ],
  jobTitle: "AI Engineer & Full Stack Developer",
  description:
    "B.Tech CSE (AIML) student at IEM Saltlake, Kolkata. Building AI systems, full-stack apps, IoT hardware, and mobile apps.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institute of Engineering & Management (IEM), Saltlake",
  },
  email: "arnabchatterjee281205@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/about/pp3.jpg" type="image/jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/about/pp3.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <DesktopRedirect />
            <TooltipProvider delayDuration={0}>
              <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
                <FlickeringGrid
                  className="h-full w-full"
                  squareSize={2}
                  gridGap={2}
                  style={{
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                  }}
                />
              </div>
              <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
                {children}
              </div>
              <Navbar />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
