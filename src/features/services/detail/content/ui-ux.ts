import type { PracticeDraft } from '../types';
import { insightPosts } from './_shared';

export const uiUx: PracticeDraft = {
  slug: 'ui-ux',
  crumb: 'UI/UX Design',
  meta: {
    title: 'UI/UX Design',
    description:
      'Interfaces and flows that make complex products feel simple—research, design systems, and prototypes engineering can build.',
  },
  hero: {
    eyebrow: 'UI/UX Design',
    title: 'Interfaces and flows that make complex products feel simple.',
    body: 'Research, flows, and visual systems that reduce friction for users and give engineering a clear build target—without endless redesign cycles.',
    highlights: [
      { label: 'Deliverable', value: 'Build-ready' },
      { label: 'Systems', value: 'Token-based' },
      { label: 'Validation', value: 'Prototype-led' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Product research', body: 'Interviews, journey maps, and problem framing that keep design honest.' },
      { title: 'Information architecture', body: 'Navigation and structure that scale as features accumulate.' },
      { title: 'Interaction design', body: 'Flows, states, and edge cases—not just happy-path screens.' },
      { title: 'Visual systems', body: 'Typography, color, and components that stay consistent under pressure.' },
      { title: 'Prototypes', body: 'Clickable validation before engineering commits weeks of build.' },
      { title: 'Design ops', body: 'Specs, tokens, and handoff rituals that reduce Slack archaeology.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'A design system your product team can grow.',
    body: 'Figma libraries, tokens, and guidelines are yours. We design for the engineers and PMs who will extend the system after the engagement—not a portfolio piece that dies in a PDF.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams that need clarity before more pixels.',
    columns: [
      [
        'SaaS products drowning in inconsistent UI debt',
        'Founders needing a credible MVP experience fast',
        'Enterprises redesigning legacy workflows users dread',
      ],
      [
        'Engineering teams blocked by ambiguous specs',
        'Brands aligning product UI with marketing systems',
        'Teams preparing a redesign without a big-bang rewrite',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in product design.',
    items: [
      { title: 'Clarity over decoration', body: 'Every element should earn its place in the user’s job.' },
      { title: 'States are the product', body: 'Empty, loading, error, and permission states get equal care.' },
      { title: 'Systems beat screens', body: 'Components and rules scale; one-off artboards do not.' },
      { title: 'Design with build in mind', body: 'Constraints from engineering are design inputs—not late surprises.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From problem framing to build-ready UI.',
    steps: [
      { number: '01', title: 'Understand the job', body: 'Users, constraints, and the metrics that define success.' },
      { number: '02', title: 'Structure & flow', body: 'IA and critical journeys before visual polish.' },
      { number: '03', title: 'System & UI', body: 'Components, tokens, and high-fidelity screens in context.' },
      { number: '04', title: 'Validate & handoff', body: 'Prototype tests, specs, and pairing with engineering.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Design that ships.',
    body: 'We stay close to engineering so the experience that launches matches the one that was approved.',
    items: [
      'UX research & synthesis',
      'User journey design',
      'Wireframes & prototypes',
      'UI design systems',
      'Design tokens',
      'Accessibility reviews',
      'Usability testing',
      'Engineering handoff',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Tools that keep design and code aligned.',
    body: 'Familiar, collaborative, and export-friendly for modern frontends.',
    items: ['Figma', 'FigJam', 'Prototyping', 'Design tokens', 'Storybook pairing', 'Contrast checks', 'UserTesting', 'Notion / specs'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Design work that unblocks product.',
    rows: [
      { label: 'MVP experience design', body: 'Tight scope, clear flows, and a visual system ready for first launch.' },
      { label: 'Dashboard redesign', body: 'Dense tools made scannable—with progressive disclosure and better defaults.' },
      { label: 'Design system rebuild', body: 'Tokens and components that kill one-off UI drift.' },
      { label: 'Conversion UX', body: 'Onboarding and checkout paths measured against drop-off—not opinions.' },
    ],
  },
  excellence: {
    eyebrow: 'Craft excellence',
    title: 'Details that separate usable from forgettable.',
    items: [
      { title: 'Hierarchy', body: 'Type and spacing that guide the eye without noise.' },
      { title: 'Motion with purpose', body: 'Transitions that explain state—not decorate.' },
      { title: 'Inclusive defaults', body: 'Contrast, focus, and touch targets baked in.' },
      { title: 'Content awareness', body: 'Real copy lengths and edge data—not lorem fiction.' },
    ],
  },
  faq: [
    {
      id: 'build',
      question: 'Do you only design, or also implement?',
      answer:
        'We can deliver design-only or pair with our web/mobile engineering. Many clients keep one team through handoff so intent survives implementation.',
    },
    {
      id: 'research',
      question: 'How much research is included?',
      answer:
        'Enough to de-risk decisions—often lightweight interviews and usability tests on prototypes. Depth scales with product risk and timeline.',
    },
    {
      id: 'system',
      question: 'Will we get a full design system?',
      answer:
        'When the product needs it. For early MVPs we ship a lean kit that can grow; for mature products we invest in tokens and documented components.',
    },
    {
      id: 'brand',
      question: 'Can you work within our brand guidelines?',
      answer:
        'Yes. We extend existing brand systems into product UI, or collaborate with brand teams when product needs new patterns.',
    },
    {
      id: 'start',
      question: 'How do we start?',
      answer:
        'A short product and audience brief, then a scoped design sprint on the highest-risk journeys.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Design'),
  }
};
