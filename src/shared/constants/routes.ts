import type { ServiceCategorySlug } from './categories';

export const ROUTES = {
  home: '/',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
} as const;

export const HOME_SECTIONS = {
  hero: 'hero',
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

export function projectsFilteredPath(category?: ServiceCategorySlug): string {
  return category ? `${ROUTES.projects}?category=${category}` : ROUTES.projects;
}

export function projectDetailPath(slug: string): string {
  return `${ROUTES.projects}/${slug}`;
}
