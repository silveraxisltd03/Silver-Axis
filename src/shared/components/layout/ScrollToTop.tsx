import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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
  }, [pathname, hash]);

  return null;
}
