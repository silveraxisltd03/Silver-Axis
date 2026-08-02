'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ROUTES } from '@/shared/constants/routes';
import { OPERATE_COMMITMENTS } from '../home.data';

gsap.registerPlugin(ScrollTrigger);

export function HowWeOperate() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const items = section.querySelectorAll<HTMLElement>('[data-operate-item]');
    const header = section.querySelector<HTMLElement>('[data-operate-header]');
    const foot = section.querySelector<HTMLElement>('[data-operate-foot]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 72%', once: true },
      });

      if (header) {
        tl.fromTo(header, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' });
      }

      tl.fromTo(
        items,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: 'power3.out' },
        '-=0.28',
      );

      if (foot) {
        tl.fromTo(foot, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="operate" ref={sectionRef} className="how-operate" aria-labelledby="how-operate-heading">
      <div className="section-x container how-operate__inner">
        <header className="how-operate__header" data-operate-header>
          <div className="how-operate__eyebrow-row">
            <span className="how-operate__bar" aria-hidden="true" />
            <span className="how-operate__eyebrow">How we operate</span>
          </div>
          <h2 id="how-operate-heading" className="how-operate__heading">
            Three commitments that stay true when delivery pressure is high.
          </h2>
        </header>

        <div className="how-operate__grid">
          {OPERATE_COMMITMENTS.map((item) => (
            <article key={item.n} className="how-operate__item" data-operate-item>
              <span className="how-operate__watermark" aria-hidden="true">
                {item.n}
              </span>
              <span className="how-operate__index">{item.n}</span>
              <h3 className="how-operate__title">{item.title}</h3>
              <p className="how-operate__desc">{item.desc}</p>
              <Link href={item.href} className="how-operate__more">
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="how-operate__foot" data-operate-foot>
          <Link href={ROUTES.projects} className="how-operate__outcomes">
            See delivery outcomes →
          </Link>
        </div>
      </div>
    </section>
  );
}
