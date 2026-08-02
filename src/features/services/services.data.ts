import { ROUTES, practiceDetailPath } from '@/shared/constants/routes';

export const SERVICES_HERO = {
  eyebrow: 'Services we offer',
  titleLead: 'Ten practices.',
  titleAccent: 'Clear capabilities.',
  body: 'We focus on engineering that ships—web, mobile, AI, and the systems that keep operations moving. Every engagement starts with the business outcome, then the stack.',
  primaryCta: { label: 'Work with us', href: ROUTES.contact },
  secondaryCta: { label: 'Explore practices', href: '#practices' },
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href: string;
  featured?: boolean;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'software-development',
    number: '01',
    title: 'Custom Software Development',
    summary: 'End-to-end builds for products and internal platforms that need to last.',
    detail:
      'We design, build, and hand off software with clear ownership—architecture you can extend, documentation you can trust, and a release path that matches your risk tolerance.',
    tags: ['Architecture', 'APIs', 'Integrations', 'Handoff'],
    image: '/assets/digital-product-process.png',
    imageAlt: 'Custom software development process',
    href: practiceDetailPath('software-development'),
    featured: true,
  },
  {
    id: 'web-development',
    number: '02',
    title: 'Web Development',
    summary: 'Fast, accessible web apps and sites built for real users and real traffic.',
    detail:
      'From marketing surfaces to complex dashboards, we ship web experiences that stay performant, maintainable, and aligned with your brand system.',
    tags: ['React / Next.js', 'Dashboards', 'Marketing sites', 'Performance'],
    image: '/assets/web-and-mobile.png',
    imageAlt: 'Web development interfaces',
    href: practiceDetailPath('web-development'),
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Mobile App Development',
    summary: 'Native-feel mobile products for iOS and Android with durable delivery.',
    detail:
      'We build mobile apps that fit how people actually work and shop—offline-aware where it matters, with release pipelines your team can run after handoff.',
    tags: ['Android application', 'iOS application', 'Cross-platform', 'Release pipelines'],
    image: '/assets/web-and-mobile.png',
    imageAlt: 'Mobile application screens',
    href: practiceDetailPath('mobile-apps'),
  },
  {
    id: 'ai-ml',
    number: '04',
    title: 'AI & Machine Learning',
    summary: 'Practical AI that automates work and surfaces decisions—not demos.',
    detail:
      'We integrate models, agents, and data pipelines into the workflows you already run, with evaluation and oversight so the system stays trustworthy in production.',
    tags: ['Agents', 'LLM integration', 'Pipelines', 'Evaluation'],
    image: '/assets/automation-tools.png',
    imageAlt: 'AI and machine learning tooling',
    href: practiceDetailPath('ai-ml'),
  },
  {
    id: 'blockchain',
    number: '05',
    title: 'Blockchain Development',
    summary: 'Selective ledger and smart-contract work when trust and auditability matter.',
    detail:
      'We help you decide when on-chain is worth it, then implement the minimum viable trust layer—wallets, contracts, and integrations that fit your product story.',
    tags: ['Smart contracts', 'Wallets', 'Auditable flows', 'Integrations'],
    image: '/assets/crm-erp.png',
    imageAlt: 'Blockchain systems illustration',
    href: practiceDetailPath('blockchain'),
  },
  {
    id: 'ui-ux',
    number: '06',
    title: 'UI/UX Design',
    summary: 'Interfaces and flows that make complex products feel simple.',
    detail:
      'Research, flows, and visual systems that reduce friction for users and give engineering a clear build target—without endless redesign cycles.',
    tags: ['Research', 'Flows', 'Design systems', 'Prototypes'],
    image: '/assets/digital-product-process.png',
    imageAlt: 'UI and UX design process',
    href: practiceDetailPath('ui-ux'),
  },
  {
    id: 'mvp',
    number: '07',
    title: 'MVP Development',
    summary: 'A first release that proves the bet—scoped tightly, shipped deliberately.',
    detail:
      'We cut to the decisions that matter, build the smallest product that can learn in market, and leave you with a foundation ready for the next release.',
    tags: ['Discovery', 'Scoped build', 'Launch', 'Iterate'],
    image: '/assets/web-and-mobile.png',
    imageAlt: 'MVP product development',
    href: practiceDetailPath('mvp'),
  },
  {
    id: 'digital-marketing',
    number: '08',
    title: 'Digital Marketing',
    summary: 'Growth surfaces and funnels connected to the product you are shipping.',
    detail:
      'Landing pages, tracking, and conversion paths designed alongside the product—so acquisition and retention share the same truth about the customer.',
    tags: ['Landing pages', 'Funnels', 'Tracking', 'Conversion'],
    image: '/assets/digital-product-process.png',
    imageAlt: 'Digital marketing surfaces',
    href: practiceDetailPath('digital-marketing'),
  },
  {
    id: 'cloud-devops',
    number: '09',
    title: 'Cloud & DevOps',
    summary: 'Infrastructure and pipelines that keep releases boring—in the best way.',
    detail:
      'CI/CD, environments, observability, and cost-aware cloud setup so shipping stays routine and incidents stay rare.',
    tags: ['CI/CD', 'Cloud', 'Observability', 'Environments'],
    image: '/assets/crm-erp.png',
    imageAlt: 'Cloud and DevOps infrastructure',
    href: practiceDetailPath('cloud-devops'),
  },
  {
    id: 'qa-automation',
    number: '10',
    title: 'QA & Automation',
    summary: 'Automated coverage that protects quality without slowing the team.',
    detail:
      'Test strategy, suites, and release gates tuned to your risk—so regressions are caught early and confidence scales with the product.',
    tags: ['Test strategy', 'Automation', 'Release gates', 'Regression'],
    image: '/assets/automation-tools.png',
    imageAlt: 'QA and test automation',
    href: practiceDetailPath('qa-automation'),
  },
];

