import { lazy } from 'react';

export const HomePage = lazy(() => import('@/features/home/HomePage').then((m) => ({ default: m.HomePage })));
export const ServicesPage = lazy(() => import('@/features/services/ServicesPage').then((m) => ({ default: m.ServicesPage })));
export const ProjectsPage = lazy(() => import('@/features/projects/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
export const ContactPage = lazy(() => import('@/features/contact/ContactPage').then((m) => ({ default: m.ContactPage })));
