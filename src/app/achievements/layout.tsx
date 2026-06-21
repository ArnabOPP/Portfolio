import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Achievements',
    description: 'Arnab Chatterjee\'s certifications and achievements — Neo4j Certified Professional, Google Cloud GenAI Academy, PHYCATHON hackathon, IEEE SIGHT, Prodigy InfoTech, and Scaler YIIC.',
    keywords: ['Arnab Chatterjee certifications', 'Neo4j certified', 'Google Cloud GenAI', 'PHYCATHON', 'hackathon', 'IEM Kolkata achievements'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/achievements' },
    openGraph: {
        title: 'Achievements | Arnab Chatterjee',
        description: 'Certifications, awards, and accomplishments of Arnab Chatterjee.',
        url: 'https://arnabchatterjee.vercel.app/achievements',
    },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
