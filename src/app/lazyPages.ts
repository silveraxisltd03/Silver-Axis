import { lazy } from 'react';

export const HomePage = lazy(() => import('@/features/home/HomePage').then((m) => ({ default: m.HomePage })));
export const ServicesPage = lazy(() => import('@/features/services/ServicesPage').then((m) => ({ default: m.ServicesPage })));
export const ServiceDetailPage = lazy(() => import('@/features/services/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
export const WorkPage = lazy(() => import('@/features/work/WorkPage').then((m) => ({ default: m.WorkPage })));
export const CaseStudyDetailPage = lazy(() => import('@/features/work/CaseStudyDetailPage').then((m) => ({ default: m.CaseStudyDetailPage })));
export const ContactPage = lazy(() => import('@/features/contact/ContactPage').then((m) => ({ default: m.ContactPage })));
