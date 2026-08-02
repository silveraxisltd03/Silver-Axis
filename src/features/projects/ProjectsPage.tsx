'use client';

import { Suspense } from 'react';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { filterCaseStudiesByCategory } from '@/shared/content/case-studies';
import { QUOTES } from '@/shared/content/quotes';
import { projectDetailPath } from '@/shared/constants/routes';
import { ProjectFilters } from './components/ProjectFilters';
import { useProjectCategoryFilter } from './components/useProjectCategoryFilter';

function ProjectsGrid() {
  const [activeCategory, setCategory] = useProjectCategoryFilter();
  const filtered = filterCaseStudiesByCategory(activeCategory);

  return (
    <>
      <Reveal>
        <ProjectFilters active={activeCategory} onChange={setCategory} />
      </Reveal>
      <div className="projects-grid">
        {filtered.map((cs) => (
          <Reveal key={cs.slug}>
            <CaseStudyCard caseStudy={cs} to={projectDetailPath(cs.slug)} />
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="projects-empty">No projects in this category yet.</p>
      )}
    </>
  );
}

export function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="section-x container projects-hero__inner">
          <span className="projects-hero__eyebrow">Projects</span>
          <h1 className="projects-hero__title">Proof over promises.</h1>
          <p className="projects-hero__body">
            Systems we have audited, prototyped, and shipped—and what changed for the teams running them.
          </p>
        </div>
      </section>

      <section className="projects-list section-x">
        <div className="container">
          <Suspense fallback={<p className="projects-empty">Loading projects…</p>}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>

      <section className="testimonials-section">
        <Reveal className="testimonials-section__header">
          <h2 className="section-heading section-heading--center">What it is like to work with us.</h2>
        </Reveal>
        <TestimonialsMarquee quotes={QUOTES} />
      </section>
    </div>
  );
}
