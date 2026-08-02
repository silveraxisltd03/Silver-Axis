import { ROUTES } from '@/shared/constants/routes';
import { BLOG_POSTS } from '@/shared/content/blog';
import type { ServiceDetailContent, ServiceInsight } from '../types';

const DATES = ['Mar 12, 2026', 'Feb 28, 2026', 'Jan 18, 2026'] as const;

export function insightPosts(category: string, count = 3): ServiceInsight[] {
  return BLOG_POSTS.slice(0, count).map((post, i) => ({
    ...post,
    category,
    date: DATES[i] ?? '',
  }));
}

export function banner(title: string, ctaLabel = 'Start a conversation'): ServiceDetailContent['banner'] {
  return { title, ctaLabel, href: ROUTES.contact };
}
