import type { PracticeDraft } from '../types';

export const softwareDevelopment: PracticeDraft = {
  slug: 'software-development',
  crumb: 'Software Development',
  meta: {
    title: 'Custom Software Development',
    description:
      'Custom software development with clear ownership—architecture, APIs, full-stack delivery, and a release path your team can run.',
  },
  hero: {
    eyebrow: 'Software Development',
    title: 'Custom Software Development with daily decisions and durable ownership.',
    body: 'We design, build, and hand off products and internal platforms that last—architecture you can extend, documentation you can trust, and a delivery cadence that matches your risk tolerance.',
    highlights: [
      { label: 'First operable demo', value: '2–4 weeks' },
      { label: 'Ownership handoff', value: '100%' },
      { label: 'Decision demos', value: 'Weekly' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Custom software', body: 'Products and platforms shaped around your workflows—not forced into a generic template.' },
      { title: 'Product ownership', body: 'You keep the code, decisions, and roadmap. We build so your team can continue without us.' },
      { title: 'Agility & transparency', body: 'Short cycles, visible progress, and trade-offs called early—before they become surprises.' },
      { title: 'Full stack development', body: 'UI, APIs, data, and infrastructure treated as one system so releases stay coherent.' },
      { title: 'API architecture', body: 'Clear contracts between services and clients so integrations stay stable as you grow.' },
      { title: 'Data integrity', body: 'Models, migrations, and validation that protect truth across the features you ship next.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Custom software with clear ownership from day one.',
    body: 'We treat every engagement as temporary by design. Architecture, docs, environments, and release paths are built so your team can operate, extend, and hire against the work—without a black box left behind.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams that need stronger software ownership.',
    columns: [
      [
        'Founders shipping a first product with a path past the MVP',
        'Ops leaders replacing fragile spreadsheets and glue scripts',
        'Product teams that need senior delivery without a full hire cycle',
      ],
      [
        'CTOs consolidating vendors into one owned codebase',
        'Internal platform teams standardizing APIs and environments',
        'Businesses modernizing legacy systems in controlled steps',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in custom software.',
    items: [
      { title: 'Outcome first', body: 'Scope starts from the business decision the software must support—not a shopping list of features.' },
      { title: 'Boring where it matters', body: 'Proven patterns for auth, data, and deploy. Novelty only where it creates real leverage.' },
      { title: 'Visible progress', body: 'Weekly demos and written decisions so stakeholders stay aligned without status theatre.' },
      { title: 'Handoff by default', body: 'Docs, runbooks, and ownership transfer are part of done—not a phase after the invoice.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'A path from brief to owned software.',
    steps: [
      { number: '01', title: 'Frame the outcome', body: 'Clarify the decision the product must support, constraints, and what success looks like in the first release.' },
      { number: '02', title: 'Design the seams', body: 'Architecture, APIs, and data boundaries that leave room to grow without rewriting everything.' },
      { number: '03', title: 'Ship in cycles', body: 'Short builds with weekly demos—risk called early, scope adjusted in public.' },
      { number: '04', title: 'Hand off cleanly', body: 'Environments, docs, and runbooks so your team can operate and extend without us.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Capabilities we bring to every build.',
    body: 'A senior-led pod that covers the stack end to end—so you are not stitching freelancers across layers.',
    items: [
      'Product discovery & scoping',
      'System & API design',
      'Web application engineering',
      'Mobile-ready backends',
      'Integrations & data pipelines',
      'CI/CD and environments',
      'Observability & hardening',
      'Documentation & handoff',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Stacks we ship with confidence.',
    body: 'Chosen for fitness and the team that will inherit the work—not for resume padding.',
    items: ['React / Next.js', 'Node.js', 'PostgreSQL', 'REST & GraphQL', 'AWS / Azure', 'Docker', 'CI/CD', 'Observability'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Software that solves real operational friction.',
    rows: [
      { label: 'Customer platforms', body: 'Portals, account systems, and self-serve flows that reduce support load while staying on-brand.' },
      { label: 'Internal tools', body: 'Ops dashboards, approval workflows, and staff apps that replace spreadsheet sprawl.' },
      { label: 'Integration layers', body: 'APIs and sync jobs that connect CRM, payments, logistics, and the systems already in play.' },
      { label: 'Product rebuilds', body: 'Incremental rewrites of brittle stacks—with cutover plans that protect revenue and uptime.' },
    ],
  },
  faq: [
    {
      id: 'include',
      question: 'What is included in a custom software engagement?',
      answer:
        'Discovery and scoping, architecture, full-stack build, environments, documentation, and a defined handoff. We align on outcomes and constraints first, then ship in short cycles with weekly decision demos.',
    },
    {
      id: 'own',
      question: 'Who owns the code and intellectual property?',
      answer:
        'You do. Repositories, cloud accounts, and credentials stay under your control. We work inside your tooling whenever possible so ownership is never ambiguous.',
    },
    {
      id: 'stack',
      question: 'Which technologies do you typically use?',
      answer:
        'We choose for fitness and team continuity—often React/Next.js, Node or similar API layers, relational databases, and cloud CI/CD. Stack decisions are shared early and documented for the team that will inherit the work.',
    },
    {
      id: 'start',
      question: 'How quickly can we start?',
      answer:
        'Lead time is typically three to four weeks. Many engagements begin with a short discovery or first-release plan so you see a realistic path before a larger build commitment.',
    },
    {
      id: 'team',
      question: 'Will this work with our existing team?',
      answer:
        'Yes. We can deliver as a focused pod or augment your engineers. Either way, ceremonies, docs, and code standards are set up so collaboration stays clean after we leave.',
    },
  ],
};
