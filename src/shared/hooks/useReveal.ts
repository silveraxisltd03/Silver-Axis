import { useEffect } from 'react';

// Scroll-reveal for any element with className "rv".
// Re-runs on each page mount so route changes re-arm the animation.
export function useReveal(): void {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('.rv'));
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            const d = en.target.getAttribute('data-rv-d');
            if (d) (en.target as HTMLElement).style.transitionDelay = d + 'ms';
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}
