import { Navigate } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { LegacyProjectSlugRedirect } from './LegacyRedirects';
import {
  CaseStudyDetailPage,
  ContactPage,
  HomePage,
  WorkPage,
  ServiceDetailPage,
  ServicesPage,
} from './lazyPages';

export const appRoutes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: `${ROUTES.services}/:slug`, element: <ServiceDetailPage /> },
  { path: ROUTES.services, element: <ServicesPage /> },
  { path: `${ROUTES.work}/:slug`, element: <CaseStudyDetailPage /> },
  { path: ROUTES.work, element: <WorkPage /> },
  { path: ROUTES.contact, element: <ContactPage /> },
  // Legacy /projects URLs, redirected to the renamed Work page.
  { path: '/projects', element: <Navigate to={ROUTES.work} replace /> },
  { path: '/projects/:slug', element: <LegacyProjectSlugRedirect /> },
];
