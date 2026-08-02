'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from '@/shared/components/ui/icons';
import { FEATURED_SECTION, SERVICES_LIST } from '../services.data';

export function FeaturedPractices() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = SERVICES_LIST.length;
  const practice = SERVICES_LIST[index];
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    setIndex(((next % total) + total) % total);
  }, [total]);

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || paused) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 7000);

    return () => window.clearInterval(id);
  }, [total, paused]);

  return (
    <section
      id="practices"
      className="featured-practices section-x"
      aria-labelledby="featured-practices-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="featured-practices__header">
          <div>
            <div className="featured-practices__eyebrow-row">
              <span className="featured-practices__bar" aria-hidden="true" />
              <span className="featured-practices__eyebrow">{FEATURED_SECTION.eyebrow}</span>
            </div>
            <h2 id="featured-practices-heading" className="section-heading featured-practices__title">
              {FEATURED_SECTION.title}
            </h2>
          </div>

          <div className="featured-practices__controls" role="group" aria-label="Practice slides">
            <p className="featured-practices__counter" aria-live="polite">
              {String(index + 1).padStart(2, '0')}
              <span aria-hidden="true"> / </span>
              {String(total).padStart(2, '0')}
            </p>
            <button type="button" className="featured-practices__nav" onClick={goPrev} aria-label="Previous practice">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" className="featured-practices__nav" onClick={goNext} aria-label="Next practice">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <article
          className="featured-practices__card"
          key={practice.id}
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(delta) < 48) return;
            if (delta > 0) goPrev();
            else goNext();
          }}
        >
          <div className="featured-practices__media">
            <img src={practice.image} alt={practice.imageAlt} loading="lazy" />
          </div>
          <div className="featured-practices__content">
            <p className="featured-practices__label">Practice {practice.number}</p>
            <h3 className="featured-practices__name">{practice.title}</h3>
            <p className="featured-practices__desc">{practice.summary}</p>
            <div className="featured-practices__footer">
              <Link href={practice.href} className="featured-practices__link">
                View service
                <ArrowRight />
              </Link>
            </div>
          </div>
        </article>

        <div className="featured-practices__dots" role="tablist" aria-label="Select practice">
          {SERVICES_LIST.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${item.title}`}
              className={`featured-practices__dot${i === index ? ' is-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
