import type { ContactStep } from '@/shared/types';

// TODO: replace with your real Calendly link
export const CALENDLY_URL = 'https://calendly.com';

export const STEPS: ContactStep[] = [
  { n: '1', title: 'We talk', desc: 'A short call to understand your business and where the friction is.' },
  { n: '2', title: 'We audit', desc: 'We map your automation gaps and the engineering that fixes them.' },
  { n: '3', title: 'You get a plan', desc: 'A clear, honest recommendation — whether or not you build with us.' },
];