export const ENGAGEMENT_CTA = {
  title: 'Hire developers, dedicated teams, or staff augmentation.',
  linkLabel: 'View flexible engagement models',
  href: '#',
};

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const SERVICES_FAQ: FaqItem[] = [
  {
    id: 'offer',
    question: 'What software development services do you offer?',
    answer:
      'We cover custom software, web and mobile products, AI and automation, UI/UX, MVP builds, cloud and DevOps, QA, and selective blockchain work. Most engagements combine a few of these into one delivery path.',
  },
  {
    id: 'start',
    question: 'How do we start a project with Silver Axis?',
    answer:
      'Book a free audit or send a short brief through contact. We clarify the outcome, constraints, and risks, then propose a scoped next step—often a discovery sprint or a first-release plan within days.',
  },
  {
    id: 'models',
    question: 'Do you offer dedicated teams or staff augmentation?',
    answer:
      'Yes. You can engage for a fixed build, a dedicated pod, or augmentation that plugs into your existing process. Ownership of code, docs, and decisions stays with you either way.',
  },
  {
    id: 'timeline',
    question: 'How long does a typical engagement take?',
    answer:
      'Lead time is often three to four weeks to start. First releases vary by scope—many MVPs land in eight to twelve weeks once discovery is clear. We share a realistic plan before build begins.',
  },
  {
    id: 'industries',
    question: 'Which industries do you work with?',
    answer:
      'We work across fintech, healthtech, commerce, edtech, logistics, and other domains where workflows and compliance shape the product. Domain context is part of how we scope, not an afterthought.',
  },
];

export const SERVICES_BANNER = {
  title: 'Not sure which service fits?',
  ctaLabel: 'Get a consultation',
  href: ROUTES.contact,
};

export const SERVICES_CAPABILITIES = {
  eyebrow: 'Explore services',
  title: 'Choose the expertise your next step requires.',
  body: 'Pick a practice to go deeper, or tell us the outcome—we will map the right mix of capabilities.',
};

export const FEATURED_SECTION = {
  eyebrow: 'Featured practices',
  title: 'One practice at a time.',
};

export const HOW_WE_DELIVER = {
  eyebrow: 'How we deliver',
  metrics: [
    { value: '2-4 wks', label: 'First operable demo' },
    { value: '100%', label: 'Ownership handoff' },
    { value: 'Weekly', label: 'Decision demos' },
  ],
  ctaLabel: 'Book a scoping call',
};
