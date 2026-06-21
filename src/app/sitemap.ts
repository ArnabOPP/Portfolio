import { MetadataRoute } from 'next';

const BASE_URL = 'https://arnabchatterjee.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${BASE_URL}/`, lastModified: '2025-06-21', changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE_URL}/projects`, lastModified: '2025-06-21', changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE_URL}/experience`, lastModified: '2025-06-21', changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/skills`, lastModified: '2025-06-21', changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/achievements`, lastModified: '2025-06-21', changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE_URL}/blog`, lastModified: '2025-06-21', changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE_URL}/gallery`, lastModified: '2025-06-21', changeFrequency: 'monthly', priority: 0.6 },
        { url: `${BASE_URL}/contact`, lastModified: '2025-06-21', changeFrequency: 'yearly', priority: 0.7 },
        { url: `${BASE_URL}/resume`, lastModified: '2025-06-21', changeFrequency: 'monthly', priority: 0.7 },
    ];
}
