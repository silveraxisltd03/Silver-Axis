import { forwardRef, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { ProcessStep } from '@/shared/types';

gsap.registerPlugin(ScrollTrigger);

interface ProcessShowcaseProps {
  steps: ProcessStep[];
  title: string;
}

const TRACK_PATH =
  'M 450 36 H 700 A 132 132 0 0 1 700 264 H 200 A 132 132 0 0 1 200 36 H 450';

const MARKER_POINTS = [
  { cx: 450, cy: 36 },
  { cx: 832, cy: 150 },
  { cx: 450, cy: 264 },
  { cx: 68, cy: 150 },
];

type CardSlot = 'top' | 'right' | 'bottom' | 'left';

function getNavOffset() {
  const nav = document.querySelector('.nav');
  return nav ? Math.ceil(nav.getBoundingClientRect().height) + 12 : 92;
}

function setStepState(
  progress: number,
  stepCount: number,
  cards: (HTMLElement | null)[],
  markers: (SVGGElement | null)[],
) {
  const idx =
    progress >= 0.995
      ? stepCount - 1
      : Math.min(stepCount - 1, Math.floor(progress * stepCount));

  cards.forEach((el, i) => {
    if (!el) return;
    el.classList.toggle('process-loop__card--active', i === idx);
    el.classList.toggle('process-loop__card--done', i < idx);
  });

  markers.forEach((el, i) => {
    if (!el) return;
    el.classList.toggle('process-loop__marker--active', i === idx);
    el.classList.toggle('process-loop__marker--done', i < idx || progress >= 0.995);
  });
}

export function ProcessShowcase({ steps, title }: ProcessShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const markerRefs = useRef<(SVGGElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const path = pathRef.current;
    if (!section || !pin || !path) return;

    const desktopMq = window.matchMedia('(min-width: 769px)');
    const reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    let ctx: gsap.Context | undefined;

    const build = () => {
      ctx?.revert();

      ctx = gsap.context(() => {
        if (!desktopMq.matches) return;

        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.set(cardRefs.current.filter(Boolean), { opacity: 0.42, y: 10 });

        if (reducedMq.matches) {
          gsap.set(path, { strokeDashoffset: 0 });
          gsap.set(cardRefs.current.filter(Boolean), { opacity: 1, y: 0 });
          setStepState(1, steps.length, cardRefs.current, markerRefs.current);
          return;
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: () => `top top+=${getNavOffset()}`,
            end: `+=${steps.length * 36}%`,
            pin,
            pinSpacing: true,
            scrub: 0.85,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate(self) {
              setStepState(self.progress, steps.length, cardRefs.current, markerRefs.current);
            },
          },
        });

        tl.to(path, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0);

        steps.forEach((_, i) => {
          const card = cardRefs.current[i];
          if (!card) return;

          const enterAt = i / steps.length;
          const exitAt = (i + 1) / steps.length;

          tl.fromTo(
            card,
            { opacity: 0.42, y: 10 },
            { opacity: 1, y: 0, ease: 'power2.out', duration: 0.14 },
            enterAt,
          );

          if (i < steps.length - 1) {
            tl.to(card, { opacity: 0.55, y: 0, ease: 'power2.in', duration: 0.1 }, exitAt - 0.04);
          }
        });

        setStepState(0, steps.length, cardRefs.current, markerRefs.current);
      }, section);

      ScrollTrigger.refresh();
    };

    build();

    const onChange = () => build();
    const onResize = () => ScrollTrigger.refresh();

    desktopMq.addEventListener('change', onChange);
    reducedMq.addEventListener('change', onChange);
    window.addEventListener('resize', onResize);

    return () => {
      desktopMq.removeEventListener('change', onChange);
      reducedMq.removeEventListener('change', onChange);
      window.removeEventListener('resize', onResize);
      ctx?.revert();
    };
  }, [steps]);

  return (
    <div ref={sectionRef} className="process-scroll">
      <div className="process-scroll__intro">
        <h2 className="process-loop-section__title">{title}</h2>
      </div>

      <div ref={pinRef} className="process-scroll__pin">
        <div className="process-loop-section">
          <div className="process-loop process-loop--desktop">
            <div className="process-loop__card-slot process-loop__card-slot--top">
              <ProcessCard
                ref={(el) => { cardRefs.current[0] = el; }}
                step={steps[0]}
                index={0}
                slot="top"
              />
            </div>
            <div className="process-loop__card-slot process-loop__card-slot--left">
              <ProcessCard
                ref={(el) => { cardRefs.current[3] = el; }}
                step={steps[3]}
                index={3}
                slot="left"
              />
            </div>

            <div className="process-loop__track-wrap">
              <svg className="process-loop__svg" viewBox="0 0 900 300" aria-hidden="true">
                <defs>
                  <linearGradient id="process-track-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0b1020" />
                    <stop offset="45%" stopColor="#142d6e" />
                    <stop offset="100%" stopColor="#2a6bff" />
                  </linearGradient>
                  <filter id="process-track-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  className="process-loop__track-bg"
                  d={TRACK_PATH}
                  fill="none"
                  strokeWidth="30"
                  strokeLinecap="round"
                />

                <path
                  ref={pathRef}
                  className="process-loop__track-active"
                  d={TRACK_PATH}
                  fill="none"
                  stroke="url(#process-track-gradient)"
                  strokeWidth="30"
                  strokeLinecap="round"
                  filter="url(#process-track-glow)"
                />

                {MARKER_POINTS.map((pt, i) => (
                  <g
                    key={steps[i].title}
                    ref={(el) => { markerRefs.current[i] = el; }}
                    className="process-loop__marker"
                  >
                    <circle className="process-loop__marker-ring" cx={pt.cx} cy={pt.cy} r="22" />
                    <circle className="process-loop__marker-dot" cx={pt.cx} cy={pt.cy} r="13" />
                    <text
                      className="process-loop__marker-num"
                      x={pt.cx}
                      y={pt.cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                    >
                      {i + 1}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="process-loop__card-slot process-loop__card-slot--right">
              <ProcessCard
                ref={(el) => { cardRefs.current[1] = el; }}
                step={steps[1]}
                index={1}
                slot="right"
              />
            </div>
            <div className="process-loop__card-slot process-loop__card-slot--bottom">
              <ProcessCard
                ref={(el) => { cardRefs.current[2] = el; }}
                step={steps[2]}
                index={2}
                slot="bottom"
              />
            </div>
          </div>

          <p className="process-scroll__hint" aria-hidden="true">
            Scroll to walk through the process
          </p>
        </div>

        <div className="process-loop-mobile">
          {steps.map((step, i) => (
            <div key={step.title} className="process-loop-mobile__item">
              <span className="process-loop-mobile__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="process-loop-mobile__title">{step.title}</h3>
                <p className="process-loop-mobile__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProcessCard = forwardRef<
  HTMLElement,
  { step: ProcessStep; index: number; slot: CardSlot }
>(function ProcessCard({ step, index, slot }, ref) {
  return (
    <article ref={ref} className={`process-loop__card process-loop__card--${slot}`}>
      <span className="process-loop__card-num">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="process-loop__card-title">{step.title}</h3>
      <p className="process-loop__card-desc">{step.desc}</p>
    </article>
  );
});
