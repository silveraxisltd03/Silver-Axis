import type { PracticeDraft } from '../types';
import { insightPosts } from './_shared';

export const qaAutomation: PracticeDraft = {
  slug: 'qa-automation',
  crumb: 'QA & Automation',
  meta: {
    title: 'QA & Automation',
    description:
      'Automated coverage that protects quality without slowing the team—test strategy, suites, and release gates tuned to your risk.',
  },
  hero: {
    eyebrow: 'QA & Automation',
    title: 'Automated coverage that protects quality without slowing the team.',
    body: 'Test strategy, suites, and release gates tuned to your risk—so regressions are caught early and confidence scales with the product.',
    highlights: [
      { label: 'Strategy', value: 'Risk-based' },
      { label: 'Gates', value: 'CI-enforced' },
      { label: 'Focus', value: 'Signal > volume' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Test strategy', body: 'What to automate, what to explore manually, and why—mapped to failure cost.' },
      { title: 'UI automation', body: 'Stable end-to-end suites that survive UI churn better than brittle recorders.' },
      { title: 'API & contract tests', body: 'Fast feedback on integrations before the UI ever loads.' },
      { title: 'CI quality gates', body: 'Blocking checks that protect main without becoming a traffic jam.' },
      { title: 'Performance checks', body: 'Smoke performance and load where user experience is at stake.' },
      { title: 'QA enablement', body: 'Playbooks and pairing so your team owns the practice.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Suites and gates live in your repos.',
    body: 'Automation is product code. You own the frameworks, data factories, and CI jobs. We design for maintainability so tests do not rot into ignored red builds.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams that need confidence at release speed.',
    columns: [
      [
        'Product teams shipping weekly with rising regression risk',
        'Startups after a painful production bug with no safety net',
        'Enterprises modernizing QA beyond manual spreadsheet cycles',
      ],
      [
        'Platform teams introducing contract testing across services',
        'Mobile/web squads drowning in flaky UI tests',
        'Leaders who want quality metrics that mean something',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in QA automation.',
    items: [
      { title: 'Risk over coverage %', body: 'A smaller suite that catches expensive bugs beats 5,000 shallow asserts.' },
      { title: 'Fast feedback first', body: 'Unit and API layers carry most of the load; E2E stays selective.' },
      { title: 'Flakes are defects', body: 'Quarantine and fix—never normalize ignored failures.' },
      { title: 'Quality is shared', body: 'Automation supports engineers; it does not replace product judgment.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From guesswork testing to gated delivery.',
    steps: [
      { number: '01', title: 'Map critical risk', body: 'Journeys, integrations, and failure costs that deserve automation.' },
      { number: '02', title: 'Build the pyramid', body: 'Frameworks, data, and the first high-value suites in CI.' },
      { number: '03', title: 'Wire the gates', body: 'Release checks, reporting, and flake management.' },
      { number: '04', title: 'Transfer the craft', body: 'Docs, pairing, and a backlog your QA/eng team can grow.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Quality engineering that scales with delivery.',
    body: 'Strategy and implementation—so automation is not a side project that dies in a sprint.',
    items: [
      'QA strategy & tooling selection',
      'E2E automation (Playwright / Cypress)',
      'API & contract testing',
      'Mobile test automation',
      'CI quality gates',
      'Performance smoke tests',
      'Test data management',
      'Reporting & flake triage',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Automation tools we trust in CI.',
    body: 'Stable, parallelizable, and friendly to modern frontends and APIs.',
    items: ['Playwright', 'Cypress', 'Jest / Vitest', 'Pytest', 'Pact / contracts', 'k6', 'GitHub Actions', 'Allure / reports'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Quality systems matched to how you ship.',
    rows: [
      { label: 'Release gate rebuilds', body: 'Meaningful CI checks that block bad builds without blocking the team.' },
      { label: 'Regression rescue', body: 'Targeted suites for the journeys that keep breaking in prod.' },
      { label: 'API safety nets', body: 'Contract tests across services before UI automation multiplies.' },
      { label: 'QA transformation', body: 'From pure manual cycles to a blended, risk-based practice.' },
    ],
  },
  excellence: {
    eyebrow: 'Quality excellence',
    title: 'Signal you can trust at merge time.',
    items: [
      { title: 'Deterministic data', body: 'Factories and isolation that kill environment ghost bugs.' },
      { title: 'Parallel CI', body: 'Suites that finish fast enough to matter.' },
      { title: 'Clear ownership', body: 'Every failure has a team and a triage path.' },
      { title: 'Living docs', body: 'How to run, debug, and extend tests without archaeology.' },
    ],
  },
  faq: [
    {
      id: 'cover',
      question: 'How much automation do we need?',
      answer:
        'Enough to protect high-cost failures and keep releases confident. We avoid vanity coverage targets and build a pyramid that matches your risk and release cadence.',
    },
    {
      id: 'flake',
      question: 'What about flaky tests?',
      answer:
        'We treat flakes as defects: quarantine, root-cause, and fix. A red build that everyone ignores is worse than no automation.',
    },
    {
      id: 'manual',
      question: 'Do you still recommend manual testing?',
      answer:
        'Yes—for exploratory, usability, and high-judgment scenarios. Automation handles repetition; humans handle discovery.',
    },
    {
      id: 'tool',
      question: 'Which tools do you prefer?',
      answer:
        'Playwright is a frequent default for modern web; we also meet you in Cypress, mobile stacks, or API-first setups already in place.',
    },
    {
      id: 'start',
      question: 'How do we start?',
      answer:
        'A quality audit of critical journeys and CI, then a first suite and gate that pays for itself on the next release.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Quality'),
  }
};
