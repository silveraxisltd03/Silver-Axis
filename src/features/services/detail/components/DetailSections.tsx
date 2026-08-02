import Link from 'next/link';
import { Check } from '@/shared/components/ui/icons';
import { practiceDetailPath, ROUTES } from '@/shared/constants/routes';
import type { ServiceDetailContent } from '../types';

interface SectionProps {
  content: ServiceDetailContent;
}

export function InvolvesSection({ content }: SectionProps) {
  const { involves, visual } = content;
  const layout = visual.involvesLayout;

  return (
    <section className={`svc-involves svc-involves--${layout} section-x`} aria-labelledby="svc-involves-heading">
      <div className="container">
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
  const { ownership } = content;

  return (
    <section className="svc-split section-x" aria-labelledby="svc-ownership-heading">
      <div className="container svc-split__inner">
        <div>
          <span className="svc-eyebrow">{ownership.eyebrow}</span>
          <h2 id="svc-ownership-heading" className="svc-heading">
            {ownership.title}
          </h2>
        </div>
        <p className="svc-split__body">{ownership.body}</p>
      </div>
    </section>
  );
}

export function AudienceSection({ content }: SectionProps) {
  const { audience } = content;

  return (
    <section className="svc-audience section-x" aria-labelledby="svc-audience-heading">
      <div className="container">
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

export function PrinciplesSection({ content }: SectionProps) {
  const { principles } = content;

  return (
    <section className="svc-principles section-x" aria-labelledby="svc-principles-heading">
      <div className="container">
        <span className="svc-eyebrow">{principles.eyebrow}</span>
        <h2 id="svc-principles-heading" className="svc-heading">
          {principles.title}
        </h2>
        <ul className="svc-principles__list">
          {principles.items.map((item) => (
            <li key={item.title}>
              <Check />
              <div>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessSection({ content }: SectionProps) {
  const { process, visual } = content;
  const layout = visual.processLayout;

  return (
    <section className={`svc-process svc-process--${layout} section-x`} aria-labelledby="svc-process-heading">
      <div className="container">
        <span className="svc-eyebrow svc-eyebrow--on-dark">{process.eyebrow}</span>
        <h2 id="svc-process-heading" className="svc-heading svc-heading--on-dark">
          {process.title}
        </h2>
        <ol className={`svc-process__steps svc-process__steps--${layout}`}>
          {process.steps.map((step) => (
            <li key={step.number} className="svc-process__step">
              <span className="svc-process__num" aria-hidden="true">
                {step.number}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CapabilitiesSection({ content }: SectionProps) {
  const { capabilities } = content;

  return (
    <section className="svc-capabilities section-x" aria-labelledby="svc-capabilities-heading">
      <div className="container svc-capabilities__inner">
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

export function StackSection({ content }: SectionProps) {
  const { stack } = content;
  if (!stack) return null;

  return (
    <section className="svc-stack section-x" aria-labelledby="svc-stack-heading">
      <div className="container svc-stack__inner">
        <div className="svc-stack__copy">
          <span className="svc-eyebrow">{stack.eyebrow}</span>
          <h2 id="svc-stack-heading" className="svc-heading">
            {stack.title}
          </h2>
          <p>{stack.body}</p>
        </div>
        <ul className="svc-stack__pills">
          {stack.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SolutionsSection({ content }: SectionProps) {
  const { solutions } = content;

  return (
    <section className="svc-solutions section-x" aria-labelledby="svc-solutions-heading">
      <div className="container">
        <span className="svc-eyebrow">{solutions.eyebrow}</span>
        <h2 id="svc-solutions-heading" className="svc-heading">
          {solutions.title}
        </h2>
        <ul className="svc-solutions__rows">
          {solutions.rows.map((row) => (
            <li key={row.label}>
              <strong>{row.label}</strong>
              <p>{row.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExcellenceSection({ content }: SectionProps) {
  const { excellence } = content;

  return (
    <section className="svc-excellence section-x" aria-labelledby="svc-excellence-heading">
      <div className="container">
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

  return (
    <section className="svc-insights section-x" aria-labelledby="svc-insights-heading">
      <div className="container">
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

  return (
    <section className="svc-detail-banner section-x">
      <div className="container svc-detail-banner__inner">
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
    <section className="svc-related section-x" aria-labelledby="svc-related-heading">
      <div className="container">
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
