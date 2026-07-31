import type { MetadataRoute } from 'next';
import { ROUTES } from '@/shared/constants/routes';

export const dynamic = 'force-static';

// TODO: set NEXT_PUBLIC_SITE_URL to the real production domain before launch.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Only Home is built so far — add routes here as pages ship.
  return [ROUTES.home].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
