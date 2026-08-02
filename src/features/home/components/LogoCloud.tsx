'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { LOGO_CLOUD_ITEMS } from '../home.data';

export function LogoCloud() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const items = [...LOGO_CLOUD_ITEMS, ...LOGO_CLOUD_ITEMS];

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.fromTo(
        track,
        { xPercent: 0 },
        { xPercent: -50, duration: 32, ease: 'none', repeat: -1 }
      );
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="logo-cloud"
      aria-label="Brands we've worked with"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div className="logo-cloud__viewport">
        <div className="logo-cloud__track" ref={trackRef}>
          {items.map((logo, i) => (
            <div
              className="logo-cloud__item"
              key={`${logo.id}-${i}`}
              aria-hidden={i >= LOGO_CLOUD_ITEMS.length}
            >
              <img
                src={logo.src}
                alt={i < LOGO_CLOUD_ITEMS.length ? logo.alt : ''}
                width={160}
                height={64}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
