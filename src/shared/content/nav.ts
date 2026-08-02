import { ROUTES } from '@/shared/constants/routes';

export interface NavDropdownItem {
  label: string;
  href: string;
}

export type NavItem =
  | { type: 'link'; label: string; href: string }
  | {
      type: 'dropdown';
      label: string;
      href: string;
      columns: 1 | 2;
      items: NavDropdownItem[];
      viewAllLabel?: string;
      viewAllHref?: string;
    };

// Placeholder nav taxonomy — swap hrefs in as real pages ship.
export const NAV_ITEMS: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Services',
    href: ROUTES.services,
    columns: 2,
    items: [
      { label: 'Software Development', href: `${ROUTES.services}/software-development` },
      { label: 'Web Development', href: `${ROUTES.services}/web-development` },
      { label: 'Mobile Apps', href: `${ROUTES.services}/mobile-apps` },
      { label: 'AI / ML', href: `${ROUTES.services}/ai-ml` },
      { label: 'Blockchain', href: `${ROUTES.services}/blockchain` },
      { label: 'UI/UX Design', href: `${ROUTES.services}/ui-ux` },
      { label: 'MVP Development', href: `${ROUTES.services}/mvp` },
      { label: 'Digital Marketing', href: `${ROUTES.services}/digital-marketing` },
      { label: 'Cloud & DevOps', href: `${ROUTES.services}/cloud-devops` },
      { label: 'QA & Automation', href: `${ROUTES.services}/qa-automation` },
    ],
    viewAllLabel: 'View all services',
    viewAllHref: ROUTES.services,
  },
  {
    type: 'dropdown',
    label: 'Hire Talent',
    href: '#',
    columns: 1,
    items: [
      { label: 'Hire Developers', href: '#' },
      { label: 'Dedicated Teams', href: '#' },
      { label: 'Staff Augmentation', href: '#' },
    ],
    viewAllLabel: 'View all hire talent',
    viewAllHref: '#',
  },
  {
    type: 'dropdown',
    label: 'Industries',
    href: '#',
    columns: 1,
    items: [
      { label: 'Fintech', href: '#' },
      { label: 'Healthtech', href: '#' },
      { label: 'E-commerce', href: '#' },
      { label: 'Edtech', href: '#' },
      { label: 'Logistics', href: '#' },
      { label: 'Foodtech', href: '#' },
      { label: 'Proptech', href: '#' },
      { label: 'Travel', href: '#' },
    ],
    viewAllLabel: 'View all industries',
    viewAllHref: '#',
  },
  { type: 'link', label: 'Projects', href: ROUTES.projects },
  {
    type: 'dropdown',
    label: 'Company',
    href: '#',
    columns: 1,
    items: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
];
