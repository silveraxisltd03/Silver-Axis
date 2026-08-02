import type { Metadata } from 'next';
import { AboutPage } from '@/features/about/AboutPage';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Silver Axis is a product and engineering studio in Pakistan. Clear scope, visible decisions, and software teams can own after handoff.',
};

export default function Page() {
  return <AboutPage />;
}
