import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyDetailPage } from '@/features/projects/CaseStudyDetailPage';
import { ALL_CASES, getCaseStudyBySlug } from '@/shared/content/case-studies';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_CASES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: 'Project' };
  return {
    title: cs.title,
    description: cs.desc,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!getCaseStudyBySlug(slug)) notFound();
  return <CaseStudyDetailPage slug={slug} />;
}
