import { ROUTES } from '@/shared/constants/routes';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

// Placeholder footer nav — swap hrefs in as real pages ship.
export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: ROUTES.services },
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
  },
  {
    title: 'Industries',
    links: [
      { label: 'Fintech', href: '#' },
      { label: 'Healthtech', href: '#' },
      { label: 'E-commerce', href: '#' },
      { label: 'Logistics', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

export const FOOTER_CONTACT = {
  description:
    'Placeholder footer description, replace with real copy about what Silver Axis does.',
  address: '123 Placeholder Street, Your City, Your Country',
  email: 'info@silveraxisltd.com',
  phone: '+1 (555) 000-0000',
  hours: 'Mon–Fri 9:00 AM–6:00 PM (placeholder timezone)',
};

export interface FooterSocialLink {
  label: string;
  href: string;
}

export const FOOTER_SOCIAL: FooterSocialLink[] = [
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
];
