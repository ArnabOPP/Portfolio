import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch with Arnab Chatterjee — open for internships, research collaborations, AI/ML projects, and full-stack development opportunities. Email: arnabchatterjee281205@gmail.com',
    keywords: ['contact Arnab Chatterjee', 'hire AI engineer India', 'full stack developer Kolkata', 'internship', 'collaboration'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/contact' },
    openGraph: {
        title: 'Contact | Arnab Chatterjee',
        description: 'Reach out to Arnab Chatterjee for internships, collaborations, and project opportunities.',
        url: 'https://arnabchatterjee.vercel.app/contact',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
