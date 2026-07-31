import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

// TODO: set NEXT_PUBLIC_SITE_URL to the real production domain before launch.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
