import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetailPage } from '@/features/services/detail/ServiceDetailPage';
import { getPractice, PRACTICE_SLUGS } from '@/features/services/detail/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRACTICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return { title: 'Service' };

  return {
    title: practice.meta.title,
    description: practice.meta.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  return <ServiceDetailPage content={practice} />;
}
