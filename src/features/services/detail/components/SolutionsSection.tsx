'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ServiceDetailContent } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  content: ServiceDetailContent;
}

function padIndex(index: number) {
  return String(index + 1).padStart(2, '0');
}

export function SolutionsSection({ content }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { solutions } = content;

  useLayoutEffect(() => {
    if (!solutions) return;
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const header = section.querySelectorAll<HTMLElement>('[data-solutions-header]');
    const cards = section.querySelectorAll<HTMLElement>('[data-solutions-card]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 74%', once: true },
      });

      if (header.length) {
        tl.fromTo(
          header,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        );
      }

      tl.fromTo(
        cards,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' },
        '-=0.25',
      );
    }, section);

    return () => ctx.revert();
  }, [solutions]);

  if (!solutions) return null;

  return (
    <section ref={sectionRef} className="svc-solutions" aria-labelledby="svc-solutions-heading">
      <div className="svc-solutions__atmosphere" aria-hidden="true" />
      <div className="section-x container svc-solutions__inner">
        <header className="svc-solutions__header">
          <div className="svc-solutions__eyebrow-row" data-solutions-header>
            <span className="svc-solutions__bar" aria-hidden="true" />
            <span className="svc-eyebrow">{solutions.eyebrow}</span>
          </div>
          <h2 id="svc-solutions-heading" className="svc-heading svc-solutions__heading" data-solutions-header>
            {solutions.title}
          </h2>
        </header>

        <ul className="svc-solutions__grid">
          {solutions.rows.map((row, index) => (
            <li key={row.label} className="svc-solutions__card" data-solutions-card>
              <span className="svc-solutions__watermark" aria-hidden="true">
                {padIndex(index)}
              </span>
              <h3 className="svc-solutions__title">{row.label}</h3>
              <p className="svc-solutions__body">{row.body}</p>
              <span className="svc-solutions__accent" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
