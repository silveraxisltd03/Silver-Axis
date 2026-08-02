import type { Metadata } from 'next';
import { ProjectsPage } from '@/features/projects/ProjectsPage';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Case studies and proof of work from Silver Axis—systems we audited, prototyped, and shipped.',
};

export default function Page() {
  return <ProjectsPage />;
}
