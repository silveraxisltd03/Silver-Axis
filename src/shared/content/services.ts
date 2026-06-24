import type { ServiceCategorySlug } from '@/shared/constants/categories';

export interface TechGroup {
  category: string;
  items: string[];
}

export interface ProblemCard {
  /** Font Awesome free-solid icon name, e.g. 'clock' */
  icon: string;
  title: string;
  desc: string;
}

export interface ApproachStep {
  n: string;
  title: string;
  desc: string;
}

export interface OutcomeItem {
  value: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  slug: ServiceCategorySlug;
  number: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit: 'contain' | 'cover';
  bullets: string[];
  imageFirst: boolean;
  problemsHeading: string;
  problems: ProblemCard[];
  techGroups: TechGroup[];
  approachHeading: string;
  approach: ApproachStep[];
  outcomes: OutcomeItem[];
  faq: FaqItem[];
  jsonLd: Record<string, unknown>;
}

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    slug: 'ai-automation',
    number: '01',
    label: 'AI Automation',
    metaTitle: 'AI Automation & Workflow Automation Services | Silver Axis',
    metaDescription:
      'Silver Axis builds reliable AI automations and workflow integrations using n8n, Make, Zapier and custom code, saving your team hours every week with full observability.',
    eyebrow: '01, AI Automation',
    title: 'Let AI handle the workflow. You handle the decisions.',
    subtitle: 'Automation that runs in the background, stays observable, and actually works.',
    description:
      'We map your repetitive work, build reliable automations across the tools you already use, and hand the busywork to workflows that have retries, logging, and human checkpoints baked in.',
    image: '/assets/automation-tools.png',
    imageAlt: 'n8n, Make, Zapier and AI tools connected through one automation layer',
    imageFit: 'contain',
    bullets: [
      'Workflow automation across Zapier, n8n, Make and custom code',
      'AI agents for triage, drafting, enrichment and routing',
      'CRM, email, sheets and database sync that stays in step',
      'Monitoring and alerts so you always know it is working',
    ],
    imageFirst: false,
    problemsHeading: 'Businesses come to us when…',
    problems: [
      {
        icon: 'clock',
        title: 'Manual tasks are draining the team',
        desc: 'Data entry, report generation, lead routing, follow-up emails, your team is doing work a machine should handle.',
      },
      {
        icon: 'layer-group',
        title: 'Tool sprawl is creating data silos',
        desc: 'CRM, helpdesk, spreadsheets and Slack are all out of sync. Nobody has a single source of truth.',
      },
      {
        icon: 'eye-slash',
        title: "No visibility into what's actually running",
        desc: 'Automations built with no logs or alerts. When something breaks, you find out from a customer, not your system.',
      },
    ],
    techGroups: [
      {
        category: 'Automation Platforms',
        items: ['n8n', 'Make (Integromat)', 'Zapier', 'Activepieces'],
      },
      {
        category: 'AI & Language Models',
        items: ['OpenAI GPT-4o', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Whisper'],
      },
      {
        category: 'Data & Integrations',
        items: ['Webhooks', 'REST APIs', 'PostgreSQL', 'Airtable', 'Google Sheets', 'Notion'],
      },
      {
        category: 'Infrastructure',
        items: ['Python', 'Node.js', 'Docker', 'Cloudflare Workers', 'AWS Lambda'],
      },
    ],
    approachHeading: 'How we approach automation',
    approach: [
      {
        n: '01',
        title: 'Map before we build',
        desc: 'We trace every manual step, find which ones are repetitive, and separate what needs AI intelligence from what just needs a reliable trigger.',
      },
      {
        n: '02',
        title: 'Prototype with real data',
        desc: 'We run the automation on a small slice of live data first, edge cases, malformed records, rate limits. Problems surface here, not in production.',
      },
      {
        n: '03',
        title: 'Build with observability',
        desc: 'Every workflow ships with logs, error handling, retry logic, and alerts. You see exactly what ran, what failed, and why, without digging through code.',
      },
      {
        n: '04',
        title: 'Hand over and document',
        desc: 'We write plain-English runbooks, record walkthrough videos, and train your team. You own it and can maintain it without us.',
      },
    ],
    outcomes: [
      { value: '8 hrs', label: 'saved per team member per week on average' },
      { value: '< 24 h', label: 'from scoping to first working prototype' },
      { value: '100%', label: 'audit trail on every automation run' },
    ],
    faq: [
      {
        q: 'Can you automate our specific tool?',
        a: 'If it has an API or a webhook, almost certainly yes. We have integrated 80+ platforms including HubSpot, Salesforce, Jira, Linear, Slack, Notion, Google Workspace, Shopify and more. Send us the tool name and we will confirm before the audit.',
      },
      {
        q: 'Do we actually need AI, or just regular automation?',
        a: 'Honest answer: most of the time, a well-built deterministic workflow is more reliable and cheaper than AI. We use AI where the task requires understanding ambiguous input, classifying emails, summarising documents, extracting fields from free text. Otherwise we keep it simple.',
      },
      {
        q: 'What happens when an automation breaks?',
        a: 'We build every workflow with error handling, retry logic and alerting as non-negotiables. When something fails you get a notification with full context, not a silent broken process. For critical workflows we also add human-in-the-loop approval steps.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'A single-workflow automation, say, syncing leads from a form to your CRM and triggering a Slack notification, can be live within a week. A full automation layer across multiple teams usually takes 4–8 weeks, depending on the number of workflows and integration complexity.',
      },
      {
        q: 'Who owns the automations after we launch?',
        a: 'You do. We hand over all workflow files, environment configs, and documentation. You can host on your own n8n or Make instance. We offer an optional retainer for monitoring and additions, but you are never dependent on us.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'AI Automation & Workflow Automation',
      provider: { '@type': 'Organization', name: 'Silver Axis', url: 'https://silveraxis.io' },
      serviceType: 'Business Process Automation',
      description:
        'Silver Axis builds reliable AI automations and workflow integrations using n8n, Make, Zapier and custom code.',
      areaServed: { '@type': 'Place', name: 'Worldwide' },
    },
  },
  {
    slug: 'web-mobile',
    number: '02',
    label: 'Web & Mobile',
    metaTitle: 'Web & Mobile App Development Services | Silver Axis',
    metaDescription:
      'Silver Axis builds fast, scalable web apps and native mobile apps in React, Next.js and React Native, with shared design systems, analytics and full App Store release support.',
    eyebrow: '02, Web & Mobile',
    title: 'Apps people actually keep using.',
    subtitle: 'Fast, maintainable, and built to grow with your users.',
    description:
      'Native mobile and web on one typed codebase, designed, built and instrumented for the long run. We handle the full stack from first wireframe to App Store submission.',
    image: '/assets/web-and-mobile.png',
    imageAlt: 'Web and mobile app designs on laptop and phone',
    imageFit: 'cover',
    bullets: [
      'Native iOS & Android, plus React / Next.js web',
      'Shared design system for consistent product experience',
      'Performance budgets, caching and analytics from day one',
      'App Store and Play Store release handled end to end',
    ],
    imageFirst: false,
    problemsHeading: 'You need us when…',
    problems: [
      {
        icon: 'arrow-trend-down',
        title: "Your current site isn't converting",
        desc: "Traffic is fine but leads aren't coming through. Speed issues, unclear CTAs, or a layout that lost visitors at the first scroll.",
      },
      {
        icon: 'mobile-screen',
        title: 'Mobile app retention is dropping',
        desc: 'Users install then churn. The app is slow, the UX is rough, or key journeys have too much friction to complete.',
      },
      {
        icon: 'triangle-exclamation',
        title: 'Development cycles have become unpredictable',
        desc: 'Every release is a fire drill. Technical debt is slowing the team down and bugs are surfacing after launch.',
      },
    ],
    techGroups: [
      {
        category: 'Frontend & Mobile',
        items: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript'],
      },
      {
        category: 'Styling & Design',
        items: ['Tailwind CSS', 'Framer Motion', 'Figma', 'Radix UI', 'CSS Modules'],
      },
      {
        category: 'Backend & API',
        items: ['Node.js', 'Express', 'Fastify', 'tRPC', 'GraphQL', 'REST'],
      },
      {
        category: 'Data & Infrastructure',
        items: ['PostgreSQL', 'Supabase', 'Redis', 'Prisma', 'Vercel', 'AWS', 'Docker'],
      },
    ],
    approachHeading: 'How we build it',
    approach: [
      {
        n: '01',
        title: 'Discover and define',
        desc: 'We audit existing products or competitors, map user journeys, and lock down scope. No surprises mid-build.',
      },
      {
        n: '02',
        title: 'Design with your system in mind',
        desc: 'We build a design system, tokens, components, spacing, so every screen looks intentional and stays consistent at scale.',
      },
      {
        n: '03',
        title: 'Build typed and test-covered',
        desc: 'TypeScript end-to-end, unit and integration tests, and CI/CD from week one. Every PR is reviewed against a performance budget.',
      },
      {
        n: '04',
        title: 'Ship and observe',
        desc: 'Analytics, error tracking and performance monitoring are wired in before launch. You know what is happening on day one.',
      },
    ],
    outcomes: [
      { value: '<2s', label: 'load time target on every project' },
      { value: '1 codebase', label: 'for iOS, Android and web where possible' },
      { value: '100%', label: 'projects with CI/CD from week one' },
    ],
    faq: [
      {
        q: 'Do you do iOS first, or Android?',
        a: 'We default to React Native with Expo, which ships both simultaneously from one codebase. If you need platform-specific native modules or have an existing codebase in Swift/Kotlin, we adjust. We typically recommend starting with the platform your target users prefer, which we assess in the discovery phase.',
      },
      {
        q: 'Do you handle design as well as development?',
        a: 'Yes. We design in Figma and build a full component library before writing production code. If you already have brand guidelines or a partial Figma file, we work from there.',
      },
      {
        q: 'Can you take over an existing codebase?',
        a: 'Yes. We do a code audit first, architecture, performance, test coverage, dependency health, and give you an honest read before we commit. We have taken over React, Next.js, React Native and legacy jQuery codebases.',
      },
      {
        q: 'Do you maintain the app after launch?',
        a: 'We offer an optional maintenance retainer covering OS update compatibility, dependency upgrades, performance monitoring and bug fixes. Most clients take a 3–6 month retainer after launch, then reassess.',
      },
      {
        q: 'How long does a typical web or mobile project take?',
        a: 'A focused marketing site or MVP takes 6–10 weeks. A full product, multi-role app with backend, CMS and integrations, typically runs 12–20 weeks. We give a fixed-scope estimate after the discovery session.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Web & Mobile App Development',
      provider: { '@type': 'Organization', name: 'Silver Axis', url: 'https://silveraxis.io' },
      serviceType: 'Software Development',
      description:
        'Silver Axis builds fast, scalable web apps and native mobile apps in React, Next.js and React Native.',
      areaServed: { '@type': 'Place', name: 'Worldwide' },
    },
  },
  {
    slug: 'custom-systems',
    number: '03',
    label: 'Custom Systems',
    metaTitle: 'Custom CRM, ERP & Internal Tools Development | Silver Axis',
    metaDescription:
      'Silver Axis builds custom CRMs, ERPs, dashboards and operational software tailored to your workflows, with clean data models, role-based access and full documentation.',
    eyebrow: '03, Custom Systems',
    title: 'Software shaped around how you work.',
    subtitle: 'Internal tools and systems that fit your operations, not the other way around.',
    description:
      'CRMs, ERPs, dashboards and internal tools built on a clean schema with proper access control. We design the data model around how your team actually operates, not a template you spend years bending to fit.',
    image: '/assets/crm-erp.png',
    imageAlt: 'Custom CRM and ERP dashboard on laptop and phone',
    imageFit: 'cover',
    bullets: [
      'Custom CRMs, ERPs and operational dashboards',
      'Role-based access, audit trails and clean data models',
      'Integrations with the systems you already run on',
      'Documented, handed over, and built to maintain',
    ],
    imageFirst: false,
    problemsHeading: 'We build custom systems when…',
    problems: [
      {
        icon: 'puzzle-piece',
        title: 'Off-the-shelf software forces workarounds',
        desc: 'Your team spends more time fighting the tool than using it. Every process has a workaround and no workaround is documented.',
      },
      {
        icon: 'table-columns',
        title: 'Spreadsheets are running critical operations',
        desc: 'Finance, inventory, project tracking or sales pipeline, all in files that break, get out of sync, and have no access control.',
      },
      {
        icon: 'database',
        title: 'No single source of truth',
        desc: 'Data lives in five places. Reports contradict each other. Decisions are made on stale numbers because nobody trusts the live data.',
      },
    ],
    techGroups: [
      {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'AG Grid'],
      },
      {
        category: 'Backend & API',
        items: ['Node.js', 'Fastify', 'REST APIs', 'GraphQL', 'tRPC', 'Prisma ORM'],
      },
      {
        category: 'Data & Storage',
        items: ['PostgreSQL', 'Redis', 'S3 / R2', 'ElasticSearch', 'Supabase'],
      },
      {
        category: 'Infrastructure & DevOps',
        items: ['Docker', 'AWS', 'GCP', 'GitHub Actions', 'Terraform'],
      },
    ],
    approachHeading: 'How we design and build your system',
    approach: [
      {
        n: '01',
        title: 'Deep-dive discovery',
        desc: 'We interview your team, map every workflow, and document the edge cases. The real requirements surface in the process, not months later.',
      },
      {
        n: '02',
        title: 'Data model first',
        desc: 'We design the schema before writing a line of UI. A clean, well-normalised data model prevents the technical debt that makes systems expensive to maintain.',
      },
      {
        n: '03',
        title: 'Build incrementally with real users',
        desc: 'We ship internal releases early, collect feedback from actual users on your team, and iterate. You are not waiting 6 months to see the first screen.',
      },
      {
        n: '04',
        title: 'Documented handover',
        desc: 'Full ER diagram, API documentation, deployment guide and a training session. Your team can extend it independently from day one.',
      },
    ],
    outcomes: [
      { value: 'Day 1', label: 'role-based access and audit trails from the start' },
      { value: '100%', label: 'projects delivered with full documentation' },
      { value: '3×', label: 'average reduction in manual data entry reported by clients' },
    ],
    faq: [
      {
        q: 'Can it integrate with the tools we already use?',
        a: 'Yes. We design the integration layer as part of the data model, not as an afterthought. Typical integrations include accounting tools (Xero, QuickBooks), communication tools (Slack, email), and cloud storage. If it has an API, we can connect it.',
      },
      {
        q: 'Who owns the code?',
        a: 'You do, unconditionally. On handover you receive the full repository, all environment configs, database access, and deployment instructions. We retain no vendor lock-in, no licence fees, no dependencies on our infrastructure.',
      },
      {
        q: 'Can you build on top of an existing system?',
        a: 'Yes, though we start with an architecture review. If the existing system has a clean enough foundation, we extend it. If it is too entangled to maintain, we will be honest about that and propose a migration path with no data loss.',
      },
      {
        q: 'How long does a custom system typically take?',
        a: 'A focused internal tool, say, a pipeline tracker or simple CRM, takes 6–10 weeks. A full ERP or multi-module operational system with reporting and integrations is typically 16–24 weeks. We scope each engagement after discovery.',
      },
      {
        q: 'Do you provide support after launch?',
        a: 'We offer a post-launch support period (30 days included) and optional ongoing retainers for feature additions, monitoring and maintenance. Most clients prefer a time-and-materials retainer rather than a fixed package.',
      },
    ],
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom CRM, ERP & Internal Tools Development',
      provider: { '@type': 'Organization', name: 'Silver Axis', url: 'https://silveraxis.io' },
      serviceType: 'Custom Software Development',
      description:
        'Silver Axis builds custom CRMs, ERPs, dashboards and internal tools with clean data models, role-based access and full documentation.',
      areaServed: { '@type': 'Place', name: 'Worldwide' },
    },
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICE_ITEMS.find((s) => s.slug === slug);
}
