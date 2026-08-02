import type { PracticeDraft } from '../types';
import { banner, insightPosts } from './_shared';

export const mvp: PracticeDraft = {
  slug: 'mvp',
  crumb: 'MVP Development',
  meta: {
    title: 'MVP Development',
    description:
      'A first release that proves the bet—tight discovery, scoped build, launch, and a foundation ready for the next iteration.',
  },
  hero: {
    eyebrow: 'MVP Development',
    title: 'A first release that proves the bet—scoped tightly, shipped deliberately.',
    body: 'We cut to the decisions that matter, build the smallest product that can learn in market, and leave you with a foundation ready for the next release—not a throwaway prototype.',
    highlights: [
      { label: 'Typical first release', value: '8–12 wks' },
      { label: 'Focus', value: 'Learn fast' },
      { label: 'Foundation', value: 'Extensible' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Discovery', body: 'Assumptions, users, and the one outcome the MVP must prove.' },
      { title: 'Ruthless scoping', body: 'Kill nice-to-haves early so the build stays honest.' },
      { title: 'Design & build', body: 'Lean UX and engineering in one pod—no waterfall handoffs.' },
      { title: 'Launch readiness', body: 'Analytics, basic ops, and a path to onboard early users.' },
      { title: 'Learning loop', body: 'Instrumentation and a backlog shaped by what the market taught you.' },
      { title: 'Next-phase plan', body: 'A clear map from MVP to v1 without rewriting everything.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'An MVP you can raise, sell, or grow—because you own it.',
    body: 'Code, design files, analytics, and infrastructure accounts are yours. We avoid throwaway stacks when the thesis is serious; when a spike is enough, we label it clearly.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Builders who need evidence—not a feature parade.',
    columns: [
      [
        'Founders validating a wedge before a large raise',
        'Intrapreneurs piloting a new line inside an enterprise',
        'Teams replacing a no-code spike that hit its ceiling',
      ],
      [
        'Agencies needing a credible product partner for clients',
        'Operators productizing an internal workflow',
        'Teams burned by “MVP” builds that were secretly v3 scope',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in an MVP.',
    items: [
      { title: 'One primary bet', body: 'If everything is crucial, nothing is an MVP.' },
      { title: 'Real users soon', body: 'Ship to people who can say no—not only stakeholders who say yes.' },
      { title: 'Instrument learning', body: 'Events and qualitative feedback planned before launch day.' },
      { title: 'No false economies', body: 'Skip polish, not architecture you will need in ninety days.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From thesis to live learning.',
    steps: [
      { number: '01', title: 'Frame the bet', body: 'Success metrics, risks, and the smallest lovable slice.' },
      { number: '02', title: 'Design the path', body: 'Flows and stack choices that favor speed with a clean exit to scale.' },
      { number: '03', title: 'Build in public cycles', body: 'Weekly demos, visible scope cuts, early test users.' },
      { number: '04', title: 'Launch & learn', body: 'Go-live, measure, and plan the next release from evidence.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Everything an MVP needs in one pod.',
    body: 'Product, design, and engineering compressed—so you are not coordinating three vendors to ship one bet.',
    items: [
      'Product discovery workshops',
      'Lean UX & prototyping',
      'Full-stack MVP engineering',
      'Auth & billing basics',
      'Analytics instrumentation',
      'Cloud deploy & environments',
      'Launch checklist',
      'Iteration roadmap',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Stacks that ship fast and survive growth.',
    body: 'Boring, hireable foundations—unless the product thesis demands otherwise.',
    items: ['Next.js', 'React Native (when needed)', 'Node / APIs', 'PostgreSQL', 'Stripe', 'Auth providers', 'Vercel / AWS', 'PostHog / analytics'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'MVPs shaped to the learning you need.',
    rows: [
      { label: 'Marketplace wedges', body: 'One side of the market first—liquidity plans without boiling the ocean.' },
      { label: 'B2B workflow tools', body: 'A painful ops job automated end-to-end for a beachhead persona.' },
      { label: 'Consumer experiments', body: 'Activation-focused apps with clear retention instrumentation.' },
      { label: 'Internal → product', body: 'Turning a successful internal tool into something customers can buy.' },
    ],
  },
  excellence: {
    eyebrow: 'Delivery excellence',
    title: 'Speed without painting yourself into a corner.',
    items: [
      { title: 'Scoped bravely', body: 'Written “not now” lists stakeholders signed off on.' },
      { title: 'Demo rhythm', body: 'Weekly truth that prevents silent scope creep.' },
      { title: 'Clean seams', body: 'Modules you can rewrite later without a full halt.' },
      { title: 'Launch literacy', body: 'Support, legal basics, and rollback considered early.' },
    ],
  },
  faq: [
    {
      id: 'time',
      question: 'How long does an MVP usually take?',
      answer:
        'Many land in eight to twelve weeks after discovery, depending on integrations and compliance. We share a realistic plan before build—and cut scope rather than fantasize timelines.',
    },
    {
      id: 'throwaway',
      question: 'Will this be throwaway code?',
      answer:
        'We aim for a foundation you can grow. If a disposable spike is smarter for a pure learning goal, we say so explicitly and keep it isolated.',
    },
    {
      id: 'design',
      question: 'How polished will it look?',
      answer:
        'Credible and usable—not over-designed. Brand basics and clear UX matter for trust; pixel perfection waits for product-market evidence.',
    },
    {
      id: 'team',
      question: 'Can you work with our co-founder / technical advisor?',
      answer:
        'Yes. We integrate with your decision-makers and any existing engineers so ownership stays clear after launch.',
    },
    {
      id: 'start',
      question: 'What do you need to start?',
      answer:
        'A problem statement, target user, and constraints (budget, deadline, compliance). A short discovery turns that into a buildable MVP brief.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Product'),
  },
  banner: banner('Ready to prove the bet with a first release that can grow?'),
};
