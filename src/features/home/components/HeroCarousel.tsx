'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { AnimatedBackground } from '@/shared/components/ui/AnimatedBackground';
import type { HeroSlide } from '../hero.data';

const SLIDE_DURATION = 6500;

interface HeroCarouselProps {
  slides: HeroSlide[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || slides.length < 2) return;

    const id = setInterval(() => {
      if (pausedRef.current) return;
      setActiveIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(id);
  }, [slides.length]);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    gsap.fromTo(el, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
  }, [activeIndex]);

  const slide = slides[activeIndex];
  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  return (
    <section
      id="hero"
      className="home-hero"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <AnimatedBackground variant="network" className="home-hero__bg" />
      <div className="home-hero__fade" aria-hidden="true" />

      <div className="home-hero__inner container">
        <div className="home-hero__content" ref={contentRef}>
          <div className="home-hero__eyebrow">{slide.eyebrow}</div>

          <h1 className="home-hero__headline">
            {slide.headline.lead} <span className="home-hero__accent">{slide.headline.accent}</span>
          </h1>

          <div className="home-hero__divider" aria-hidden="true" />

          <p className="home-hero__sub">
            {slide.subheadline.lead}
            <span className="home-hero__accent">{slide.subheadline.accent}</span>
          </p>

          {slides.length > 1 && (
            <div className="home-hero__dots" role="tablist" aria-label="Hero slides">
              {slides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                  className={`home-hero__dot${i === activeIndex ? ' home-hero__dot--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}

          <p className="home-hero__paragraph">{slide.paragraph}</p>
        </div>

        <div className="home-hero__cta">
          <Link href={slide.primaryCta.href} className="btnW btn-hero-primary">
            {slide.primaryCta.label}
          </Link>
          <p className="home-hero__microcopy">{slide.primaryMicrocopy}</p>
          <p className="home-hero__secondary">
            {slide.secondaryText}{' '}
            <Link href={slide.secondaryCta.href} className="home-hero__secondary-link">
              {slide.secondaryCta.label} →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
