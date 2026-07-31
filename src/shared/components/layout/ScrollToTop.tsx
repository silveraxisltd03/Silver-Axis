'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    const id = hash.replace('#', '');
    const delays = [0, 100, 250, 500, 900, 1500];
    const timers: ReturnType<typeof setTimeout>[] = [];
    let done = false;

    const tryScroll = () => {
      if (done) return;
      const el = document.getElementById(id);
      if (el) {
        done = true;
        timers.forEach(clearTimeout);
        // Offset for fixed navbar
        const nav = document.querySelector('.nav');
        const navH = nav ? nav.getBoundingClientRect().height : 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    delays.forEach((d) => timers.push(setTimeout(tryScroll, d)));

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return null;
}
