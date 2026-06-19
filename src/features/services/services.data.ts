import type { NumberedProcessStep } from '@/shared/types';

export const PROCESS: NumberedProcessStep[] = [
  { n: '01', title: 'Audit', desc: 'We trace your workflows and split what needs AI from a straightforward engineering fix.' },
  { n: '02', title: 'Prototype', desc: 'We build a working model and stress the edge cases. Weak points surface here, cheaply.' },
  { n: '03', title: 'Build', desc: 'Typed, test-covered and modular, behind versioned APIs. Only as complex as it needs to be.' },
  { n: '04', title: 'Grow with it', desc: 'We layer on apps, services and dashboards on the same foundation — observable from day one.' },
];
