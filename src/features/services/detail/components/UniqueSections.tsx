import Image from 'next/image';
import { Check } from '@/shared/components/ui/icons';
import type { ServiceDetailContent, ServiceModule } from '../types';

interface SectionProps {
  content: ServiceDetailContent;
}

export function FeatureBand({ content }: SectionProps) {
  const { visual } = content;
  if (!visual.feature) return null;
  const { feature, image, imageAlt } = visual;
  const flip = feature.imagePosition === 'left';

  return (
    <section className={`svc-feature section-x${flip ? ' svc-feature--flip' : ''}`} aria-labelledby="svc-feature-heading">
      <div className="container svc-feature__inner">
        <div className="svc-feature__copy">
          <span className="svc-eyebrow">{feature.eyebrow}</span>
          <h2 id="svc-feature-heading" className="svc-heading">
            {feature.title}
          </h2>
          <p className="svc-feature__body">{feature.body}</p>
          <ul className="svc-feature__bullets">
            {feature.bullets.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="svc-feature__media">
          <Image src={image} alt={imageAlt} width={960} height={540} sizes="(max-width: 960px) 100vw, 48vw" />
        </div>
      </div>
    </section>
  );
}

function CompareModule({ module }: { module: Extract<ServiceModule, { type: 'compare' }> }) {
  return (
    <section className="svc-module svc-module--compare section-x" aria-labelledby="svc-module-heading">
      <div className="container">
        <span className="svc-eyebrow svc-eyebrow--on-dark">{module.eyebrow}</span>
        <h2 id="svc-module-heading" className="svc-heading svc-heading--on-dark">
          {module.title}
        </h2>
        <div className="svc-compare">
          <div className="svc-compare__col svc-compare__col--yes">
            <h3>{module.left.title}</h3>
            <ul>
              {module.left.items.map((item) => (
                <li key={item}>
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="svc-compare__col svc-compare__col--no">
            <h3>{module.right.title}</h3>
            <ul>
              {module.right.items.map((item) => (
                <li key={item}>
                  <span className="svc-compare__dash" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformsModule({ module }: { module: Extract<ServiceModule, { type: 'platforms' }> }) {
  return (
    <section className="svc-module svc-module--platforms section-x" aria-labelledby="svc-module-heading">
      <div className="container">
        <span className="svc-eyebrow">{module.eyebrow}</span>
        <h2 id="svc-module-heading" className="svc-heading">
          {module.title}
        </h2>
        <ul className="svc-platforms">
          {module.items.map((item) => (
            <li key={item.title}>
              <span className="svc-platforms__meta">{item.meta}</span>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LoopModule({ module }: { module: Extract<ServiceModule, { type: 'loop' }> }) {
  return (
    <section className="svc-module svc-module--loop section-x" aria-labelledby="svc-module-heading">
      <div className="container">
        <span className="svc-eyebrow svc-eyebrow--on-dark">{module.eyebrow}</span>
        <h2 id="svc-module-heading" className="svc-heading svc-heading--on-dark">
          {module.title}
        </h2>
        <ol className="svc-loop">
          {module.stages.map((stage, i) => (
            <li key={stage.title}>
              <span className="svc-loop__idx">{String(i + 1).padStart(2, '0')}</span>
              <strong>{stage.title}</strong>
              <p>{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function MetricsModule({ module }: { module: Extract<ServiceModule, { type: 'metrics' }> }) {
  return (
    <section className="svc-module svc-module--metrics section-x" aria-labelledby="svc-module-heading">
      <div className="container">
        <span className="svc-eyebrow">{module.eyebrow}</span>
        <h2 id="svc-module-heading" className="svc-heading">
          {module.title}
        </h2>
        <ul className="svc-metrics">
          {module.items.map((item) => (
            <li key={item.label}>
              <strong className="svc-metrics__value">{item.value}</strong>
              <span className="svc-metrics__label">{item.label}</span>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ChecklistModule({ module }: { module: Extract<ServiceModule, { type: 'checklist' }> }) {
  return (
    <section className="svc-module svc-module--checklist section-x" aria-labelledby="svc-module-heading">
      <div className="container svc-checklist">
        <div className="svc-checklist__intro">
          <span className="svc-eyebrow">{module.eyebrow}</span>
          <h2 id="svc-module-heading" className="svc-heading">
            {module.title}
          </h2>
          <p>{module.body}</p>
        </div>
        <ul className="svc-checklist__list">
          {module.items.map((item) => (
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

export function UniqueModule({ content }: SectionProps) {
  const module = content.visual.module;
  if (!module) return null;

  switch (module.type) {
    case 'compare':
      return <CompareModule module={module} />;
    case 'platforms':
      return <PlatformsModule module={module} />;
    case 'loop':
      return <LoopModule module={module} />;
    case 'metrics':
      return <MetricsModule module={module} />;
    case 'checklist':
      return <ChecklistModule module={module} />;
    default:
      return null;
  }
}
