import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faClock,
  faLayerGroup,
  faEyeSlash,
  faArrowTrendDown,
  faMobileScreen,
  faTriangleExclamation,
  faPuzzlePiece,
  faTableColumns,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TechPill } from '@/shared/components/ui/TechPill';
import { isServiceCategorySlug } from '@/shared/constants/categories';
import { projectDetailPath, projectsFilteredPath, ROUTES } from '@/shared/constants/routes';
import { filterCaseStudiesByCategory } from '@/shared/content/case-studies';
import { getServiceBySlug } from '@/shared/content/services';
import { css } from '@/shared/lib/css';
import type { FaqItem } from '@/shared/content/services';

library.add(
  faClock,
  faLayerGroup,
  faEyeSlash,
  faArrowTrendDown,
  faMobileScreen,
  faTriangleExclamation,
  faPuzzlePiece,
  faTableColumns,
  faDatabase,
);

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  if (!slug || !isServiceCategorySlug(slug)) {
    return <Navigate to={ROUTES.services} replace />;
  }

  const service = getServiceBySlug(slug);
  if (!service) {
    return <Navigate to={ROUTES.services} replace />;
  }

  const relatedCases = filterCaseStudiesByCategory(service.slug).slice(0, 3);

  return (
    <>
      <PageMeta
        title={service.metaTitle}
        description={service.metaDescription}
        jsonLd={service.jsonLd}
      />

      {/* ── HERO ── */}
      <section className="svc-hero section-x container">
        <Reveal>
          <div className="svc-hero__grid">
            <div className="svc-hero__text">
              <span className="svc-eyebrow">{service.eyebrow}</span>
              <h1 className="svc-hero__h1">{service.title}</h1>
              <p className="svc-hero__sub">{service.subtitle}</p>
              <p className="svc-hero__desc">{service.description}</p>
              <div className="svc-hero__actions">
                <Link to="/contact" className="svc-btn-primary">Book a free audit</Link>
                <Link
                  to={projectsFilteredPath(service.slug)}
                  className="svc-btn-ghost"
                >
                  View case studies →
                </Link>
              </div>
            </div>
            <div className="svc-hero__image-wrap">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="svc-hero__image"
                style={css(`object-fit:${service.imageFit};`)}
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PROBLEMS WE SOLVE ── */}
      <section className="svc-problems section-x container">
        <Reveal>
          <h2 className="svc-section-title">{service.problemsHeading}</h2>
          <div className="svc-problems__grid">
            {service.problems.map((p) => (
              <div key={p.title} className="svc-problem-card">
                <span className="svc-problem-card__icon" aria-hidden="true">
                  <FontAwesomeIcon icon={['fas', p.icon as IconName]} />
                </span>
                <h3 className="svc-problem-card__title">{p.title}</h3>
                <p className="svc-problem-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="svc-tech">
        <div className="section-x container">
          <Reveal>
            <h2 className="svc-section-title">Technologies we work with</h2>
            <p className="svc-section-sub">
              We pick the right tool for the job, not the trendiest one. These are the platforms
              and frameworks we use regularly and know deeply.
            </p>
            <div className="svc-tech__groups">
              {service.techGroups.map((g) => (
                <div key={g.category} className="svc-tech__group">
                  <span className="svc-tech__group-label">{g.category}</span>
                  <div className="svc-tech__pills">
                    {g.items.map((item) => (
                      <TechPill key={item} name={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="svc-approach section-x container">
        <Reveal>
          <h2 className="svc-section-title">{service.approachHeading}</h2>
          <p className="svc-section-sub">
            Every engagement follows the same core discipline, no shortcuts, no surprises.
          </p>
          <ol className="svc-approach__steps">
            {service.approach.map((step) => (
              <li key={step.n} className="svc-approach__step">
                <span className="svc-approach__step-n">{step.n}</span>
                <div className="svc-approach__step-body">
                  <h3 className="svc-approach__step-title">{step.title}</h3>
                  <p className="svc-approach__step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* ── RELATED PROJECTS ── */}
      {relatedCases.length > 0 && (
        <section className="svc-related section-x container">
          <Reveal>
            <div className="svc-related__head">
              <h2 className="svc-section-title" style={css('margin:0;')}>Work we have shipped in this space</h2>
            </div>
            <div className="grid-2">
              {relatedCases.map((cs) => (
                <Reveal key={cs.slug}>
                  <CaseStudyCard caseStudy={cs} to={projectDetailPath(cs.slug)} />
                </Reveal>
              ))}
            </div>
            <div className="svc-related__foot">
              <Link to={projectsFilteredPath(service.slug)} className="cs-inline-cta__btn">
                View all {service.label} projects →
              </Link>
            </div>
          </Reveal>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="svc-faq section-x container">
        <Reveal>
          <h2 className="svc-section-title">Common questions</h2>
          <div className="svc-faq__list">
            {service.faq.map((item) => (
              <FaqAccordionItem key={item.q} item={item} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}

function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`svc-faq__item${open ? ' svc-faq__item--open' : ''}`}>
      <button
        className="svc-faq__question"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{item.q}</span>
        <span className="svc-faq__chevron" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="svc-faq__answer-wrap">
        <p className="svc-faq__answer">{item.a}</p>
      </div>
    </div>
  );
}
