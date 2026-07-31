'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { AnimatedBackground } from '@/shared/components/ui/AnimatedBackground';
import {
  HERO_EYEBROW,
  HERO_HEADLINE,
  HERO_PRIMARY_CTA,
  HERO_PRIMARY_MICROCOPY,
  HERO_SECONDARY_CTA,
  HERO_SECONDARY_TEXT,
  type HeroSlide,
} from '../hero.data';

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
      <AnimatedBackground />
      <div className="home-hero__fade" aria-hidden="true" />
      <div className="home-hero__visual" aria-hidden="true">
        <img src="/assets/hero-impact-visual.png" alt="" />
      </div>

      <div className="home-hero__inner container">
        <div className="home-hero__content" ref={contentRef}>
          <div className="home-hero__eyebrow">{HERO_EYEBROW}</div>

          <h1 className="home-hero__headline">
            {HERO_HEADLINE.lead} <span className="home-hero__accent">{HERO_HEADLINE.accent}</span> {HERO_HEADLINE.tail}
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
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Slide ${i + 1}: ${s.subheadline.lead}${s.subheadline.accent}`}
                  className={`home-hero__dot${i === activeIndex ? ' home-hero__dot--active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}

          <p className="home-hero__paragraph">{slide.paragraph}</p>
        </div>

        <div className="home-hero__cta">
          <Link href={HERO_PRIMARY_CTA.href} className="btnW btn-hero-primary">
            {HERO_PRIMARY_CTA.label}
          </Link>
          <p className="home-hero__microcopy">{HERO_PRIMARY_MICROCOPY}</p>
          <p className="home-hero__secondary">
            {HERO_SECONDARY_TEXT}{' '}
            <Link href={HERO_SECONDARY_CTA.href} className="home-hero__secondary-link">
              {HERO_SECONDARY_CTA.label} →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
