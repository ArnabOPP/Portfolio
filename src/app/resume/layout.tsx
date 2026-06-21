import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Arnab Chatterjee\'s resume — B.Tech CSE (AIML) at IEM Saltlake, Kolkata. AI Engineer, Full Stack Developer, IoT builder. Founder of ENGImitra. Neo4j Certified. Google Cloud GenAI Academy graduate.',
    keywords: ['Arnab Chatterjee resume', 'AI engineer resume', 'full stack developer resume India', 'IEM Saltlake student', 'CV'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/resume' },
    openGraph: {
        title: 'Resume | Arnab Chatterjee',
        description: 'CV and resume of Arnab Chatterjee — AI Engineer & Full Stack Developer.',
        url: 'https://arnabchatterjee.vercel.app/resume',
    },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
