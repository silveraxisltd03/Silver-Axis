'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import type { ServiceDetailContent } from '../types';

interface SectionProps {
  content: ServiceDetailContent;
}

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const ICON_KEYWORDS: [string, string][] = [
  ['react native', icon('react')],
  ['next.js', icon('nextdotjs')],
  ['react', icon('react')],
  ['node', icon('nodedotjs')],
  ['postgresql', icon('postgresql')],
  ['graphql', icon('graphql')],
  ['typescript', icon('typescript')],
  ['aws', icon('amazonaws')],
  ['azure', icon('microsoftazure')],
  ['docker', icon('docker')],
  ['kubernetes', icon('kubernetes')],
  ['terraform', icon('terraform')],
  ['grafana', icon('grafana')],
  ['datadog', icon('datadog')],
  ['vault', icon('vault')],
  ['playwright', icon('playwright')],
  ['cypress', icon('cypress')],
  ['vitest', icon('vitest')],
  ['jest', icon('jest')],
  ['pytest', icon('pytest')],
  ['k6', icon('k6')],
  ['swift', icon('swift')],
  ['kotlin', icon('kotlin')],
  ['flutter', icon('flutter')],
  ['firebase', icon('firebase')],
  ['fastlane', icon('fastlane')],
  ['ethereum', icon('ethereum')],
  ['solidity', icon('solidity')],
  ['openzeppelin', icon('openzeppelin')],
  ['walletconnect', icon('walletconnect')],
  ['openai', icon('openai')],
  ['anthropic', icon('anthropic')],
  ['python', icon('python')],
  ['fastapi', icon('fastapi')],
  ['stripe', icon('stripe')],
  ['vercel', icon('vercel')],
  ['posthog', icon('posthog')],
  ['figjam', icon('figma')],
  ['figma', icon('figma')],
  ['storybook', icon('storybook')],
  ['notion', icon('notion')],
  ['hubspot', icon('hubspot')],
  ['hotjar', icon('hotjar')],
  ['segment', icon('segment')],
  ['gtm', icon('googletagmanager')],
  ['lighthouse', icon('lighthouse')],
  ['css', icon('css3')],
  ['github actions', icon('githubactions')],
];

const FALLBACK_ICON = icon('checkmarx');

function resolveIcon(label: string): string {
  const lower = label.toLowerCase();
  const match = ICON_KEYWORDS.find(([keyword]) => lower.includes(keyword));
  return match ? match[1] : FALLBACK_ICON;
}

function splitRows<T>(items: T[], rows: number): T[][] {
  const out: T[][] = Array.from({ length: rows }, () => []);
  items.forEach((item, i) => out[i % rows].push(item));
  return out;
}

export function StackSection({ content }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { stack } = content;
  const rows = stack ? splitRows(stack.items, 3) : [];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const tracks = section.querySelectorAll<HTMLElement>('[data-tool-track]');
    const ctx = gsap.context(() => {
      tracks.forEach((track, index) => {
        const reverse = index % 2 === 1;
        gsap.fromTo(
          track,
          { xPercent: reverse ? -50 : 0 },
          { xPercent: reverse ? 0 : -50, duration: reverse ? 22 : 26, ease: 'none', repeat: -1 }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  if (!stack) return null;

  return (
    <section className="svc-stack" aria-labelledby="svc-stack-heading">
      <div className="section-x container svc-stack__inner">
        <div className="svc-stack__copy">
          <span className="svc-eyebrow">{stack.eyebrow}</span>
          <h2 id="svc-stack-heading" className="svc-heading">
            {stack.title}
          </h2>
          <p>{stack.body}</p>
        </div>
        <div className="studio-tools__rows" ref={sectionRef} aria-label="Toolkit">
          {rows.map((row, rowIndex) => (
            <div className="studio-tools__viewport" key={rowIndex}>
              <div
                className={`studio-tools__track${rowIndex % 2 === 1 ? ' studio-tools__track--reverse' : ''}`}
                data-tool-track
              >
                {[0, 1].map((copy) => (
                  <div className="studio-tools__group" key={copy} aria-hidden={copy === 1}>
                    {row.map((item) => (
                      <span className="studio-tools__pill" key={item}>
                        <img className="studio-tools__icon" src={resolveIcon(item)} alt="" loading="lazy" />
                        {item}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
