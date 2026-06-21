import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: 'https://arnabchatterjee.vercel.app/sitemap.xml',
        host: 'https://arnabchatterjee.vercel.app',
    };
}
