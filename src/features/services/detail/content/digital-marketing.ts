import type { PracticeDraft } from '../types';
import { banner, insightPosts } from './_shared';

export const digitalMarketing: PracticeDraft = {
  slug: 'digital-marketing',
  crumb: 'Digital Marketing',
  meta: {
    title: 'Digital Marketing',
    description:
      'Growth surfaces and funnels connected to the product you are shipping—landing pages, tracking, and conversion paths with shared customer truth.',
  },
  hero: {
    eyebrow: 'Digital Marketing',
    title: 'Growth surfaces connected to the product you are actually shipping.',
    body: 'Landing pages, tracking, and conversion paths designed alongside the product—so acquisition and retention share the same truth about the customer.',
    highlights: [
      { label: 'Focus', value: 'Conversion' },
      { label: 'Tracking', value: 'Clean events' },
      { label: 'Build + brand', value: 'Aligned' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Landing systems', body: 'Campaign pages that load fast, match brand, and map to real offers.' },
      { title: 'Funnel design', body: 'Paths from first click to activation—not isolated ads and orphan pages.' },
      { title: 'Tracking & attribution', body: 'Events and UTMs that analytics and product can both trust.' },
      { title: 'CRO experiments', body: 'Hypotheses, variants, and readouts—not endless opinion debates.' },
      { title: 'Content surfaces', body: 'SEO-ready structures that engineering can maintain.' },
      { title: 'Marketing ↔ product bridge', body: 'Shared definitions of lead, trial, and activated user.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Your analytics, domains, and funnels—documented.',
    body: 'Ad accounts, pixels, CMS, and repos stay under your control. We leave measurement plans and page systems marketing can iterate without breaking product telemetry.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams tired of growth work that ignores the product.',
    columns: [
      [
        'Startups launching paid acquisition without a conversion system',
        'Product-led teams whose marketing site lags the app',
        'Brands rebuilding funnels after attribution broke',
      ],
      [
        'B2B teams needing demo and trial paths that sales trusts',
        'Founders who need credible launch surfaces fast',
        'Marketing orgs blocked by engineering backlog on every page',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in product-aware growth.',
    items: [
      { title: 'Same customer truth', body: 'Marketing and product agree on what a qualified action means.' },
      { title: 'Speed with integrity', body: 'Ship campaigns fast without torching Core Web Vitals or brand.' },
      { title: 'Measure before scale', body: 'Prove a path converts before pouring budget into it.' },
      { title: 'Systems over one-offs', body: 'Reusable landing kits beat fifty disconnected pages.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From offer to measurable funnel.',
    steps: [
      { number: '01', title: 'Align on the offer', body: 'Audience, promise, and the activation moment that matters.' },
      { number: '02', title: 'Design the path', body: 'Pages, CTAs, and tracking plan with engineering in the room.' },
      { number: '03', title: 'Build & instrument', body: 'Ship surfaces with events validated end to end.' },
      { number: '04', title: 'Learn & iterate', body: 'CRO backlog driven by data—not the loudest stakeholder.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Growth engineering and conversion craft.',
    body: 'We sit between marketing and product so funnels do not become orphaned microsites.',
    items: [
      'Landing page systems',
      'Funnel UX & copy structure',
      'Analytics & event design',
      'A/B testing setup',
      'SEO foundations',
      'Marketing site builds',
      'CRM / MAP integrations',
      'Performance for paid traffic',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Growth stack that stays maintainable.',
    body: 'Chosen to play nicely with modern web engineering.',
    items: ['Next.js landers', 'CMS', 'GA4 / Segment', 'GTM', 'HubSpot / CRM', 'Search Console', 'Hotjar / session tools', 'Experiment platforms'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Funnels that respect both brand and product.',
    rows: [
      { label: 'Launch sites', body: 'Waitlists and launch pages with clean capture and follow-up automation.' },
      { label: 'Paid landing kits', body: 'Modular pages matched to campaigns without forking the brand.' },
      { label: 'Trial / demo funnels', body: 'B2B paths that qualify leads and sync to CRM correctly.' },
      { label: 'Content engines', body: 'Blog and resource templates that SEO and design can both live with.' },
    ],
  },
  excellence: {
    eyebrow: 'Growth excellence',
    title: 'Details that protect spend and trust.',
    items: [
      { title: 'Event hygiene', body: 'Named events that survive campaign chaos.' },
      { title: 'Consent-aware tracking', body: 'Privacy modes that keep legal and analytics aligned.' },
      { title: 'Message match', body: 'Ad promise equals landing promise equals product onboarding.' },
      { title: 'Perf under ads', body: 'Pages that stay fast when paid traffic spikes.' },
    ],
  },
  faq: [
    {
      id: 'ads',
      question: 'Do you run ad campaigns?',
      answer:
        'We focus on the surfaces, tracking, and conversion systems campaigns depend on. We can partner with your media buyers or recommend operators—our edge is the product-connected funnel.',
    },
    {
      id: 'seo',
      question: 'Is SEO included?',
      answer:
        'Technical and structural SEO foundations yes—templates, metadata, performance, and content models. Ongoing content programs can be scoped separately.',
    },
    {
      id: 'brand',
      question: 'Can you work with our agency or brand team?',
      answer:
        'Yes. We implement and extend brand systems into high-performing web funnels without fighting your creative partners.',
    },
    {
      id: 'product',
      question: 'Why involve a software studio in marketing?',
      answer:
        'Because broken tracking, slow pages, and disconnected onboarding waste ad spend. We build growth surfaces like product—owned, measured, and maintainable.',
    },
    {
      id: 'start',
      question: 'How do we start?',
      answer:
        'Share current funnel metrics and campaign goals. We audit the path, then ship a high-impact landing or tracking fix as the first release.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Growth'),
  },
  banner: banner('Connect acquisition to a product path that actually converts.'),
};
