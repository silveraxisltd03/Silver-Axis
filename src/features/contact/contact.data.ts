import { FOOTER_CONTACT } from '@/shared/content/footer';
import { ROUTES } from '@/shared/constants/routes';

/** Formspree endpoint — override with NEXT_PUBLIC_FORMSPREE_URL if needed. */
export const FORMSPREE_URL =
  process.env.NEXT_PUBLIC_FORMSPREE_URL ?? 'https://formspree.io/f/mykqkvzl';

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/silveraxisltd';

export const CONTACT_HERO = {
  eyebrow: 'Start a conversation',
  titleLead: 'Bring us the problem,',
  titleAccent: 'questions included.',
  body:
    'Tell us where things are slow, manual, or breaking. We will map what to automate, what to rebuild, and what to leave alone—no obligation.',
  primaryCta: { label: 'Send a message', href: '#contact-connect-heading' },
  secondaryCta: {
    label: 'Book a free audit',
    href: CALENDLY_URL,
    external: true,
  },
};

export const CONTACT_INTRO = {
  eyebrow: 'After you reach out',
  titleLead: 'We start with the problem—',
  titleAccent: 'not a package.',
  body:
    'Share the outcome you need and enough context to act. We map what to automate, rebuild, or leave alone—then propose a clear next step.',
  visualLabel: 'Intake → scope → next step',
  steps: [
    {
      n: '01',
      title: 'Intent',
      desc: 'What outcome matters most—speed, reliability, ownership, or cost?',
    },
    {
      n: '02',
      title: 'Context',
      desc: 'Tools, constraints, and the workflows already in play.',
    },
    {
      n: '03',
      title: 'Next step',
      desc: 'A scoped audit or build path you can act on within days.',
    },
  ],
};

export const CONTACT_STATS = [
  { value: '<24h', label: 'Typical first reply' },
  { value: '30 min', label: 'Discovery call' },
  { value: 'Days', label: 'To a scoped proposal' },
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
