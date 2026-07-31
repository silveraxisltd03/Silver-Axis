import { ROUTES } from '@/shared/constants/routes';

// Fixed — shown above every slide, not part of the rotation.
export const HERO_EYEBROW = 'SOFTWARE DEVELOPMENT + STAFF AUGMENTATION';

// Fixed — Silver Axis's tagline, not part of the rotation.
export const HERO_HEADLINE = { lead: 'Your', accent: 'Vision.', tail: 'Our Execution.' };

// Fixed — identical across every slide, not part of the rotation.
export const HERO_PRIMARY_CTA = { label: 'Book a free audit', href: ROUTES.contact };
export const HERO_PRIMARY_MICROCOPY = 'Leave with a first-release boundary—or a clear no.';
export const HERO_SECONDARY_TEXT = 'Need embedded capacity instead?';
export const HERO_SECONDARY_CTA = { label: 'Hire talent', href: '#' };

export interface HeroSlide {
  subheadline: { lead: string; accent: string };
  paragraph: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    subheadline: { lead: 'Automation that ', accent: 'earns its keep.' },
    paragraph:
      "For operators buried in manual work — we design and ship AI systems that take the repetitive tasks off your team's plate, safely and measurably.",
  },
  {
    subheadline: { lead: 'Products that ', accent: 'ship on time.' },
    paragraph:
      'For founders and product teams who need a web or mobile release done right — clean architecture, real ownership, no rebuild in six months.',
  },
  {
    subheadline: { lead: 'Tools built around ', accent: 'how you work.' },
    paragraph:
      'For teams stretching spreadsheets past their limit — we build the internal tools and integrations that match how you actually operate.',
  },
];
