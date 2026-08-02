import type { MetadataRoute } from 'next';
import { PRACTICE_SLUGS } from '@/features/services/detail/content';
import { ALL_CASES } from '@/shared/content/case-studies';
import { ROUTES, practiceDetailPath, projectDetailPath } from '@/shared/constants/routes';

export const dynamic = 'force-static';

// TODO: set NEXT_PUBLIC_SITE_URL to the real production domain before launch.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ROUTES.home,
    ROUTES.services,
    ...PRACTICE_SLUGS.map((slug) => practiceDetailPath(slug)),
    ROUTES.projects,
    ...ALL_CASES.map((cs) => projectDetailPath(cs.slug)),
    ROUTES.about,
    ROUTES.contact,
    ROUTES.privacyPolicy,
    ROUTES.termsOfService,
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
