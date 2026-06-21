import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore Arnab Chatterjee\'s projects — ThermalSense AI (ESP32 + TFLite), ESG Auditor 2.0 (local LLMs), Attendinn (Flutter + RFID), FPV Drone Platform, and more across AI, full-stack, IoT, and mobile.',
    keywords: ['Arnab Chatterjee projects', 'ThermalSense AI', 'ESG Auditor', 'Attendinn', 'FPV Drone', 'AI projects', 'IoT projects', 'Next.js projects'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/projects' },
    openGraph: {
        title: 'Projects | Arnab Chatterjee',
        description: 'AI, full-stack, IoT, and mobile projects by Arnab Chatterjee.',
        url: 'https://arnabchatterjee.vercel.app/projects',
    },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
