export const ROUTES = {
  home: '/',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
