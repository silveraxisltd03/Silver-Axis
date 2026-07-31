import type { Metadata } from 'next';
import { HomePage } from '@/features/home/HomePage';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Placeholder homepage description, replace with real copy.',
};

export default function Page() {
  return <HomePage />;
}
