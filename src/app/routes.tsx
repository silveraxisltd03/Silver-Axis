import { ROUTES } from '@/shared/constants/routes';
import { ContactPage, HomePage, ProjectsPage, ServicesPage } from './lazyPages';

export const appRoutes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: ROUTES.services, element: <ServicesPage /> },
  { path: ROUTES.projects, element: <ProjectsPage /> },
  { path: ROUTES.contact, element: <ContactPage /> },
];
