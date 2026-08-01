import type { ServiceCategorySlug } from '@/shared/constants/categories';

export interface ServiceTile {
  slug: ServiceCategorySlug;
  image: string;
  imageAlt: string;
  title: string;
}

export const SERVICE_TILES: ServiceTile[] = [
  { slug: 'ai-automation', image: '/assets/automation-tools.png', imageAlt: 'AI automation illustration', title: 'AI & Automation' },
  { slug: 'web-mobile', image: '/assets/web-and-mobile.png', imageAlt: 'Web and mobile illustration', title: 'Web & Mobile' },
  { slug: 'custom-systems', image: '/assets/crm-erp.png', imageAlt: 'CRM and ERP illustration', title: 'Custom Systems' },
];

export const STEPS = [
  {
    label: 'Discovery',
    title: 'Frame the problem',
    desc: 'We map users, workflows, constraints, and the decisions that must be true before the build begins.',
    deliverable: 'Discovery brief, success criteria, priorities, and risk list.',
  },
  {
    label: 'Design',
    title: 'Shape the product',
    desc: 'We turn the brief into a clear experience and settle the architecture so implementation is not guesswork.',
    deliverable: 'User flows, interface direction, prototype, and technical plan.',
  },
  {
    label: 'Build',
    title: 'Build in the open',
    desc: 'We ship in short cycles with demos you can see, keeping scope, quality, and decisions visible throughout.',
    deliverable: 'Working increments, automated tests, and progress you can verify.',
  },
  {
    label: 'Handoff',
    title: 'Launch and scale cleanly',
    desc: 'We release with care, transfer ownership, and make sure the product is ready to improve after launch.',
    deliverable: 'Production release, documentation, training, and a practical roadmap.',
  },
];
