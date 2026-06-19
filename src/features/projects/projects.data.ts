import type { CaseStudy, Quote, StatItem } from '@/shared/types';

export const STATS: StatItem[] = [
  { v: '40+', l: 'systems shipped' },
  { v: '99.9%', l: 'average uptime' },
  { v: '8M+', l: 'users served' },
  { v: '6 yrs', l: 'longest system still running' },
];

export const CASES: CaseStudy[] = [
  { shot: 'case-study screenshot', tag: 'AI Automation + ERP', title: 'Ops platform for a logistics network', desc: 'Swapped manual dispatch for an event-driven workflow engine and a custom ERP layer — queue-backed, idempotent, with a full audit trail.', m1v: '70%', m1l: 'less manual work', m2v: '4 wks', m2l: 'to first launch' },
  { shot: 'case-study screenshot', tag: 'Web + Mobile', title: 'Member app for a health provider', desc: 'Native mobile and web on a shared TypeScript core and a cached API gateway — scoped and load-tested before build.', m1v: '99.9%', m1l: 'uptime', m2v: '4.8\u2605', m2l: 'store rating' },
  { shot: 'case-study screenshot', tag: 'AI Automation', title: 'Lead engine for a property group', desc: 'AI triage and routing across web, WhatsApp and email — qualified leads in the CRM within seconds, not hours.', m1v: '3x', m1l: 'faster response', m2v: '24/7', m2l: 'coverage' },
  { shot: 'case-study screenshot', tag: 'Custom CRM', title: 'Internal CRM for a services firm', desc: 'Replaced a tangle of spreadsheets with a role-based CRM and reporting layer the whole team trusts.', m1v: '12 hrs', m1l: 'saved weekly', m2v: '100%', m2l: 'adoption' },
];

export const QUOTES: Quote[] = [
  { text: 'They spent real time understanding the problem before writing any code. The prototype caught issues that would have cost us months.', name: 'Placeholder Name', role: 'Founder, Client Co' },
  { text: 'The automation work paid for itself in weeks. Then they built the custom system on top of it without missing a beat.', name: 'Placeholder Name', role: 'COO, Client Co' },
  { text: 'Fast, modular, and genuinely scalable. It still runs perfectly two years and a lot of users later.', name: 'Placeholder Name', role: 'CTO, Client Co' },
];
