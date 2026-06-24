import { ENV } from '@/shared/config/env';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function openCalendly(e: React.MouseEvent) {
  e.preventDefault();
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: ENV.calendly });
  } else {
    window.open(ENV.calendly, '_blank', 'noopener,noreferrer');
  }
}
