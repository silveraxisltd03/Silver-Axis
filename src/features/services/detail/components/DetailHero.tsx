import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import type { ServiceDetailContent } from '../types';

interface DetailHeroProps {
  content: ServiceDetailContent;
}

export function DetailHero({ content }: DetailHeroProps) {
  const { hero, crumb } = content;

  return (
    <section className="services-hero">
      <div className="services-hero__glow" aria-hidden="true" />
      <div className="section-x container services-hero__inner">
        <nav className="services-hero__crumbs" aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={ROUTES.services}>Services</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>

        <div className="services-hero__grid">
          <div className="services-hero__copy">
            <span className="services-hero__eyebrow">{hero.eyebrow}</span>
            <h1 className="services-hero__title services-hero__title--detail">{hero.title}</h1>
          </div>

          <div className="services-hero__aside">
            <p className="services-hero__body">{hero.body}</p>
            <div className="services-hero__actions">
              <Link href={ROUTES.contact} className="services-hero__btn services-hero__btn--primary">
                Work with us
              </Link>
              <a href="#svc-involves-heading" className="services-hero__btn services-hero__btn--ghost">
                Explore practice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
