import { MetadataRoute } from 'next';

const BASE_URL = 'https://arnabchatterjee.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const routes = [
        { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
        { url: '/experience', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/skills', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/achievements', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
        { url: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
        { url: '/resume', priority: 0.7, changeFrequency: 'monthly' as const },
    ];

    return routes.map(({ url, priority, changeFrequency }) => ({
        url: `${BASE_URL}${url}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));
}
