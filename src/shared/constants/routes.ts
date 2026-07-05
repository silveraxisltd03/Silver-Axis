import type { ServiceCategorySlug } from './categories';
import type { IndustrySlug } from './industries';

export const ROUTES = {
  home: '/',
  services: '/services',
  work: '/who-we-work-with',
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

export function workByServicePath(service?: ServiceCategorySlug): string {
  return service ? `${ROUTES.work}?service=${service}` : ROUTES.work;
}

export function workByIndustryPath(industry?: IndustrySlug): string {
  return industry ? `${ROUTES.work}?industry=${industry}` : ROUTES.work;
}

export function projectDetailPath(slug: string): string {
  return `${ROUTES.work}/${slug}`;
}
