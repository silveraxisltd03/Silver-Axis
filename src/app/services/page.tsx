import type { Metadata } from 'next';
import { ServicesPage } from '@/features/services/ServicesPage';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Silver Axis practices—custom software, web and mobile, AI and automation, UI/UX, cloud, QA, and more.',
};

export default function Page() {
  return <ServicesPage />;
}
