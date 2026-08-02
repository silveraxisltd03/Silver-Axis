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

export function PrinciplesSection({ content }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { principles } = content;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const header = section.querySelectorAll<HTMLElement>('[data-principles-header]');
    const items = section.querySelectorAll<HTMLElement>('[data-principle-item]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      });

      if (header.length) {
        tl.fromTo(
          header,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        );
      }

      tl.fromTo(
        items,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.1, ease: 'power3.out' },
        '-=0.28',
      );
    }, section);

    return () => ctx.revert();
  }, [principles.items]);

  return (
    <section ref={sectionRef} className="svc-principles" aria-labelledby="svc-principles-heading">
      <div className="svc-principles__glow" aria-hidden="true" />
      <div className="section-x container svc-principles__inner">
        <header className="svc-principles__header">
          <span className="svc-eyebrow" data-principles-header>
            {principles.eyebrow}
          </span>
          <h2 id="svc-principles-heading" className="svc-heading svc-principles__heading" data-principles-header>
            {principles.title}
          </h2>
        </header>

        <ol className="svc-principles__grid">
          {principles.items.map((item, index) => (
            <li key={item.title} className="svc-principles__item" data-principle-item>
              <span className="svc-principles__watermark" aria-hidden="true">
                {padIndex(index)}
              </span>
              <h3 className="svc-principles__title">{item.title}</h3>
              <p className="svc-principles__body">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
