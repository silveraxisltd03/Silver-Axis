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
      { label: 'Careers', href: '#' },
      { label: 'Projects', href: ROUTES.projects },
      { label: 'Contact', href: ROUTES.contact },
      { label: 'Hire Talent', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: ROUTES.services },
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
