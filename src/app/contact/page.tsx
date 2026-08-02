import type { Metadata } from 'next';
import { ContactPage } from '@/features/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free audit with Silver Axis. Tell us where things are slow or breaking—no obligation.',
};

export default function Page() {
  return <ContactPage />;
}
