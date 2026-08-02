import type { ServiceDetailContent } from '../types';
import { aiMl } from './ai-ml';
import { blockchain } from './blockchain';
import { cloudDevops } from './cloud-devops';
import { digitalMarketing } from './digital-marketing';
import { mobileApps } from './mobile-apps';
import { mvp } from './mvp';
import { qaAutomation } from './qa-automation';
import { softwareDevelopment } from './software-development';
import { uiUx } from './ui-ux';
import { webDevelopment } from './web-development';
import { PRACTICE_VISUALS } from './visuals';

const DRAFTS = [
  softwareDevelopment,
  webDevelopment,
  mobileApps,
  aiMl,
  blockchain,
  uiUx,
  mvp,
  digitalMarketing,
  cloudDevops,
  qaAutomation,
] as const;

function withVisual(draft: (typeof DRAFTS)[number]): ServiceDetailContent {
  const visual = PRACTICE_VISUALS[draft.slug];
  if (!visual) {
    throw new Error(`Missing visual config for practice: ${draft.slug}`);
  }
  return { ...draft, visual };
}

export const PRACTICE_DETAILS: ServiceDetailContent[] = DRAFTS.map(withVisual);

export const PRACTICE_SLUGS = PRACTICE_DETAILS.map((p) => p.slug);

export const PRACTICE_BY_SLUG: Record<string, ServiceDetailContent> = Object.fromEntries(
  PRACTICE_DETAILS.map((p) => [p.slug, p])
);

export function getPractice(slug: string): ServiceDetailContent | undefined {
  return PRACTICE_BY_SLUG[slug];
}

export function isPracticeSlug(slug: string): boolean {
  return slug in PRACTICE_BY_SLUG;
}
