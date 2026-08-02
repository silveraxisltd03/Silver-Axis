'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ROUTES, projectDetailPath } from '@/shared/constants/routes';
import { BLOG_POSTS, type BlogPost } from '@/shared/content/blog';
import { HOME_CASES } from '@/shared/content/case-studies';
import type { CaseStudy } from '@/shared/types';

gsap.registerPlugin(ScrollTrigger);

interface InsightTile {
  key: string;
  href: string;
  image: string;
}

const [blog1, blog2, blog3, blog4] = BLOG_POSTS;
const [case1, case2, case3, case4] = HOME_CASES;

function blogTile(post: BlogPost, seed: string): InsightTile {
  return {
    key: post.slug,
    href: '#',
    image: `https://picsum.photos/seed/${seed}/700/700`,
  };
}

function caseTile(cs: CaseStudy, seed: string): InsightTile {
  return {
    key: cs.slug,
    href: projectDetailPath(cs.slug),
    image: `https://picsum.photos/seed/${seed}/700/700`,
  };
}

const COLUMN_1: InsightTile[] = [
  { ...caseTile(case1, 'silveraxis-case-1'), image: '/assets/insights/ai-automation.png' },
  { ...blogTile(blog4, 'silveraxis-blog-4'), image: '/assets/insights/zapier-n8n.png' },
];
const COLUMN_2: InsightTile[] = [
  { ...blogTile(blog1, 'silveraxis-blog-1'), image: '/assets/insights/modern-web-apps.png' },
  { ...blogTile(blog2, 'silveraxis-blog-2'), image: '/assets/insights/llm-models-compared.png' },
  { ...blogTile(blog3, 'silveraxis-blog-3'), image: '/assets/insights/rag-knowledge-assistant.png' },
];
const COLUMN_3: InsightTile[] = [
  { ...caseTile(case2, 'silveraxis-case-2'), image: '/assets/insights/mobile-app-dev.png' },
  { ...caseTile(case3, 'silveraxis-case-3'), image: '/assets/insights/crm-erp-solutions.png' },
  { ...caseTile(case4, 'silveraxis-case-4'), image: '/assets/insights/agentic-ai.png' },
];

function InsightColumn({ tiles }: { tiles: InsightTile[] }) {
  return (
    <>
      {tiles.map((tile) => (
        <Link key={tile.key} href={tile.href} className="insight-tile">
          <img src={tile.image} alt="" className="insight-tile__image" loading="lazy" />
        </Link>
      ))}
    </>
  );
}

export function FeaturedInsights() {
  const sectionRef = useRef<HTMLElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const col1 = col1Ref.current;
    const col2 = col2Ref.current;
    const col3 = col3Ref.current;
    if (!section || !col1 || !col2 || !col3) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const trigger = { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 0.6 };
      gsap.fromTo(col1, { y: 0 }, { y: 70, ease: 'none', scrollTrigger: trigger });
      gsap.fromTo(col2, { y: 0 }, { y: -60, ease: 'none', scrollTrigger: trigger });
      gsap.fromTo(col3, { y: 0 }, { y: 50, ease: 'none', scrollTrigger: trigger });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="insights-showcase">
      <div className="section-x container insights-showcase__inner">
        <div className="insights-showcase__copy">
          <span className="insights-showcase__eyebrow">Featured Insights</span>
          <h2 className="insights-showcase__heading">
            Stories of our{' '}
            <span className="insights-showcase__accent">transformations across Services and Industries</span>
          </h2>
          <p className="insights-showcase__sub">From Concept to Completion</p>
          <Link href={ROUTES.services} className="insights-showcase__cta">
            Explore More
          </Link>
        </div>

        <div className="insights-showcase__grid">
          <div className="insights-showcase__col insights-showcase__col--1" ref={col1Ref}>
            <InsightColumn tiles={COLUMN_1} />
          </div>
          <div className="insights-showcase__col insights-showcase__col--2" ref={col2Ref}>
            <InsightColumn tiles={COLUMN_2} />
          </div>
          <div className="insights-showcase__col insights-showcase__col--3" ref={col3Ref}>
            <InsightColumn tiles={COLUMN_3} />
          </div>
        </div>
      </div>
    </section>
  );
}
