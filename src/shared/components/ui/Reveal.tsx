import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function Reveal({ children, delay = 0, className = '', style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
    if (!('IntersectionObserver' in window)) return true;
    return false;
  });

  useEffect(() => {
    if (visible) return;

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  const classes = ['reveal', visible ? 'reveal--visible' : '', className].filter(Boolean).join(' ');

  return (
    <div
      ref={ref}
      className={classes}
      style={{ ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style }}
    >
      {children}
    </div>
  );
}
