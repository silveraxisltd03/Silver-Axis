import { library } from '@fortawesome/fontawesome-svg-core';
import { faBullhorn, faTruckFast, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { filterCaseStudiesByIndustry, filterCaseStudiesByService, getIndustryCaseCount } from '@/shared/content/case-studies';
import { QUOTES } from '@/shared/content/quotes';
import { projectDetailPath } from '@/shared/constants/routes';
import { INDUSTRIES } from '@/shared/constants/industries';
import { SERVICE_CATEGORIES } from '@/shared/constants/categories';
import { css } from '@/shared/lib/css';
import { IndustryFilters } from './components/IndustryFilters';
import { useWorkIndustryFilter, useWorkServiceFilter } from './components/useWorkFilters';

library.add(faBullhorn, faTruckFast, faLocationDot);

export function WorkPage() {
  const [activeIndustry, setIndustry] = useWorkIndustryFilter();
  const activeService = useWorkServiceFilter();
  const filtered = activeService
    ? filterCaseStudiesByService(activeService)
    : filterCaseStudiesByIndustry(activeIndustry);
  const activeServiceLabel = activeService
    ? SERVICE_CATEGORIES.find((c) => c.slug === activeService)?.label
    : null;

  return (
    <>
      <PageMeta
        title="Who We Work With"
        description="The sectors Silver Axis builds for, and the case studies behind each one, systems we audited, prototyped and shipped."
      />

      <HeroBand
        title="Proof over promises."
        subtitle="A few systems we have audited, prototyped and shipped, grouped by the kind of business they were built for."
      />

      <section className="section-x container page-section--sm">
        <Reveal>
          <h2 className="section-heading" style={css('margin-bottom:32px;')}>Sectors we build for.</h2>
        </Reveal>
        <div className="grid-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal key={industry.slug} delay={i * 90}>
              <button
                type="button"
                className={`industry-card${activeIndustry === industry.slug ? ' industry-card--active' : ''}`}
                onClick={() => setIndustry(activeIndustry === industry.slug ? null : industry.slug)}
              >
                <span className="industry-card__icon" aria-hidden="true">
                  <FontAwesomeIcon icon={['fas', industry.icon as IconName]} />
                </span>
                <h3 className="industry-card__title">{industry.label}</h3>
                <p className="industry-card__desc">{industry.pitch}</p>
                <span className="industry-card__count">
                  {getIndustryCaseCount(industry.slug)} case {getIndustryCaseCount(industry.slug) === 1 ? 'study' : 'studies'}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="case-studies" className="section-x container page-section--sm">
        <Reveal>
          {activeServiceLabel ? (
            <p style={css('font-size:15px;color:#6b7488;margin:0 0 20px;')}>
              Showing case studies for <strong style={css('color:#0b1020;')}>{activeServiceLabel}</strong>
            </p>
          ) : (
            <IndustryFilters active={activeIndustry} onChange={setIndustry} />
          )}
        </Reveal>
        <div className="grid-2">
          {filtered.map((cs) => (
            <Reveal key={cs.slug}>
              <CaseStudyCard caseStudy={cs} to={projectDetailPath(cs.slug)} />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <p style={css('font-size:16px;color:#6b7488;text-align:center;padding:40px 0;')}>No case studies in this sector yet.</p>
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
