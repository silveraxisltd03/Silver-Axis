import Link from 'next/link';
import { Check } from '@/shared/components/ui/icons';
import { Reveal } from '@/shared/components/ui/Reveal';
import { practiceDetailPath, ROUTES } from '@/shared/constants/routes';
import type { ServiceDetailContent } from '../types';

interface SectionProps {
  content: ServiceDetailContent;
}

export function InvolvesSection({ content }: SectionProps) {
  const { involves, visual } = content;
  const layout = visual.involvesLayout;

  return (
    <section className={`svc-involves svc-involves--${layout}`} aria-labelledby="svc-involves-heading">
      <div className="section-x container">
        <span className="svc-eyebrow svc-eyebrow--on-dark">{involves.eyebrow}</span>
        <h2 id="svc-involves-heading" className="svc-heading svc-heading--on-dark">
          {involves.title}
        </h2>
        <ul className={`svc-involves__grid svc-involves__grid--${layout}`}>
          {involves.items.map((item, i) => (
            <li key={item.title} className={`svc-involves__item${layout === 'bento' && i === 0 ? ' is-wide' : ''}`}>
              {layout === 'hex' && <span className="svc-involves__mark" aria-hidden="true" />}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function OwnershipSection({ content }: SectionProps) {
  const { ownership, hero } = content;
  if (!ownership) return null;

  return (
    <section className="svc-split" aria-labelledby="svc-ownership-heading">
      <div className="section-x container">
        <Reveal className="svc-split__panel">
          <div className="svc-split__inner">
            <div className="svc-split__copy">
              <div className="svc-feature__eyebrow-row">
                <span className="svc-feature__bar" aria-hidden="true" />
                <span className="svc-eyebrow">{ownership.eyebrow}</span>
              </div>
              <h2 id="svc-ownership-heading" className="svc-heading svc-split__heading">
                {ownership.title}
              </h2>
            </div>
            <div className="svc-split__aside">
              <p className="svc-split__body">{ownership.body}</p>
              {hero.highlights.length > 0 && (
                <ul className="svc-split__metrics">
                  {hero.highlights.map((item, i) => (
                    <li key={item.label}>
                      <Reveal delay={100 + i * 80}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AudienceSection({ content }: SectionProps) {
  const { audience } = content;
  if (!audience) return null;

  return (
    <section className="svc-audience" aria-labelledby="svc-audience-heading">
      <div className="section-x container">
        <span className="svc-eyebrow svc-eyebrow--on-dark">{audience.eyebrow}</span>
        <h2 id="svc-audience-heading" className="svc-heading svc-heading--on-dark">
          {audience.title}
        </h2>
        <div className="svc-audience__cols">
          {audience.columns.map((col, i) => (
            <ul key={i} className="svc-audience__list">
              {col.map((item) => (
                <li key={item}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection({ content }: SectionProps) {
  const { capabilities } = content;

  return (
    <section className="svc-capabilities" aria-labelledby="svc-capabilities-heading">
      <div className="section-x container svc-capabilities__inner">
        <div className="svc-capabilities__copy">
          <span className="svc-eyebrow svc-eyebrow--on-dark">{capabilities.eyebrow}</span>
          <h2 id="svc-capabilities-heading" className="svc-heading svc-heading--on-dark">
            {capabilities.title}
          </h2>
          <p>{capabilities.body}</p>
        </div>
        <ul className="svc-capabilities__list">
          {capabilities.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExcellenceSection({ content }: SectionProps) {
  const { excellence } = content;
  if (!excellence) return null;

  return (
    <section className="svc-excellence" aria-labelledby="svc-excellence-heading">
      <div className="section-x container">
        <span className="svc-eyebrow svc-eyebrow--on-dark">{excellence.eyebrow}</span>
        <h2 id="svc-excellence-heading" className="svc-heading svc-heading--on-dark">
          {excellence.title}
        </h2>
        <ul className="svc-excellence__list">
          {excellence.items.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function InsightsSection({ content }: SectionProps) {
  const { insights } = content;
  if (!insights) return null;

  return (
    <section className="svc-insights" aria-labelledby="svc-insights-heading">
      <div className="section-x container">
        <span className="svc-eyebrow">{insights.eyebrow}</span>
        <h2 id="svc-insights-heading" className="svc-heading">
          {insights.title}
        </h2>
        <ul className="svc-insights__list">
          {insights.posts.map((post) => (
            <li key={post.slug}>
              <span className="svc-insights__meta">
                {post.category}
                {post.date ? ` · ${post.date}` : ''}
              </span>
              <span className="svc-insights__title">{post.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DetailBanner({ content }: SectionProps) {
  const { banner } = content;
  if (!banner) return null;

  return (
    <section className="svc-detail-banner">
      <div className="section-x container svc-detail-banner__inner">
        <h2 className="svc-detail-banner__title">{banner.title}</h2>
        <Link href={banner.href} className="svc-detail-banner__btn">
          {banner.ctaLabel}
        </Link>
      </div>
    </section>
  );
}

export function RelatedPractices({ related }: { related: ServiceDetailContent[] }) {
  if (!related.length) return null;

  return (
    <section className="svc-related" aria-labelledby="svc-related-heading">
      <div className="section-x container">
        <span className="svc-eyebrow">More practices</span>
        <h2 id="svc-related-heading" className="svc-heading">
          Explore related services
        </h2>
        <ul className="svc-related__grid">
          {related.map((item) => (
            <li key={item.slug}>
              <Link href={practiceDetailPath(item.slug)} className="svc-related__card">
                <span className="svc-related__eyebrow">{item.hero.eyebrow}</span>
                <strong>{item.meta.title}</strong>
                <p>{item.meta.description}</p>
                <span className="svc-related__cta">View practice</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="svc-related__all">
          Looking for something else? <Link href={ROUTES.services}>View all services</Link>
        </p>
      </div>
    </section>
  );
}
