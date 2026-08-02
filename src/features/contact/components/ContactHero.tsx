import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { CONTACT_HERO } from '../contact.data';

export function ContactHero() {
  return (
    <section className="services-hero section-x">
      <div className="services-hero__glow" aria-hidden="true" />
      <div className="container services-hero__inner">
        <nav className="services-hero__crumbs" aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <span>Contact</span>
        </nav>

        <div className="services-hero__grid">
          <div className="services-hero__copy">
            <span className="services-hero__eyebrow">{CONTACT_HERO.eyebrow}</span>
            <h1 className="services-hero__title services-hero__title--wide">
              {CONTACT_HERO.titleLead}{' '}
              <span className="services-hero__accent">{CONTACT_HERO.titleAccent}</span>
            </h1>
          </div>

          <div className="services-hero__aside">
            <p className="services-hero__body">{CONTACT_HERO.body}</p>
            <div className="services-hero__actions">
              <a href={CONTACT_HERO.primaryCta.href} className="services-hero__btn services-hero__btn--primary">
                {CONTACT_HERO.primaryCta.label}
              </a>
              <a
                href={CONTACT_HERO.secondaryCta.href}
                className="services-hero__btn services-hero__btn--ghost"
                target={CONTACT_HERO.secondaryCta.external ? '_blank' : undefined}
                rel={CONTACT_HERO.secondaryCta.external ? 'noopener noreferrer' : undefined}
              >
                {CONTACT_HERO.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
