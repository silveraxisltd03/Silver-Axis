'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  CycleIcon,
  DocumentIcon,
  LayersIcon,
  TargetIcon,
} from '@/shared/components/ui/icons';
import type { ServiceDetailContent, ServiceProcessIcon } from '../types';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  content: ServiceDetailContent;
}

const PROCESS_ICONS: Record<ServiceProcessIcon, typeof TargetIcon> = {
  target: TargetIcon,
  layers: LayersIcon,
  cycle: CycleIcon,
  document: DocumentIcon,
};

const DEFAULT_ICONS: ServiceProcessIcon[] = ['target', 'layers', 'cycle', 'document'];

export function ProcessSection({ content }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { process, visual } = content;
  const layout = visual.processLayout;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const header = section.querySelectorAll<HTMLElement>('[data-process-header]');
    const steps = section.querySelectorAll<HTMLElement>('[data-process-step]');
    const icons = section.querySelectorAll<HTMLElement>('[data-process-icon]');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top 74%', once: true },
      });

      if (header.length) {
        tl.fromTo(
          header,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power3.out' },
        );
      }

      tl.fromTo(
        steps,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' },
        '-=0.3',
      );

      if (icons.length) {
        tl.fromTo(
          icons,
          { opacity: 0, scale: 0.7, rotate: -12 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.55, stagger: 0.1, ease: 'back.out(1.6)' },
          '-=0.55',
        );
      }
    }, section);

    return () => ctx.revert();
  }, [process.steps, layout]);

  return (
    <section
      ref={sectionRef}
      className={`svc-process svc-process--${layout}`}
      aria-labelledby="svc-process-heading"
    >
      <div className="section-x container">
        <span className="svc-eyebrow svc-eyebrow--on-dark" data-process-header>
          {process.eyebrow}
        </span>
        <h2 id="svc-process-heading" className="svc-heading svc-heading--on-dark" data-process-header>
          {process.title}
        </h2>
        <ol className={`svc-process__steps svc-process__steps--${layout}`}>
          {process.steps.map((step, index) => {
            const iconKey = step.icon ?? DEFAULT_ICONS[index];
            const Icon = iconKey ? PROCESS_ICONS[iconKey] : null;

            return (
              <li key={step.number} className="svc-process__step" data-process-step>
                <div className="svc-process__top">
                  <span className="svc-process__num" aria-hidden="true">
                    {step.number}
                  </span>
                  {Icon ? (
                    <span className="svc-process__icon" data-process-icon aria-hidden="true">
                      <Icon className="svc-process__icon-svg" />
                    </span>
                  ) : null}
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
