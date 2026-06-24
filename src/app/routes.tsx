import { ROUTES } from '@/shared/constants/routes';
import {
  CaseStudyDetailPage,
  ContactPage,
  HomePage,
  ProjectsPage,
  ServiceDetailPage,
  ServicesPage,
} from './lazyPages';

export const appRoutes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: `${ROUTES.services}/:slug`, element: <ServiceDetailPage /> },
  { path: ROUTES.services, element: <ServicesPage /> },
  { path: `${ROUTES.projects}/:slug`, element: <CaseStudyDetailPage /> },
  { path: ROUTES.projects, element: <ProjectsPage /> },
  { path: ROUTES.contact, element: <ContactPage /> },
];
