import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { SERVICES_HERO } from '../services.data';

export function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero__glow" aria-hidden="true" />
      <div className="section-x container services-hero__inner">
        <nav className="services-hero__crumbs" aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <span>Services</span>
        </nav>

        <div className="services-hero__grid">
          <div className="services-hero__copy">
            <span className="services-hero__eyebrow">{SERVICES_HERO.eyebrow}</span>
            <h1 className="services-hero__title">
              {SERVICES_HERO.titleLead}{' '}
              <span className="services-hero__accent">{SERVICES_HERO.titleAccent}</span>
            </h1>
          </div>

          <div className="services-hero__aside">
            <p className="services-hero__body">{SERVICES_HERO.body}</p>
            <div className="services-hero__actions">
              <Link href={SERVICES_HERO.primaryCta.href} className="services-hero__btn services-hero__btn--primary">
                {SERVICES_HERO.primaryCta.label}
              </Link>
              <a href={SERVICES_HERO.secondaryCta.href} className="services-hero__btn services-hero__btn--ghost">
                {SERVICES_HERO.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
