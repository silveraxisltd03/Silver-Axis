'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import type { Quote } from '@/shared/types';

interface Props {
  quotes: Quote[];
}

export function TestimonialsMarquee({ quotes }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const items = [...quotes, ...quotes];

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.fromTo(
        track,
        { xPercent: 0 },
        { xPercent: -50, duration: 38, ease: 'none', repeat: -1 }
      );
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="testimonials-marquee"
      aria-label="Client testimonials"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
    >
      <div className="testimonials-marquee__track" ref={trackRef}>
        {items.map((q, i) => (
          <article className="testimonial-card" key={i} aria-hidden={i >= quotes.length}>
            <span className="testimonial-card__quote" aria-hidden="true">&ldquo;</span>
            <p className="testimonial-card__text">{q.text}</p>
            <div className="testimonial-card__footer">
              {q.countryCode && (
                <img
                  src={`https://flagcdn.com/24x18/${q.countryCode}.png`}
                  width={24}
                  height={18}
                  alt={q.country ?? q.countryCode}
                  className="testimonial-card__flag"
                  loading="lazy"
                />
              )}
              <div className="testimonial-card__person">
                <div className="testimonial-card__name">{q.name}</div>
                <div className="testimonial-card__role">
                  {[q.role, q.country].filter(Boolean).join(' · ')}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
