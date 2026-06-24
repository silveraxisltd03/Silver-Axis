import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faCheck, faExpand } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { CTA } from '@/shared/components/ui/CTA';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TechPill } from '@/shared/components/ui/TechPill';
import { projectDetailPath, ROUTES } from '@/shared/constants/routes';
import { getCaseStudyBySlug, getRelatedCaseStudies } from '@/shared/content/case-studies';

library.add(faXmark, faCheck, faExpand);

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  if (!slug) return <Navigate to={ROUTES.projects} replace />;

  const cs = getCaseStudyBySlug(slug);
  if (!cs) return <Navigate to={ROUTES.projects} replace />;

  const related = getRelatedCaseStudies(slug);

  return (
    <>
      <PageMeta title={cs.title} description={cs.desc} />

      {/* ── HERO ── */}
      <header className="cs-hero section-x container">
        <Reveal>
          <Link to={ROUTES.projects} className="cs-back-link">← All projects</Link>
          <h1 className="cs-hero__title">{cs.title}</h1>
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cs-live-btn"
            >
              View Live ↗
            </a>
          )}
        </Reveal>
      </header>

      {/* ── HERO IMAGE ── */}
      {cs.thumbnail && (
        <Reveal>
          <div className="cs-thumbnail section-x container">
            <div className="cs-thumbnail__frame">
              <img
                src={cs.thumbnail}
                alt={`${cs.title} — project screenshot`}
                className="cs-thumbnail__img"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      )}


      {/* ── BEFORE → AFTER ── */}
      {(cs.problemPoints || cs.solutionPoints) && (
        <Reveal>
          <div className="cs-ba section-x container">
            <div className="cs-ba__header">
              <h2 className="cs-ba__heading">The transformation</h2>
              <p className="cs-ba__sub">What the client was dealing with — and what we replaced it with.</p>
            </div>
            <div className="cs-ba__panels">
              {/* BEFORE */}
              {cs.problemPoints && (
                <div className="cs-ba__panel cs-ba__panel--before">
                  <div className="cs-ba__panel-label">
                    <span className="cs-ba__badge cs-ba__badge--before">Before</span>
                  </div>
                  <ul className="cs-ba__list">
                    {cs.problemPoints.map((p) => (
                      <li key={p} className="cs-ba__item cs-ba__item--before">
                        <FontAwesomeIcon icon={faXmark} className="cs-ba__icon cs-ba__icon--before" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="cs-ba__arrow" aria-hidden="true">→</div>

              {/* AFTER */}
              {cs.solutionPoints && (
                <div className="cs-ba__panel cs-ba__panel--after">
                  <div className="cs-ba__panel-label">
                    <span className="cs-ba__badge cs-ba__badge--after">After</span>
                  </div>
                  <ul className="cs-ba__list">
                    {cs.solutionPoints.map((p) => (
                      <li key={p} className="cs-ba__item cs-ba__item--after">
                        <FontAwesomeIcon icon={faCheck} className="cs-ba__icon cs-ba__icon--after" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      )}

      {/* ── INLINE CTA ── */}
      {(cs.problemPoints || cs.solutionPoints) && (
        <Reveal>
          <div className="cs-inline-cta section-x container">
            <Link to={ROUTES.contact} className="cs-inline-cta__btn">
              Got a similar problem? Let's talk →
            </Link>
          </div>
        </Reveal>
      )}

      {/* ── HOW WE BUILT IT ── */}
      {cs.deliverySteps && cs.deliverySteps.length > 0 && (
        <Reveal>
          <div className="cs-delivery section-x container">
            <h2 className="cs-delivery__heading">How we built it</h2>
            <ol className="cs-delivery__steps">
              {cs.deliverySteps.map((step, i) => (
                <li key={i} className="cs-delivery__step">
                  <div className="cs-delivery__step-n">{i + 1}</div>
                  <p className="cs-delivery__step-text">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      )}

      {/* ── TOOLS ── */}
      {cs.tools && cs.tools.length > 0 && (
        <Reveal>
          <div className="cs-tools-section section-x container">
            <h2 className="cs-tools-section__heading">Technologies used</h2>
            <div className="cs-tools-wrap">
              {cs.tools.map((tool) => (
                <TechPill key={tool} name={tool} size="md" />
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ── GALLERY ── */}
      {cs.screenshots && cs.screenshots.length > 0 && (
        <Reveal>
          <div className="cs-gallery section-x container">
            <h2 className="cs-gallery__heading">Project screenshots</h2>
            <div className="cs-gallery__grid">
              {cs.screenshots.map((shot) => (
                <button
                  key={shot.src}
                  className="cs-gallery__item"
                  onClick={() => setLightbox(shot)}
                  aria-label={`View screenshot: ${shot.caption}`}
                >
                  <div className="cs-gallery__img-wrap">
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      className="cs-gallery__img"
                      loading="lazy"
                    />
                    <span className="cs-gallery__overlay" aria-hidden="true">
                      <FontAwesomeIcon icon={faExpand} />
                    </span>
                  </div>
                  <p className="cs-gallery__caption">{shot.caption}</p>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="cs-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
        >
          <button className="cs-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="cs-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="cs-lightbox__img" />
            <p className="cs-lightbox__caption">{lightbox.caption}</p>
          </div>
        </div>
      )}

      {/* ── RELATED ── */}
      {related.length > 0 && (
        <section className="cs-related section-x container">
          <Reveal>
            <h2 className="cs-related__title">More in this space</h2>
          </Reveal>
          <div className="grid-2">
            {related.map((r) => (
              <Reveal key={r.slug}>
                <CaseStudyCard caseStudy={r} to={projectDetailPath(r.slug)} imageHeight={200} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CTA
        title="Want results like this?"
        text="Start with a free audit — we will map what to automate, what to rebuild, and what to leave alone."
      />
    </>
  );
}
