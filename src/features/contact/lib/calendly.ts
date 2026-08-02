'use client';

import { CALENDLY_URL } from '../contact.data';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function openCalendly(e?: { preventDefault: () => void }) {
  e?.preventDefault();
  if (typeof window === 'undefined') return;

  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    return;
  }

  window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
}
