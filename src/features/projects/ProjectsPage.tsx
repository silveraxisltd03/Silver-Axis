import { PageMeta } from '@/shared/components/seo/PageMeta';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { filterCaseStudiesByCategory } from '@/shared/content/case-studies';
import { QUOTES } from '@/shared/content/quotes';
import { projectDetailPath } from '@/shared/constants/routes';
import { css } from '@/shared/lib/css';
import { ProjectFilters } from './components/ProjectFilters';
import { useProjectCategoryFilter } from './components/useProjectCategoryFilter';

export function ProjectsPage() {
  const [activeCategory, setCategory] = useProjectCategoryFilter();
  const filtered = filterCaseStudiesByCategory(activeCategory);

  return (
    <>
      <PageMeta
        title="Projects"
        description="Case studies and proof of work from Silver Axis — systems we audited, prototyped and shipped."
      />

      <HeroBand
        title="Proof over promises."
        subtitle="A few systems we have audited, prototyped and shipped, and what changed for the teams running them."
      />

      <section className="section-x container page-section--sm">
        <Reveal>
          <ProjectFilters active={activeCategory} onChange={setCategory} />
        </Reveal>
        <div className="grid-2">
          {filtered.map((cs) => (
            <Reveal key={cs.slug}>
              <CaseStudyCard caseStudy={cs} to={projectDetailPath(cs.slug)} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={css('font-size:16px;color:#6b7488;text-align:center;padding:40px 0;')}>No projects in this category yet.</p>
        )}
      </section>

      <section className="testimonials-section">
        <Reveal className="testimonials-section__header">
          <h2 className="section-heading section-heading--center">What it is like to work with us.</h2>
        </Reveal>
        <TestimonialsMarquee quotes={QUOTES} />
      </section>
    </>
  );
}
