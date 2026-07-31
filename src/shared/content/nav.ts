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
      viewAllLabel: string;
      viewAllHref: string;
    };

// Placeholder nav taxonomy — swap hrefs in as real pages ship.
export const NAV_ITEMS: NavItem[] = [
  {
    type: 'dropdown',
    label: 'Services',
    href: ROUTES.services,
    columns: 2,
    items: [
      { label: 'Software Development', href: '#' },
      { label: 'Web Development', href: '#' },
      { label: 'Mobile Apps', href: '#' },
      { label: 'AI / ML', href: '#' },
      { label: 'Blockchain', href: '#' },
      { label: 'UI/UX Design', href: '#' },
      { label: 'MVP Development', href: '#' },
      { label: 'Digital Marketing', href: '#' },
      { label: 'Cloud & DevOps', href: '#' },
      { label: 'QA & Automation', href: '#' },
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
      { label: 'Compare Models', href: '#' },
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
  { type: 'link', label: 'Use Cases', href: '#' },
  {
    type: 'dropdown',
    label: 'Company',
    href: '#',
    columns: 1,
    items: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Markets we serve', href: '#' },
      { label: 'Technologies', href: '#' },
      { label: 'Contact', href: ROUTES.contact },
    ],
    viewAllLabel: 'View all company',
    viewAllHref: '#',
  },
  { type: 'link', label: 'Blog', href: '#' },
];
