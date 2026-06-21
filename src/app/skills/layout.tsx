import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Skills',
    description: 'Arnab Chatterjee\'s technical skills — AI/ML (Python, TensorFlow, LangChain, Ollama), Full Stack (Next.js, React, FastAPI), Embedded Systems (ESP32, MQTT, TFLite), Mobile (Flutter), and Cloud (Google Cloud, Neo4j).',
    keywords: ['Arnab Chatterjee skills', 'AI ML skills', 'Next.js developer', 'Python developer', 'TensorFlow', 'LangChain', 'Flutter developer', 'ESP32', 'IoT developer India'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/skills' },
    openGraph: {
        title: 'Skills | Arnab Chatterjee',
        description: 'Technical skills across AI/ML, full-stack web, IoT, mobile, and cloud.',
        url: 'https://arnabchatterjee.vercel.app/skills',
    },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
