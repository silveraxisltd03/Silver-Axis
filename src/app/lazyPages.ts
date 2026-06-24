import { lazy } from 'react';

export const HomePage = lazy(() => import('@/features/home/HomePage').then((m) => ({ default: m.HomePage })));
export const ServicesPage = lazy(() => import('@/features/services/ServicesPage').then((m) => ({ default: m.ServicesPage })));
export const ServiceDetailPage = lazy(() => import('@/features/services/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
export const ProjectsPage = lazy(() => import('@/features/projects/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
export const CaseStudyDetailPage = lazy(() => import('@/features/projects/CaseStudyDetailPage').then((m) => ({ default: m.CaseStudyDetailPage })));
export const ContactPage = lazy(() => import('@/features/contact/ContactPage').then((m) => ({ default: m.ContactPage })));
