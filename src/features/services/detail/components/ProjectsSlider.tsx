'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@/shared/components/ui/icons';
import { filterCaseStudiesByCategory } from '@/shared/content/case-studies';
import { projectDetailPath, projectsFilteredPath } from '@/shared/constants/routes';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import type { CaseStudy } from '@/shared/types';

interface ProjectsSliderProps {
  category: ServiceCategorySlug;
  eyebrow?: string;
  title?: string;
}

export function ProjectsSlider({
  category,
  eyebrow = 'Selected work',
  title = 'Web projects we have shipped.',
}: ProjectsSliderProps) {
  const projects = filterCaseStudiesByCategory(category);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateNav = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateNav();
    track.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    return () => {
      track.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, [updateNav, projects.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.svc-projects-slider__card');
    const amount = card ? card.offsetWidth + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  if (!projects.length) return null;

  return (
    <section className="svc-projects-slider" aria-labelledby="svc-projects-slider-heading">
      <div className="section-x container svc-projects-slider__inner">
        <div className="svc-projects-slider__header">
          <div>
            <div className="svc-projects-slider__eyebrow-row">
              <span className="svc-projects-slider__bar" aria-hidden="true" />
              <span className="svc-eyebrow svc-eyebrow--on-dark">{eyebrow}</span>
            </div>
            <h2 id="svc-projects-slider-heading" className="svc-heading svc-heading--on-dark svc-projects-slider__heading">
              {title}
            </h2>
          </div>

          <div className="svc-projects-slider__controls">
            <button
              type="button"
              className="svc-projects-slider__nav"
              aria-label="Previous projects"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              className="svc-projects-slider__nav"
              aria-label="Next projects"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="svc-projects-slider__track"
          tabIndex={0}
          role="region"
          aria-label="Web project carousel"
        >
          {projects.map((project) => (
            <ProjectSlide key={project.slug} project={project} />
          ))}
        </div>

        <p className="svc-projects-slider__foot">
          <Link href={projectsFilteredPath(category)}>
            View all {category === 'web-mobile' ? 'web & mobile' : 'related'} projects
            <ArrowRight className="svc-projects-slider__foot-icon" />
          </Link>
        </p>
      </div>
    </section>
  );
}

function ProjectSlide({ project }: { project: CaseStudy }) {
  return (
    <Link href={projectDetailPath(project.slug)} className="svc-projects-slider__card">
      <div className="svc-projects-slider__media">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            width={720}
            height={480}
            sizes="(max-width: 768px) 85vw, 420px"
          />
        ) : (
          <span className="svc-projects-slider__placeholder">[ {project.shot} ]</span>
        )}
      </div>
      <div className="svc-projects-slider__copy">
        <span className="svc-projects-slider__tag">{project.tag}</span>
        <strong className="svc-projects-slider__title">{project.title}</strong>
        <p className="svc-projects-slider__desc">{project.desc}</p>
      </div>
    </Link>
  );
}
