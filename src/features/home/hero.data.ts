import { ROUTES } from '@/shared/constants/routes';

export interface HeroSlide {
  eyebrow: string;
  headline: { lead: string; accent: string };
  subheadline: { lead: string; accent: string };
  paragraph: string;
  primaryCta: { label: string; href: string };
  primaryMicrocopy: string;
  secondaryText: string;
  secondaryCta: { label: string; href: string };
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'AI AUTOMATION + WORKFLOW ENGINEERING',
    headline: { lead: 'Less busywork.', accent: 'More shipped.' },
    subheadline: { lead: 'Automation that ', accent: 'earns its keep.' },
    paragraph:
      "For operators buried in manual work — we design and ship AI systems that take the repetitive tasks off your team's plate, safely and measurably.",
    primaryCta: { label: 'Book a free audit', href: ROUTES.contact },
    primaryMicrocopy: 'Leave with a scoped plan, or a clear no.',
    secondaryText: 'Need extra engineering capacity instead?',
    secondaryCta: { label: 'See our work', href: ROUTES.projects },
  },
  {
    eyebrow: 'WEB DEVELOPMENT + MOBILE APPS',
    headline: { lead: 'Built to launch.', accent: 'Built to last.' },
    subheadline: { lead: 'Products that ', accent: 'ship on time.' },
    paragraph:
      'For founders and product teams who need a web or mobile release done right — clean architecture, real ownership, no rebuild in six months.',
    primaryCta: { label: 'Book a free audit', href: ROUTES.contact },
    primaryMicrocopy: 'Leave with a scoped plan, or a clear no.',
    secondaryText: 'Need extra engineering capacity instead?',
    secondaryCta: { label: 'See our work', href: ROUTES.projects },
  },
  {
    eyebrow: 'CRM, ERP & INTERNAL TOOLS',
    headline: { lead: 'Spreadsheets have limits.', accent: "Your systems shouldn't." },
    subheadline: { lead: 'Tools built around ', accent: 'how you work.' },
    paragraph:
      'For teams stretching spreadsheets past their limit — we build the internal tools and integrations that match how you actually operate.',
    primaryCta: { label: 'Book a free audit', href: ROUTES.contact },
    primaryMicrocopy: 'Leave with a scoped plan, or a clear no.',
    secondaryText: 'Need extra engineering capacity instead?',
    secondaryCta: { label: 'See our work', href: ROUTES.projects },
  },
];
