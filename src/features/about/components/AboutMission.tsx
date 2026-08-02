'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT_MISSION } from '../about.data';

gsap.registerPlugin(ScrollTrigger);

export function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const header = section.querySelector<HTMLElement>('[data-mission-header]');
    const cells = section.querySelectorAll<HTMLElement>('[data-mission-cell]');

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
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: 'power3.out' },
        '-=0.2',
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-mission section-x"
      aria-labelledby="about-mission-heading"
    >
      <div className="about-mission__glow" aria-hidden="true" />
      <div className="container about-mission__inner">
        <div className="about-mission__header" data-mission-header>
          <div>
            <span className="about-mission__eyebrow">{ABOUT_MISSION.eyebrow}</span>
            <h2 id="about-mission-heading" className="about-mission__title">
              {ABOUT_MISSION.titleLead}{' '}
              <span className="about-mission__accent">{ABOUT_MISSION.titleAccent}</span>
            </h2>
          </div>
          <p className="about-mission__aside">{ABOUT_MISSION.aside}</p>
        </div>

        <div className="about-mission__panel">
          {ABOUT_MISSION.items.map((item) => (
            <article key={item.label} className="about-mission__card" data-mission-cell>
              <span className="about-mission__label">{item.label}</span>
              <h3 className="about-mission__item-title">{item.title}</h3>
              <p className="about-mission__item-body">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
