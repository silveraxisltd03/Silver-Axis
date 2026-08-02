import type { PracticeDraft } from '../types';
import { banner, insightPosts } from './_shared';

export const aiMl: PracticeDraft = {
  slug: 'ai-ml',
  crumb: 'AI / ML',
  meta: {
    title: 'AI & Machine Learning',
    description:
      'Practical AI and ML for production—agents, LLM integration, pipelines, and evaluation with oversight you can trust.',
  },
  hero: {
    eyebrow: 'AI & Machine Learning',
    title: 'Practical AI that automates work and surfaces decisions—not demos.',
    body: 'We integrate models, agents, and data pipelines into the workflows you already run, with evaluation and human oversight so the system stays trustworthy in production.',
    highlights: [
      { label: 'Focus', value: 'Production AI' },
      { label: 'Evaluation loops', value: 'Built-in' },
      { label: 'Ownership', value: 'Your data' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'LLM integration', body: 'Assistants and copilots wired into your tools with grounded context—not free-floating chat.' },
      { title: 'Agents & workflows', body: 'Multi-step automation with tool use, approvals, and clear failure paths.' },
      { title: 'Data pipelines', body: 'Ingestion, cleaning, and features that keep models fed with fresh truth.' },
      { title: 'Classical ML', body: 'Forecasting, classification, and ranking when classical models beat a prompt.' },
      { title: 'Evaluation', body: 'Offline tests and online monitors so quality does not silently drift.' },
      { title: 'Governance', body: 'Access, logging, and red-team checks appropriate to your risk.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Models and prompts should not be a black box vendor product.',
    body: 'Prompts, evaluation sets, pipelines, and deployment configs live in your repos. You keep the ability to swap providers, tighten guardrails, and prove what the system did.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams ready for AI that earns its keep.',
    columns: [
      [
        'Ops leaders drowning in repetitive document and ticket work',
        'Product teams adding copilots inside an existing SaaS',
        'Data teams productionizing notebooks that never left the laptop',
      ],
      [
        'Compliance-minded orgs that need audit trails on model use',
        'Founders validating an AI-native wedge carefully',
        'Enterprises consolidating scattered ChatGPT experiments',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in applied AI.',
    items: [
      { title: 'Workflow first', body: 'Start from the job to be done—then choose models, not the reverse.' },
      { title: 'Ground the model', body: 'Retrieval and tools beat hallucinated confidence every time.' },
      { title: 'Measure relentlessly', body: 'Golden sets and regression checks ship with the feature.' },
      { title: 'Humans stay in the loop', body: 'Approvals and escape hatches where mistakes are expensive.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From use case to monitored production.',
    steps: [
      { number: '01', title: 'Pick the wedge', body: 'One high-ROI workflow with clear success metrics and risk bounds.' },
      { number: '02', title: 'Prototype grounded', body: 'RAG, tools, and UX that show value without overpromising autonomy.' },
      { number: '03', title: 'Harden & evaluate', body: 'Guardrails, logging, cost controls, and regression suites.' },
      { number: '04', title: 'Operate & improve', body: 'Dashboards for quality, cost, and drift—plus a backlog to iterate.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'AI engineering for real operations.',
    body: 'We bridge data, models, and product UX so AI lands inside work—not beside it.',
    items: [
      'Use-case discovery & ROI framing',
      'LLM app architecture',
      'RAG & knowledge systems',
      'Agentic workflow design',
      'ML training & serving',
      'Evaluation frameworks',
      'Cost & latency tuning',
      'Security & access controls',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Pragmatic AI stack choices.',
    body: 'Provider-flexible designs so you are not trapped by a single API.',
    items: ['OpenAI / Anthropic', 'Azure OpenAI', 'LangChain / custom', 'Vector DBs', 'Python', 'FastAPI', 'Airflow / jobs', 'Observability'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'AI that removes real operational drag.',
    rows: [
      { label: 'Support copilots', body: 'Draft replies and suggest actions with citations to your knowledge base.' },
      { label: 'Document automation', body: 'Extract, classify, and route paperwork with human review queues.' },
      { label: 'Internal search', body: 'Company knowledge that answers with sources—not folklore Slack threads.' },
      { label: 'Forecasting & ranking', body: 'Classical ML when tabular prediction beats generative flair.' },
    ],
  },
  excellence: {
    eyebrow: 'Technical excellence',
    title: 'Trustworthy systems beat clever prompts.',
    items: [
      { title: 'Prompt as code', body: 'Versioned prompts with review and rollback.' },
      { title: 'Cost visibility', body: 'Per-feature token and latency budgets.' },
      { title: 'PII discipline', body: 'Redaction and retention policies by design.' },
      { title: 'Fallback paths', body: 'Graceful degradation when models fail or rate-limit.' },
    ],
  },
  faq: [
    {
      id: 'demo',
      question: 'How is this different from a ChatGPT wrapper?',
      answer:
        'We ground answers in your data, wire tools into real systems, add evaluation, and design UX with approvals. The goal is operational change—not a novelty chat box.',
    },
    {
      id: 'data',
      question: 'Where does our data live?',
      answer:
        'In your cloud and accounts whenever possible. We document what leaves the boundary for model providers and help you choose private or regional options when required.',
    },
    {
      id: 'roi',
      question: 'How do you choose what to automate first?',
      answer:
        'Volume, repetition, error cost, and data readiness. We kill weak ideas early and instrument the winners so ROI is visible.',
    },
    {
      id: 'team',
      question: 'Do we need a data science team already?',
      answer:
        'No. We can deliver an initial system and leave documentation so your engineers can maintain it—or we stay on as an embedded pod.',
    },
    {
      id: 'start',
      question: 'How do we start?',
      answer:
        'A short discovery on workflows and data access, then a scoped pilot with success metrics. Most pilots show signal within weeks—not quarters.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('AI'),
  },
  banner: banner('Bring us the workflow—we will map the AI that is worth building.'),
};
