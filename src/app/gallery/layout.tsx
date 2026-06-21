import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Photo gallery from Arnab Chatterjee — events, hackathons, IEEE SIGHT volunteering, ENGImitra workshops, and life at IEM Saltlake, Kolkata.',
    keywords: ['Arnab Chatterjee gallery', 'IEM Kolkata events', 'IEEE SIGHT photos', 'ENGImitra workshop', 'hackathon photos'],
    alternates: { canonical: 'https://arnabchatterjee.vercel.app/gallery' },
    openGraph: {
        title: 'Gallery | Arnab Chatterjee',
        description: 'Photos from events, hackathons, and college life.',
        url: 'https://arnabchatterjee.vercel.app/gallery',
    },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return children;
}
