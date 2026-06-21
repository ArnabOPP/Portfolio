import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Articles by Arnab Chatterjee on AI agents, edge computing with ESP32, LLM fine-tuning with Ollama, Next.js performance, and more.',
    keywords: ['Arnab Chatterjee blog', 'AI engineering blog', 'ESP32 IoT tutorial', 'LLM Ollama guide', 'Next.js performance', 'machine learning articles'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/blog' },
    openGraph: {
        title: 'Blog | Arnab Chatterjee',
        description: 'Technical articles on AI, IoT, full-stack development, and machine learning.',
        url: 'https://arnabchatterjee.vercel.app/blog',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return children;
}
