import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'Arnab Chatterjee\'s professional experience — IEEE SIGHT Web Developer, Founder of ENGImitra EdTech platform, Google Cloud GenAI Academy graduate, Prodigy InfoTech intern, Scaler YIIC participant, and PHYCATHON hackathon competitor.',
    keywords: ['Arnab Chatterjee experience', 'IEEE SIGHT', 'ENGImitra founder', 'Google Cloud GenAI Academy', 'Prodigy InfoTech intern', 'Lions Club', 'PHYCATHON'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/experience' },
    openGraph: {
        title: 'Experience | Arnab Chatterjee',
        description: 'Professional experience, internships, and leadership roles of Arnab Chatterjee.',
        url: 'https://arnabchatterjee.vercel.app/experience',
    },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
    return children;
}
