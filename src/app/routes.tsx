import { ROUTES } from '@/shared/constants/routes';
import { ContactPage } from '@/features/contact/ContactPage';
import { HomePage } from '@/features/home/HomePage';
import { ProjectsPage } from '@/features/projects/ProjectsPage';
import { ServicesPage } from '@/features/services/ServicesPage';

export const appRoutes = [
  { path: ROUTES.home, element: <HomePage /> },
  { path: ROUTES.services, element: <ServicesPage /> },
  { path: ROUTES.projects, element: <ProjectsPage /> },
  { path: ROUTES.contact, element: <ContactPage /> },
];
