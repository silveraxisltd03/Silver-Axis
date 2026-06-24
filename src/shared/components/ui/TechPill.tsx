import { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCode);

type IconEntry =
  | { local: string }
  | { slug: string; color: string };

const TECH_ICON_MAP: Record<string, IconEntry> = {
  // Automation
  'n8n':               { slug: 'n8n',            color: 'EA4B71' },
  'Make (Integromat)': { slug: 'make',            color: '6D00CC' },
  'Zapier':            { slug: 'zapier',          color: 'FF4A00' },
  'Activepieces':      { local: '/assets/icons/activepieces.png' },
  // AI
  'OpenAI GPT-4o':     { local: '/assets/icons/openai-icon.png' },
  'OpenAI API':        { local: '/assets/icons/openai-icon.png' },
  'Google Gemini':     { local: '/assets/icons/google-gemini-icon.png' },
  'LlamaIndex':        { local: '/assets/icons/llamaindex-icon.png' },
  'Anthropic Claude':  { slug: 'anthropic',       color: 'D97706' },
  'LangChain':         { slug: 'langchain',       color: '1C3C3C' },
  // Verification / enrichment
  'Hunter.io':         { slug: 'hunterio',        color: 'FF6E00' },
  // CRM / productivity
  'HubSpot CRM':       { slug: 'hubspot',         color: 'FF7A59' },
  'ClickUp':           { slug: 'clickup',         color: '7B68EE' },
  'GoHighLevel':       { local: '/assets/icons/ghl-icon.png' },
  'Airtable':          { slug: 'airtable',        color: '18BFFF' },
  'Google Sheets':     { slug: 'googlesheets',    color: '34A853' },
  'Google Drive':      { slug: 'googledrive',     color: '4285F4' },
  'Google Maps API':   { slug: 'googlemaps',      color: '4285F4' },
  'Notion':            { slug: 'notion',          color: '000000' },
  // Messaging
  'Slack':             { local: '/assets/icons/slack-icon.png' },
  'WhatsApp Business API': { slug: 'whatsapp', color: '25D366' },
  // Auth
  'JWT Authentication':{ slug: 'jsonwebtokens',   color: '000000' },
  'Firebase':          { local: '/assets/icons/firebase.png' },
  // Data
  'PostgreSQL':        { slug: 'postgresql',      color: '4169E1' },
  'Redis':             { slug: 'redis',           color: 'FF4438' },
  'Supabase':          { slug: 'supabase',        color: '3FCF8E' },
  'ElasticSearch':     { slug: 'elasticsearch',   color: '005571' },
  // Languages / runtimes
  'Python':            { slug: 'python',          color: '3776AB' },
  'Node.js':           { slug: 'nodedotjs',       color: '5FA04E' },
  'TypeScript':        { slug: 'typescript',      color: '3178C6' },
  // Infra
  'Docker':            { slug: 'docker',          color: '2496ED' },
  'Cloudflare Workers':{ slug: 'cloudflare',      color: 'F38020' },
  'AWS Lambda':        { local: '/assets/icons/aws-lambda.svg' },
  'AWS':               { slug: 'amazonaws',       color: 'FF9900' },
  'GCP':               { slug: 'googlecloud',     color: '4285F4' },
  'GitHub Actions':    { slug: 'githubactions',   color: '2088FF' },
  'Terraform':         { slug: 'terraform',       color: '844FBA' },
  // Frontend / mobile
  'React':             { slug: 'react',           color: '61DAFB' },
  'React Native':      { slug: 'react',           color: '61DAFB' },
  'Next.js':           { slug: 'nextdotjs',       color: '000000' },
  'Expo':              { slug: 'expo',            color: '000020' },
  'Tailwind CSS':      { slug: 'tailwindcss',     color: '06B6D4' },
  'Framer Motion':     { slug: 'framer',          color: '0055FF' },
  'Figma':             { slug: 'figma',           color: 'F24E1E' },
  // Backend / API
  'Express':           { slug: 'express',         color: '000000' },
  'Fastify':           { slug: 'fastify',         color: '000000' },
  'GraphQL':           { slug: 'graphql',         color: 'E10098' },
  'tRPC':              { slug: 'trpc',            color: '2596BE' },
  'Prisma':            { slug: 'prisma',          color: '2D3748' },
  'Prisma ORM':        { slug: 'prisma',          color: '2D3748' },
  // Deployment
  'Vercel':            { slug: 'vercel',          color: '000000' },
};

function TechIcon({ name }: { name: string }) {
  const entry = TECH_ICON_MAP[name];
  const [imgError, setImgError] = useState(false);

  if (!entry || imgError) {
    return <FontAwesomeIcon icon={faCode} className="tech-pill__icon-fa" aria-hidden="true" />;
  }

  const src = 'local' in entry
    ? entry.local
    : `https://cdn.simpleicons.org/${entry.slug}/${entry.color}`;

  return (
    <img
      src={src}
      alt=""
      className="tech-pill__icon-img"
      width={18}
      height={18}
      loading="lazy"
      aria-hidden="true"
      onError={() => setImgError(true)}
    />
  );
}

interface TechPillProps {
  name: string;
  size?: 'sm' | 'md';
}

export function TechPill({ name, size = 'md' }: TechPillProps) {
  return (
    <span className={`tech-pill tech-pill--${size}`}>
      <TechIcon name={name} />
      {name}
    </span>
  );
}
