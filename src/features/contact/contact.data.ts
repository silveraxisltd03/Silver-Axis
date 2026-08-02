import { FOOTER_CONTACT, FOOTER_SOCIAL } from '@/shared/content/footer';
import { ROUTES } from '@/shared/constants/routes';

export const CONTACT_HERO = {
  eyebrow: 'Home / Contact',
  titleLead: 'Bring us the problem,',
  titleAccent: 'questions included.',
  subtitle:
    'Tell us where things are slow, manual, or breaking. We will map what to automate, what to rebuild, and what to leave alone—no obligation.',
};

export const CONTACT_INTRO = {
  eyebrow: 'Ops dashboards & alerts',
  title: 'Bring the problem—questions included',
  body:
    'We start with what you are trying to fix, not a pre-baked package. Share the intent, a little context, and we will propose a clear next step.',
  steps: [
    {
      n: '01',
      title: 'Intent',
      desc: 'What outcome matters most—speed, reliability, ownership, or cost?',
    },
    {
      n: '02',
      title: 'Context',
      desc: 'Tools, constraints, and the workflows that are already in play.',
    },
    {
      n: '03',
      title: 'Next step',
      desc: 'A scoped audit or build path you can act on within days, not weeks.',
    },
  ],
};

export const CONTACT_STATS = [
  { value: '3–4 wks', label: 'Typical lead time' },
  { value: '100%', label: 'Scoped handoff' },
  { value: 'Weekly', label: 'Delivery cadence' },
];

export const HELP_OPTIONS = [
  { id: 'build', label: 'Build a product', desc: 'Web, mobile, or internal systems' },
  { id: 'automate', label: 'Automate workflows', desc: 'AI agents, integrations, ops' },
] as const;

export type HelpOptionId = (typeof HELP_OPTIONS)[number]['id'];

export const TIMELINE_OPTIONS = [
  { value: '', label: 'Select a timeline' },
  { value: 'asap', label: 'ASAP' },
  { value: '1-3-months', label: '1–3 months' },
  { value: '3-6-months', label: '3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
] as const;

export const CONTACT_SIDEBAR = {
  email: FOOTER_CONTACT.email,
  phone: '+92 300 0000000',
  phoneDisplay: '+92 300 0000000',
  address: FOOTER_CONTACT.address,
  hours: FOOTER_CONTACT.hours,
  bookingTitle: 'Prefer to pick a time?',
  bookingBody: 'Book a free audit and we will walk through the problem together.',
  bookingCta: 'Book a free audit',
  social: FOOTER_SOCIAL,
};

export const TIME_OVERLAP = {
  title: 'Time overlap',
  subtitle: 'Working hours that line up with your team',
  rows: [
    { zone: 'PKT', label: 'Pakistan', start: 0, end: 100, active: true },
    { zone: 'UK / EU', label: 'London / Berlin', start: 18, end: 72, active: false },
    { zone: 'US / ET', label: 'New York', start: 42, end: 88, active: false },
  ],
};

export const CONTACT_FORM_HEADING = {
  eyebrow: "Let's connect",
  titleLead: "Tell us what you're",
  titleAccent: 'building.',
  formTitle: 'Send us a message.',
};

export const CONTACT_LINKS = {
  home: ROUTES.home,
  projects: ROUTES.projects,
};

/** Formspree endpoint — override with NEXT_PUBLIC_FORMSPREE_URL if needed. */
export const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ?? 'https://formspree.io/f/mykqkvzl';

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/silveraxisltd';
