'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProcessStep } from '@/shared/types';

gsap.registerPlugin(ScrollTrigger);

interface ProcessShowcaseProps {
  steps: ProcessStep[];
  title: string;
}

export function ProcessShowcase({ steps, title }: ProcessShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const line = lineRef.current;
    const stepElements = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (!section || !intro || !line || !stepElements.length) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      stepElements.forEach((step) => step.classList.add('process-step--active'));
      return;
    }

    const activateStep = (activeIndex: number) => {
      stepElements.forEach((step, index) => {
        step.classList.toggle('process-step--active', index === activeIndex);
        step.classList.toggle('process-step--complete', index < activeIndex);
      });
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        intro.children,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: intro,
            start: 'top 78%',
            once: true,
          },
        },
      );

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stepElements[0],
            endTrigger: stepElements[stepElements.length - 1],
            start: 'center 62%',
            end: 'center 42%',
            scrub: 0.6,
          },
        },
      );

      stepElements.forEach((step, index) => {
        const content = step.querySelector<HTMLElement>('.process-step__content');
        if (!content) return;

        gsap.fromTo(
          content,
          {
            opacity: 0.16,
            x: index % 2 === 0 ? 42 : -42,
            y: 18,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 72%',
              end: 'center 54%',
              scrub: 0.6,
              onEnter: () => activateStep(index),
              onEnterBack: () => activateStep(index),
            },
          },
        );
      });

      activateStep(0);
    }, section);

    return () => ctx.revert();
  }, [steps]);

  return (
    <div ref={sectionRef} className="process-scroll">
      <div ref={introRef} className="process-scroll__intro container">
        <span className="process-scroll__eyebrow">Delivery path</span>
        <h2 className="process-scroll__title">{title}</h2>
        <p className="process-scroll__lead">
          Four clear phases take your idea from uncertainty to a dependable release—with decisions,
          ownership, and useful outputs at every step.
        </p>
        <span className="process-scroll__hint" aria-hidden="true">
          Scroll to explore
        </span>
      </div>

      <div className="process-timeline container">
        <div className="process-timeline__line" aria-hidden="true">
          <div ref={lineRef} className="process-timeline__line-active" />
        </div>

        {steps.map((step, index) => (
          <article
            key={step.title}
            ref={(element) => {
              stepRefs.current[index] = element;
            }}
            className={`process-step ${index % 2 === 0 ? 'process-step--right' : 'process-step--left'}`}
          >
            <div className="process-step__marker" aria-hidden="true">
              <div className="process-step__marker-inner">
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <span>{step.label}</span>
              </div>
            </div>

            <div className="process-step__content">
              <span className="process-step__eyebrow">
                Step {String(index + 1).padStart(2, '0')} · {step.label}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="process-step__deliverable">
                <span>You get</span>
                <p>{step.deliverable}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
