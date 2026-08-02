import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { ABOUT_HERO } from '../about.data';

export function AboutHero() {
  return (
    <section className="services-hero section-x">
      <div className="services-hero__glow" aria-hidden="true" />
      <div className="container services-hero__inner">
        <nav className="services-hero__crumbs" aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <span>About</span>
        </nav>

        <div className="services-hero__grid">
          <div className="services-hero__copy">
            <span className="services-hero__eyebrow">{ABOUT_HERO.eyebrow}</span>
            <h1 className="services-hero__title services-hero__title--wide">
              {ABOUT_HERO.titleLead}{' '}
              <span className="services-hero__accent">{ABOUT_HERO.titleAccent}</span>
            </h1>
          </div>

          <div className="services-hero__aside">
            <p className="services-hero__body">{ABOUT_HERO.body}</p>
            <div className="services-hero__actions">
              <Link href={ABOUT_HERO.primaryCta.href} className="services-hero__btn services-hero__btn--primary">
                {ABOUT_HERO.primaryCta.label}
              </Link>
              <Link href={ABOUT_HERO.secondaryCta.href} className="services-hero__btn services-hero__btn--ghost">
                {ABOUT_HERO.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
