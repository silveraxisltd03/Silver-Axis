import type { PracticeDraft } from '../types';
import { banner, insightPosts } from './_shared';

export const webDevelopment: PracticeDraft = {
  slug: 'web-development',
  crumb: 'Web Development',
  meta: {
    title: 'Web Development',
    description:
      'Fast, accessible web apps and marketing sites—React/Next.js, dashboards, and performance tuned for real traffic.',
  },
  hero: {
    eyebrow: 'Web Development',
    title: 'Web experiences that stay fast, clear, and maintainable under real traffic.',
    body: 'From marketing surfaces to complex dashboards, we ship web products that respect your brand system, load quickly, and leave engineering with a codebase they can own.',
    highlights: [
      { label: 'Core Web Vitals focus', value: 'LCP-first' },
      { label: 'Accessible by default', value: 'WCAG-minded' },
      { label: 'Release cadence', value: 'Weekly' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Product web apps', body: 'Authenticated experiences, workflows, and dashboards built for daily use—not demos.' },
      { title: 'Marketing sites', body: 'Brand-led landing and content surfaces with clean CMS handoff and conversion paths.' },
      { title: 'Design systems', body: 'Reusable UI primitives so new pages stay on-brand without redesigning from scratch.' },
      { title: 'Performance engineering', body: 'Budgets, image strategy, and rendering choices that protect Core Web Vitals.' },
      { title: 'Accessibility', body: 'Keyboard flows, semantics, and contrast treated as requirements—not polish.' },
      { title: 'CMS & content models', body: 'Editors get structured content; engineers get predictable schemas.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'A web stack your team can extend without us.',
    body: 'Components, routing, content models, and deploy pipelines are documented and owned by you. We optimize for the next engineer who ships a page—not for vendor lock-in.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams that need web that works in production.',
    columns: [
      [
        'Brands rebuilding marketing sites that cannot stay slow',
        'SaaS teams shipping dashboards users live in every day',
        'Product orgs aligning web UI with a growing design system',
      ],
      [
        'Founders who need a credible web presence and a path to product',
        'Ops teams replacing internal tools stuck in legacy frontends',
        'Marketing and engineering pairs who need one shared source of truth',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like on the web.',
    items: [
      { title: 'Speed is a feature', body: 'Performance budgets are set early and defended in every release.' },
      { title: 'Content is structured', body: 'Editors change copy without breaking layout—or waiting on a deploy.' },
      { title: 'UI is systematic', body: 'Tokens and components keep brand consistency cheaper than one-off pages.' },
      { title: 'Access is non-negotiable', body: 'Semantic HTML and tested flows beat visual polish that excludes users.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From brand brief to production web.',
    steps: [
      { number: '01', title: 'Map surfaces', body: 'Pages, flows, and content types—plus what “fast enough” means for your audience.' },
      { number: '02', title: 'Establish the system', body: 'Layout, components, and CMS model so velocity does not erode quality.' },
      { number: '03', title: 'Build & measure', body: 'Ship slices with real metrics—LCP, CLS, conversion—not gut feel.' },
      { number: '04', title: 'Handoff & iterate', body: 'Docs, preview environments, and a backlog your team can run.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Front-end and full-stack web delivery.',
    body: 'We cover the browser experience and the APIs behind it—so the product feels whole.',
    items: [
      'Next.js / React applications',
      'Marketing & landing systems',
      'Admin and ops dashboards',
      'Design system implementation',
      'CMS integration',
      'SEO & metadata foundations',
      'Performance audits & fixes',
      'Analytics & event wiring',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Modern web foundations we prefer.',
    body: 'Familiar tools that hire well and stay maintainable.',
    items: ['Next.js', 'React', 'TypeScript', 'CSS architecture', 'Headless CMS', 'Vercel / cloud hosts', 'Storybook', 'Lighthouse CI'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Web products that earn their keep.',
    rows: [
      { label: 'SaaS dashboards', body: 'Dense data UIs that stay readable, filterable, and fast as records grow.' },
      { label: 'Brand sites', body: 'Campaign-ready pages with editorial workflows and measured conversion paths.' },
      { label: 'Customer portals', body: 'Account, billing, and support surfaces that reduce ticket volume.' },
      { label: 'Internal web tools', body: 'Staff apps that replace email chains and spreadsheet ops.' },
    ],
  },
  excellence: {
    eyebrow: 'Technical excellence',
    title: 'Details users feel—and engineers inherit.',
    items: [
      { title: 'Rendering strategy', body: 'SSR, SSG, and client islands chosen per route.' },
      { title: 'Bundle discipline', body: 'Route-level code splitting and dependency hygiene.' },
      { title: 'Design tokens', body: 'One source for color, type, and spacing across surfaces.' },
      { title: 'Preview pipelines', body: 'Safe review environments before anything hits prod.' },
    ],
  },
  faq: [
    {
      id: 'include',
      question: 'Do you build marketing sites and web apps?',
      answer:
        'Yes. We ship both brand/marketing surfaces and authenticated product experiences—often in the same design system so the whole web presence feels coherent.',
    },
    {
      id: 'cms',
      question: 'Can editors update content without developers?',
      answer:
        'We set up structured CMS models and preview flows so marketing can publish safely. Engineering keeps control of layout and performance constraints.',
    },
    {
      id: 'perf',
      question: 'How do you approach performance?',
      answer:
        'We define budgets early, measure on real devices, and treat regressions as bugs. Image strategy, caching, and rendering choices are part of the architecture—not a late audit.',
    },
    {
      id: 'design',
      question: 'Do you work from existing designs?',
      answer:
        'We implement Figma systems, refine interaction details, or partner with our UI/UX practice when flows need redesign before build.',
    },
    {
      id: 'start',
      question: 'How do engagements usually start?',
      answer:
        'With a short audit of current surfaces and goals, then a scoped first release—often a critical funnel or dashboard slice that proves the stack.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Web'),
  },
  banner: banner('Ready for a web experience that holds up in production?'),
};
