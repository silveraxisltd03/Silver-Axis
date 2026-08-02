import type { PracticeDraft } from '../types';
import { insightPosts } from './_shared';

export const cloudDevops: PracticeDraft = {
  slug: 'cloud-devops',
  crumb: 'Cloud & DevOps',
  meta: {
    title: 'Cloud & DevOps',
    description:
      'Infrastructure and pipelines that keep releases boring—CI/CD, environments, observability, and cost-aware cloud setup.',
  },
  hero: {
    eyebrow: 'Cloud & DevOps',
    title: 'Infrastructure and pipelines that keep releases boring—in the best way.',
    body: 'CI/CD, environments, observability, and cost-aware cloud setup so shipping stays routine and incidents stay rare—with runbooks your team can own.',
    highlights: [
      { label: 'Releases', value: 'Automated' },
      { label: 'Environments', value: 'Parity-first' },
      { label: 'Ops posture', value: 'Observable' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'CI/CD pipelines', body: 'Build, test, and deploy paths that make shipping the default—not a ceremony.' },
      { title: 'Cloud architecture', body: 'Right-sized AWS/Azure/GCP foundations without overbuilt sprawl.' },
      { title: 'Environment parity', body: 'Dev, staging, and prod that behave alike enough to trust.' },
      { title: 'Infrastructure as code', body: 'Reproducible environments instead of click-ops folklore.' },
      { title: 'Observability', body: 'Logs, metrics, traces, and alerts tuned to real failure modes.' },
      { title: 'Cost & security basics', body: 'Guardrails for spend, secrets, and access from day one.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Cloud accounts and pipelines remain yours.',
    body: 'We work inside your cloud org, document every system, and avoid opaque managed layers you cannot operate. When we leave, deploys and incidents still make sense.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams that need delivery to feel routine.',
    columns: [
      [
        'Product teams blocked by fragile manual deploys',
        'Startups outgrowing a single server and a prayer',
        'Enterprises standardizing environments across squads',
      ],
      [
        'CTOs reducing cloud waste without freezing delivery',
        'Teams recovering from a painful outage with no playbook',
        'Engineering leads introducing IaC for the first time',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in DevOps.',
    items: [
      { title: 'Boring deploys', body: 'If release day is exciting, the system is wrong.' },
      { title: 'Everything reproducible', body: 'If it cannot be recreated from code, it is a liability.' },
      { title: 'Signal over noise', body: 'Alerts should wake humans for real pain—not vanity metrics.' },
      { title: 'Secure defaults', body: 'Least privilege and secrets hygiene before scale.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From fragile hosting to confident delivery.',
    steps: [
      { number: '01', title: 'Assess reality', body: 'Current deploys, environments, incidents, and cost drivers.' },
      { number: '02', title: 'Design the platform', body: 'Pipeline, IaC, and observability blueprint matched to team size.' },
      { number: '03', title: 'Implement & migrate', body: 'Incremental cutovers that protect uptime.' },
      { number: '04', title: 'Train & handoff', body: 'Runbooks, diagrams, and pairing so ops stays in-house.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Platform work that unblocks product.',
    body: 'We make delivery infrastructure a product for your engineers.',
    items: [
      'CI/CD design & implementation',
      'AWS / Azure / GCP setup',
      'Kubernetes when warranted',
      'Terraform / IaC',
      'Containerization',
      'Monitoring & alerting',
      'Secrets & IAM hygiene',
      'Cost visibility & rightsizing',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Cloud and delivery tools we use often.',
    body: 'Proven choices that hire well and document cleanly.',
    items: ['GitHub Actions', 'Terraform', 'Docker', 'AWS', 'Azure', 'Kubernetes', 'Grafana / Datadog', 'Vault / secrets managers'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Platform outcomes teams feel immediately.',
    rows: [
      { label: 'Release automation', body: 'Merge-to-prod paths with tests, approvals, and rollback.' },
      { label: 'Environment rebuilds', body: 'Staging that mirrors prod enough to catch real bugs.' },
      { label: 'Observability baseline', body: 'Golden signals and on-call friendly alert routes.' },
      { label: 'Cloud cost resets', body: 'Idle waste removed, budgets visible, architecture right-sized.' },
    ],
  },
  excellence: {
    eyebrow: 'Technical excellence',
    title: 'Reliability is a design choice.',
    items: [
      { title: 'Immutable artifacts', body: 'What you tested is what you deploy.' },
      { title: 'Progressive delivery', body: 'Canaries and staged rollouts when risk warrants.' },
      { title: 'Disaster literacy', body: 'Backups and restore drills—not just backup checkboxes.' },
      { title: 'Least privilege IAM', body: 'Humans and machines get only what they need.' },
    ],
  },
  faq: [
    {
      id: 'k8s',
      question: 'Do we need Kubernetes?',
      answer:
        'Only when complexity earns it. Many products thrive on simpler container or PaaS setups. We recommend the smallest platform that meets reliability and team skills.',
    },
    {
      id: 'migrate',
      question: 'Can you migrate us without downtime?',
      answer:
        'We plan cutovers with dual-running windows, health checks, and rollback paths. Zero risk is impossible; managed risk is the goal.',
    },
    {
      id: 'team',
      question: 'Will our developers still own deploys?',
      answer:
        'Yes—that is the point. We build self-serve pipelines and teach the team so platform work does not become a ticket bottleneck forever.',
    },
    {
      id: 'cost',
      question: 'Can you help with cloud spend?',
      answer:
        'Yes. Rightsizing, idle cleanup, and architecture choices often recover more than the engagement costs—while improving reliability.',
    },
    {
      id: 'start',
      question: 'How do we start?',
      answer:
        'A delivery and infrastructure audit, then a prioritized backlog. Most teams feel relief after the first pipeline and observability wins.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Platform'),
  }
};
