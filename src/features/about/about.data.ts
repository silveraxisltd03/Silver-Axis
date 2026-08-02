import { ROUTES } from '@/shared/constants/routes';

export const ABOUT_HERO = {
  eyebrow: 'About Silver Axis',
  titleLead: 'A delivery studio',
  titleAccent: 'built around ownership.',
  body: 'We partner with teams that need software shipped carefully—clear scope, visible decisions, and systems they can keep running after handoff.',
  primaryCta: { label: 'Work with us', href: ROUTES.contact },
  secondaryCta: { label: 'See our work', href: ROUTES.projects },
};

export const ABOUT_INTRO = {
  eyebrow: 'Who we are',
  title: 'Built by people who sit with the problem—not by code factories.',
  body: 'Silver Axis is a product and engineering studio in Pakistan. We stay close to the workflow, the constraints, and the people who will live with the system. The goal is not more tickets closed. It is software that still makes sense six months after launch.',
  image: '/assets/digital-product-process.png',
  imageAlt: 'Product process from strategy and design through development and scale',
};

export const ABOUT_MISSION = {
  eyebrow: 'Mission and vision',
  titleLead: 'Our mission',
  titleAccent: 'and vision',
  aside: 'What we aim to ship, and the kind of partner we choose to be.',
  items: [
    {
      label: 'Mission',
      title: 'Your motive, made operable',
      body: 'Help ambitious teams move from uncertainty to shipped software through clear thinking, practical technology, and accountable execution.',
    },
    {
      label: 'Vision',
      title: 'Trusted partner, people first',
      body: 'Become the technology partner for teams that value craftsmanship, honest collaboration, and results that compound over time.',
    },
  ],
};

export const ABOUT_PRINCIPLES = {
  eyebrow: 'How we work',
  title: 'Embedded thinking, visible decisions, durable ownership.',
  items: [
    {
      title: 'Radical context sharing',
      body: 'Constraints, risks, and trade-offs stay on the table—so nobody discovers the real problem at the end of a sprint.',
    },
    {
      title: 'Decisions you can revisit',
      body: 'We write down why something was chosen. When priorities shift, the team can change course without archaeology.',
    },
    {
      title: 'Ownership that transfers',
      body: 'Code, docs, and runbooks are built for the people who keep the product alive after we step back.',
    },
    {
      title: 'Quality under pressure',
      body: 'Deadlines matter. Cutting corners that create silent debt does not. We protect the parts that are hard to unwind later.',
    },
  ],
};

/** Replace `name`, `bio`, and optional `image` with real leadership details. */
export interface LeadershipMember {
  id: string;
  /** Person name. Leave empty to show the short role until filled. */
  name: string;
  role: string;
  shortRole: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

export const ABOUT_LEADERSHIP: LeadershipMember[] = [
  {
    id: 'ceo',
    name: 'Masud Sajid',
    role: 'Chief Executive Officer',
    shortRole: 'CEO',
    bio: 'Sets commercial direction, owns client relationships, and keeps every engagement tied to a clear business outcome.',
    image: '/assets/team/masud-sajid.png',
  },
  {
    id: 'cto',
    name: 'Hassan Imtiaz',
    role: 'Chief Technology Officer',
    shortRole: 'CTO',
    bio: 'Guides architecture, engineering quality, and the technical bets that keep products maintainable as they grow.',
    image: '/assets/team/hassan-imtiaz.png',
  },
  {
    id: 'coo',
    name: 'Mansur Sajid',
    role: 'Chief Operating Officer',
    shortRole: 'COO',
    bio: 'Runs delivery operations—staffing, cadence, and handoff—so projects stay predictable from kickoff to launch.',
    image: '/assets/team/mansur-sajid.png',
  },
];

export const ABOUT_STANDARDS = {
  eyebrow: 'What we protect',
  titleLead: 'Standards we hold',
  titleAccent: 'ourselves to',
  items: [
    {
      title: 'Integrity',
      body: 'We say what is possible, what is risky, and what we will not pretend to know.',
    },
    {
      title: 'Commitment',
      body: 'Once scope is agreed, we protect it—or renegotiate in the open when reality changes.',
    },
    {
      title: 'Strategic alignment',
      body: 'Every build decision traces back to the outcome the business actually needs.',
    },
    {
      title: 'Quality assurance',
      body: 'Testing, reviews, and release discipline are part of delivery—not a last-week scramble.',
    },
    {
      title: 'Transparency',
      body: 'Progress, blockers, and trade-offs stay visible so stakeholders can make timely calls.',
    },
  ],
  cta: {
    title: 'Work with us',
    body: 'Bring a product challenge. We will help frame the first release that matters.',
    label: 'Get in touch',
    href: ROUTES.contact,
  },
};

export const ABOUT_FAQ = [
  {
    id: 'engage',
    question: 'How do engagements usually start?',
    answer:
      'Most start with a short discovery or audit. We clarify the problem, constraints, and success criteria, then propose a scoped first release—not an open-ended build.',
  },
  {
    id: 'team',
    question: 'Do we work with your existing team?',
    answer:
      'Yes. We embed beside product, design, and engineering when that is the right model, or we own a vertical slice end to end when you need focused delivery capacity.',
  },
  {
    id: 'ownership',
    question: 'Who owns the code and IP?',
    answer:
      'Client-specific deliverables transfer under the agreement once payment terms are met. We keep general methods and reusable tooling; your product remains yours.',
  },
  {
    id: 'location',
    question: 'Can you work across time zones?',
    answer:
      'We plan overlap hours with your stakeholders, keep decisions written, and demo on a cadence you can review without living in chat.',
  },
  {
    id: 'after',
    question: 'What happens after launch?',
    answer:
      'Handoff includes documentation, runbooks, and a practical next-step roadmap. Ongoing support or iteration can continue if you want us to stay involved.',
  },
];

export const ABOUT_BANNER = {
  title: 'Tell us the problem worth solving.',
  ctaLabel: 'Get in touch',
  href: ROUTES.contact,
};
