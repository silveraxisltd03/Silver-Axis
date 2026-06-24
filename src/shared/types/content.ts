export interface ProcessStep {
  title: string;
  desc: string;
}

export interface NumberedProcessStep {
  n: string;
  title: string;
  desc: string;
}

import type { ServiceCategorySlug } from '@/shared/constants/categories';

export interface CaseStudy {
  slug: string;
  category: ServiceCategorySlug;
  /** Legacy placeholder text shown in card when no thumbnail */
  shot: string;
  /** Path to hero image, e.g. /assets/project-thumb.png */
  thumbnail?: string;
  tag: string;
  title: string;
  desc: string;
  m1v: string;
  m1l: string;
  m2v: string;
  m2l: string;
  /** Short single-paragraph challenge summary (used on cards) */
  challenge?: string;
  /** Short single-paragraph solution summary (used on cards) */
  solution?: string;
  /** Short single-paragraph outcome summary (used on cards) */
  outcome?: string;
  /** TL;DR bullet points shown in a callout box */
  tldr?: string[];
  /** Expanded problem bullet points */
  problemPoints?: string[];
  /** Expanded solution bullet points */
  solutionPoints?: string[];
  /** Expanded outcome bullet points */
  outcomePoints?: string[];
  /** Numbered delivery steps */
  deliverySteps?: string[];
  /** Technologies/tools used */
  tools?: string[];
  /** Project screenshots for the gallery */
  screenshots?: { src: string; caption: string }[];
  /** Live URL to link from the detail page */
  liveUrl?: string;
  /** Client testimonial shown below the thumbnail */
  testimonial?: { quote: string; author?: string; role?: string };
}

export interface Quote {
  text: string;
  name: string;
  role: string;
  country?: string;
  countryCode?: string;
}

export interface StatItem {
  v: string;
  l: string;
}

export interface ContactStep {
  n: string;
  title: string;
  desc: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}
