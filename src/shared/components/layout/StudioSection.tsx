'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ROUTES } from '@/shared/constants/routes';

interface StudioTool {
  name: string;
  icon: string;
}

const icon = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const TOOL_ROWS: StudioTool[][] = [
  [
    { name: 'Next.js', icon: icon('nextdotjs') },
    { name: 'React', icon: icon('react') },
    { name: 'TypeScript', icon: icon('typescript') },
    { name: 'Vue.js', icon: icon('vuedotjs') },
    { name: 'Angular', icon: icon('angular') },
    { name: 'Tailwind CSS', icon: icon('tailwindcss') },
    { name: 'WordPress', icon: icon('wordpress') },
    { name: 'Webflow', icon: icon('webflow') },
  ],
  [
    { name: 'Node.js', icon: icon('nodedotjs') },
    { name: 'Python', icon: icon('python') },
    { name: 'PHP', icon: icon('php') },
    { name: 'Laravel', icon: icon('laravel') },
    { name: 'Django', icon: icon('django') },
    { name: '.NET', icon: icon('dotnet') },
    { name: 'PostgreSQL', icon: icon('postgresql') },
    { name: 'MongoDB', icon: icon('mongodb') },
    { name: 'Redis', icon: icon('redis') },
  ],
  [
    { name: 'React Native', icon: icon('react') },
    { name: 'Flutter', icon: icon('flutter') },
    { name: 'Swift', icon: icon('swift') },
    { name: 'Kotlin', icon: icon('kotlin') },
    {
      name: 'AWS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
    { name: 'Google Cloud', icon: icon('googlecloud') },
    { name: 'Docker', icon: icon('docker') },
    { name: 'Kubernetes', icon: icon('kubernetes') },
  ],
  [
    {
      name: 'OpenAI',
      icon: 'https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg',
    },
    { name: 'TensorFlow', icon: icon('tensorflow') },
    { name: 'PyTorch', icon: icon('pytorch') },
    { name: 'n8n', icon: icon('n8n') },
    { name: 'Figma', icon: icon('figma') },
    { name: 'Shopify', icon: icon('shopify') },
    { name: 'Cypress', icon: icon('cypress') },
    { name: 'GitHub Actions', icon: icon('githubactions') },
    { name: 'HubSpot', icon: icon('hubspot') },
  ],
];

function ToolRow({ tools, reverse = false }: { tools: StudioTool[]; reverse?: boolean }) {
  return (
    <div className="studio-tools__viewport">
      <div className={`studio-tools__track${reverse ? ' studio-tools__track--reverse' : ''}`} data-tool-track>
        {[0, 1].map((copy) => (
          <div className="studio-tools__group" key={copy} aria-hidden={copy === 1}>
            {tools.map((tool) => (
              <span className="studio-tools__pill" key={tool.name}>
                <img className="studio-tools__icon" src={tool.icon} alt="" loading="lazy" />
                {tool.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StudioSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
          {
            xPercent: reverse ? 0 : -50,
            duration: reverse ? 26 : 30,
            ease: 'none',
            repeat: -1,
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="studio-section section-x" aria-labelledby="studio-title">
      <div className="studio-section__inner container">
        <div className="studio-section__intro">
          <div className="studio-section__visual">
            <img
              src="/assets/digital-product-process.png"
              alt="Digital product process from strategy and design through development, launch, and scale"
              loading="lazy"
            />
          </div>

          <div className="studio-section__copy">
            <span className="studio-section__eyebrow">Who we are</span>
            <h2 id="studio-title" className="studio-section__title">
              We build digital products that drive real business impact.
            </h2>
            <p className="studio-section__lead">
              From strategy and design to development and scaling—we partner with companies to build
              custom software, websites, and applications that solve real problems and unlock growth.
            </p>
            <Link href={ROUTES.contact} className="studio-section__link">
              Meet Silver Axis <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="studio-values">
          <article className="studio-value">
            <span className="studio-value__label">Our mission</span>
            <span className="studio-value__quote" aria-hidden="true">“</span>
            <p>
              Help ambitious teams move from uncertainty to shipped software through clear thinking,
              practical technology, and accountable execution.
            </p>
          </article>
          <article className="studio-value">
            <span className="studio-value__label">Our vision</span>
            <span className="studio-value__quote" aria-hidden="true">“</span>
            <p>
              Become the trusted technology partner for teams that value craftsmanship, honest
              collaboration, and results that compound over time.
            </p>
          </article>
        </div>

        <div className="studio-tools">
          <div className="studio-tools__heading">
            <span>Our tools</span>
            <strong>What we build with</strong>
          </div>
          <div className="studio-tools__rows" aria-label="Technologies we use">
            {TOOL_ROWS.map((tools, index) => (
              <ToolRow key={tools[0].name} tools={tools} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
