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
      { label: 'Compare Models', href: '#' },
      { label: 'Contact', href: ROUTES.contact },
      { label: 'Hire Talent', href: '#' },
      { label: 'Markets we serve', href: '#' },
      { label: 'Technologies', href: '#' },
      { label: 'Use Cases', href: '#' },
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
      { label: 'All Industries', href: '#' },
      { label: 'Fintech', href: '#' },
      { label: 'Healthtech', href: '#' },
      { label: 'E-commerce', href: '#' },
      { label: 'Edtech', href: '#' },
      { label: 'Logistics', href: '#' },
      { label: 'Foodtech', href: '#' },
      { label: 'Proptech', href: '#' },
      { label: 'Travel', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: ROUTES.privacyPolicy },
      { label: 'Terms of Service', href: ROUTES.termsOfService },
    ],
  },
];

export const FOOTER_CONTACT = {
  description:
    'Placeholder footer description, replace with real copy about what Silver Axis does.',
  address: '123 Placeholder Street, Lahore, Pakistan',
  email: 'info@silveraxisltd.com',
  hours: 'Mon–Fri 9:00 AM–6:00 PM PKT (UTC+5)',
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
