import type { CaseStudy, ProcessStep, Quote } from '@/shared/types';

export const STEPS: ProcessStep[] = [
  { title: 'Audit', desc: 'We trace your workflows, data flows and integrations, then separate what genuinely needs AI from what is a straightforward engineering fix.' },
  { title: 'Prototype', desc: 'Before any production code, we build a working model and stress the edge cases — race conditions, bad data, scale. The weak points surface here, cheaply, instead of in front of your users.' },
  { title: 'Build', desc: 'Then we build it properly: typed, test-covered and modular, behind versioned APIs — only as complex as it needs to be, and documented for whoever ships next.' },
  { title: 'Grow with it', desc: 'Once the automations are wired in, we layer on apps, services and dashboards on the same foundation — CI-deployed and observable from day one.' },
];

export const CASES: CaseStudy[] = [
  { shot: 'case-study screenshot', tag: 'AI Automation + ERP', title: 'Ops platform for a logistics network', desc: 'Swapped manual dispatch for an event-driven workflow engine and a custom ERP layer — queue-backed, idempotent, with a full audit trail.', m1v: '70%', m1l: 'less manual work', m2v: '4 wks', m2l: 'to first launch' },
  { shot: 'case-study screenshot', tag: 'Web + Mobile', title: 'Member app for a health provider', desc: 'Native mobile and web on a shared TypeScript core and a cached API gateway — scoped and load-tested in a prototyping phase before build.', m1v: '99.9%', m1l: 'uptime', m2v: '4.8\u2605', m2l: 'store rating' },
];

export const QUOTES: Quote[] = [
  { text: 'They spent real time understanding the problem before writing any code. The prototype caught issues that would have cost us months.', name: 'Placeholder Name', role: 'Founder, Client Co' },
  { text: 'The automation work paid for itself in weeks. Then they built the custom system on top of it without missing a beat.', name: 'Placeholder Name', role: 'COO, Client Co' },
  { text: 'Fast, modular, and genuinely scalable. It still runs perfectly two years and a lot of users later.', name: 'Placeholder Name', role: 'CTO, Client Co' },
];
