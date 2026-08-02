'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from '@/shared/components/ui/icons';
import { ROUTES, serviceDetailPath } from '@/shared/constants/routes';
import { openCalendly } from '@/features/contact/lib/calendly';
import { SERVICE_TILES } from '../home.data';

gsap.registerPlugin(ScrollTrigger);

export function ServicesShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const cards = section.querySelectorAll<HTMLElement>('[data-service-card]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%', once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="services-showcase">
      <div className="section-x container">
        <span className="services-showcase__eyebrow">Our Services</span>
        <h2 className="section-heading services-showcase__heading">
          Built to move your business forward.
        </h2>

        <div className="services-showcase__grid">
          {SERVICE_TILES.map((tile) => (
            <Link key={tile.slug} href={serviceDetailPath(tile.slug)} className="service-card" data-service-card>
              <img src={tile.image} alt={tile.imageAlt} className="service-card__image" loading="lazy" />
              <span className="service-card__scrim" aria-hidden="true" />
              <span className="service-card__title">{tile.title}</span>
            </Link>
          ))}
        </div>

        <div className="services-showcase__cta">
          <Link href={ROUTES.services} className="services-showcase__more">
            View More Services
            <span className="services-showcase__more-icon" aria-hidden="true">
              <ArrowDown />
            </span>
          </Link>
        </div>
      </div>

      <button type="button" onClick={openCalendly} className="services-showcase__side-cta">
        Let&rsquo;s Talk Business
      </button>
    </section>
  );
}
