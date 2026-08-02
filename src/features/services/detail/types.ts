import { ROUTES } from '@/shared/constants/routes';

export interface ServiceHighlight {
  label: string;
  value: string;
}

export interface ServiceTitleBody {
  title: string;
  body: string;
}

export interface ServiceLabeledBody {
  label: string;
  body: string;
}

export interface ServiceFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceInsight {
  slug: string;
  title: string;
  category: string;
  date: string;
}

export interface ServiceProcessStep {
  number: string;
  title: string;
  body: string;
}

export type ServiceTheme =
  | 'engineering'
  | 'web'
  | 'mobile'
  | 'ai'
  | 'chain'
  | 'design'
  | 'mvp'
  | 'growth'
  | 'platform'
  | 'quality';

export type InvolvesLayout = 'grid' | 'bento' | 'hex';
export type ProcessLayout = 'cards' | 'rail' | 'steps';

export interface ServiceFeatureBand {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  imagePosition: 'left' | 'right';
}

export type ServiceModule =
  | {
      type: 'compare';
      eyebrow: string;
      title: string;
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
    }
  | {
      type: 'platforms';
      eyebrow: string;
      title: string;
      items: { title: string; body: string; meta: string }[];
    }
  | {
      type: 'loop';
      eyebrow: string;
      title: string;
      stages: { title: string; body: string }[];
    }
  | {
      type: 'metrics';
      eyebrow: string;
      title: string;
      items: { value: string; label: string; body: string }[];
    }
  | {
      type: 'checklist';
      eyebrow: string;
      title: string;
      body: string;
      items: { title: string; body: string }[];
    };

export interface ServiceVisual {
  theme: ServiceTheme;
  involvesLayout: InvolvesLayout;
  processLayout: ProcessLayout;
  image: string;
  imageAlt: string;
  feature?: ServiceFeatureBand;
  module?: ServiceModule;
}

export interface ServiceDetailContent {
  slug: string;
  crumb: string;
  meta: { title: string; description: string };
  visual: ServiceVisual;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: ServiceHighlight[];
  };
  involves: {
    eyebrow: string;
    title: string;
    items: ServiceTitleBody[];
  };
  ownership: {
    eyebrow: string;
    title: string;
    body: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    columns: [string[], string[]];
  };
  principles: {
    eyebrow: string;
    title: string;
    items: ServiceTitleBody[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: ServiceProcessStep[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  };
  stack?: {
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    rows: ServiceLabeledBody[];
  };
  excellence: {
    eyebrow: string;
    title: string;
    items: ServiceTitleBody[];
  };
  faq: ServiceFaqItem[];
  insights: {
    eyebrow: string;
    title: string;
    posts: ServiceInsight[];
  };
  banner: {
    title: string;
    ctaLabel: string;
    href: string;
  };
}

/** Content draft before visual theme/layout is attached. */
export type PracticeDraft = Omit<ServiceDetailContent, 'visual'>;

export const DEFAULT_BANNER_HREF = ROUTES.contact;

export function serviceImage(slug: string): string {
  return `/assets/services/service-${slug}.png`;
}
