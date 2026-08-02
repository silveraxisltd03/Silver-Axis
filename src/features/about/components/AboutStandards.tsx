'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_STANDARDS } from '../about.data';

gsap.registerPlugin(ScrollTrigger);

export function AboutStandards() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const header = section.querySelector<HTMLElement>('[data-standards-header]');
    const cells = section.querySelectorAll<HTMLElement>('[data-standards-cell]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 74%', once: true },
      });

      if (header) {
        tl.fromTo(
          header,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
        );
      }

      tl.fromTo(
        cells,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out' },
        '-=0.22',
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-standards section-x"
      aria-labelledby="about-standards-heading"
    >
      <div className="container">
        <div className="about-standards__header" data-standards-header>
          <div>
            <div className="about-standards__eyebrow-row">
              <span className="about-standards__bar" aria-hidden="true" />
              <span className="about-standards__eyebrow">{ABOUT_STANDARDS.eyebrow}</span>
            </div>
            <h2 id="about-standards-heading" className="about-standards__title">
              {ABOUT_STANDARDS.titleLead}{' '}
              <span className="about-standards__accent">{ABOUT_STANDARDS.titleAccent}</span>
            </h2>
          </div>
          <p className="about-standards__aside">
            Five delivery standards that stay fixed when scope, timelines, or teams change.
          </p>
        </div>

        <div className="about-standards__panel">
          <ul className="about-standards__grid">
            {ABOUT_STANDARDS.items.map((item, index) => (
              <li key={item.title} className="about-standards__item" data-standards-cell>
                <span className="about-standards__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="about-standards__name">{item.title}</h3>
                <p className="about-standards__body">{item.body}</p>
              </li>
            ))}

            <li className="about-standards__cta" data-standards-cell>
              <h3 className="about-standards__cta-title">{ABOUT_STANDARDS.cta.title}</h3>
              <p className="about-standards__cta-body">{ABOUT_STANDARDS.cta.body}</p>
              <Link href={ABOUT_STANDARDS.cta.href} className="about-standards__cta-link">
                {ABOUT_STANDARDS.cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
