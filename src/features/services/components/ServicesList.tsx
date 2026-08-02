'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRight } from '@/shared/components/ui/icons';
import { SERVICES_CAPABILITIES, SERVICES_LIST, type ServiceItem } from '../services.data';

const HOVER_ACCENT = '#2a6bff';
const IDLE_NAVY = '#0b1020';
const IDLE_MUTED = '#6b7488';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function rowTargets(row: HTMLElement) {
  return {
    bar: row.querySelector<HTMLElement>('[data-row-bar]'),
    num: row.querySelector<HTMLElement>('[data-row-num]'),
    name: row.querySelector<HTMLElement>('[data-row-name]'),
    arrow: row.querySelector<HTMLElement>('[data-row-arrow]'),
    thumb: row.querySelector<HTMLElement>('[data-row-thumb]'),
    meta: row.querySelector<HTMLElement>('[data-row-meta]'),
  };
}

function killRowTweens(targets: ReturnType<typeof rowTargets>) {
  Object.values(targets).forEach((el) => {
    if (el) gsap.killTweensOf(el);
  });
}

function animateRowEnter(row: HTMLElement) {
  const targets = rowTargets(row);
  const { bar, num, name, arrow, thumb, meta } = targets;
  killRowTweens(targets);

  if (prefersReducedMotion()) {
    gsap.set([num, name, arrow].filter(Boolean), { color: HOVER_ACCENT });
    if (bar) gsap.set(bar, { scaleY: 1 });
    return;
  }

  const tl = gsap.timeline({ defaults: { duration: 0.38, ease: 'power2.out' } });

  if (bar) tl.to(bar, { scaleY: 1, duration: 0.32, ease: 'power3.out' }, 0);
  if (num) tl.to(num, { color: HOVER_ACCENT }, 0);
  if (name) tl.to(name, { color: HOVER_ACCENT }, 0);
  if (arrow) tl.to(arrow, { color: HOVER_ACCENT, x: 6 }, 0);
  if (meta) tl.to(meta, { x: 6 }, 0);
  if (thumb) tl.to(thumb, { scale: 1.04 }, 0);
}

function animateRowLeave(row: HTMLElement) {
  const targets = rowTargets(row);
  const { bar, num, name, arrow, thumb, meta } = targets;
  killRowTweens(targets);

  if (prefersReducedMotion()) {
    gsap.set(num, { color: IDLE_MUTED });
    gsap.set([name, arrow].filter(Boolean), { color: IDLE_NAVY });
    if (bar) gsap.set(bar, { scaleY: 0 });
    return;
  }

  const tl = gsap.timeline({ defaults: { duration: 0.32, ease: 'power2.inOut' } });

  if (bar) tl.to(bar, { scaleY: 0, duration: 0.26, ease: 'power2.in' }, 0);
  if (num) tl.to(num, { color: IDLE_MUTED }, 0);
  if (name) tl.to(name, { color: IDLE_NAVY }, 0);
  if (arrow) tl.to(arrow, { color: IDLE_NAVY, x: 0 }, 0);
  if (meta) tl.to(meta, { x: 0 }, 0);
  if (thumb) tl.to(thumb, { scale: 1 }, 0);
}

function ServiceRow({ service }: { service: ServiceItem }) {
  const rowRef = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={rowRef}
      id={service.id}
      className="services-list__row"
      onMouseEnter={() => {
        if (rowRef.current) animateRowEnter(rowRef.current);
      }}
      onMouseLeave={() => {
        if (rowRef.current) animateRowLeave(rowRef.current);
      }}
      onFocusCapture={() => {
        if (rowRef.current) animateRowEnter(rowRef.current);
      }}
      onBlurCapture={(e) => {
        if (!rowRef.current) return;
        if (rowRef.current.contains(e.relatedTarget as Node | null)) return;
        animateRowLeave(rowRef.current);
      }}
    >
      <Link href={service.href} className="services-list__link">
        <span className="services-list__bar" data-row-bar aria-hidden="true" />
        <span className="services-list__num" data-row-num>
          {service.number}
        </span>
        <span className="services-list__thumb" data-row-thumb>
          <img src={service.image} alt="" loading="lazy" />
        </span>
        <span className="services-list__meta" data-row-meta>
          <span className="services-list__name" data-row-name>
            {service.title}
          </span>
          <span className="services-list__summary">{service.summary}</span>
          <span className="services-list__tags">
            {service.tags.map((tag) => (
              <span key={tag} className="services-list__tag">
                {tag}
              </span>
            ))}
          </span>
        </span>
        <span className="services-list__arrow" data-row-arrow aria-hidden="true">
          <ArrowRight />
        </span>
      </Link>
    </li>
  );
}

export function ServicesList() {
  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace(/^#/, '');
      if (!id) return;
      if (SERVICES_LIST.some((row) => row.id === id)) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  return (
    <section id="capabilities" className="services-list section-x" aria-labelledby="services-list-heading">
      <div className="container">
        <header className="services-list__intro">
          <span className="services-list__eyebrow">{SERVICES_CAPABILITIES.eyebrow}</span>
          <h2 id="services-list-heading" className="section-heading services-list__title">
            {SERVICES_CAPABILITIES.title}
          </h2>
          <p className="services-list__body">{SERVICES_CAPABILITIES.body}</p>
        </header>

        <ul className="services-list__rows">
          {SERVICES_LIST.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </ul>
      </div>
    </section>
  );
}
