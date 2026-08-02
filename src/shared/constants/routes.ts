import type { ServiceCategorySlug } from './categories';

export const ROUTES = {
  home: '/',
  services: '/services',
  projects: '/projects',
  about: '/about',
  contact: '/contact',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
} as const;

export const HOME_SECTIONS = {
  hero: 'hero',
  operate: 'operate',
  services: 'services',
  process: 'process',
  work: 'work',
  testimonials: 'testimonials',
} as const;

export type HomeSection = keyof typeof HOME_SECTIONS;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export function homeHash(section: HomeSection): string {
  return `${ROUTES.home}#${HOME_SECTIONS[section]}`;
}

export function serviceDetailPath(slug: ServiceCategorySlug): string {
  return `${ROUTES.services}/${slug}`;
}

/** Practice detail pages under /services/:slug (e.g. software-development). */
export function practiceDetailPath(slug: string): string {
  return `${ROUTES.services}/${slug}`;
}

export function projectsFilteredPath(category?: ServiceCategorySlug): string {
  return category ? `${ROUTES.projects}?category=${category}` : ROUTES.projects;
}

export function projectDetailPath(slug: string): string {
  return `${ROUTES.projects}/${slug}`;
}
