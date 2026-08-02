import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { CONTACT_HERO } from '../contact.data';

export function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__glow" aria-hidden="true" />
      <div className="section-x container contact-hero__inner">
        <nav className="contact-hero__crumbs" aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <span>Contact</span>
        </nav>
        <h1 className="contact-hero__title">
          {CONTACT_HERO.titleLead}{' '}
          <span className="contact-hero__accent">{CONTACT_HERO.titleAccent}</span>
        </h1>
        <p className="contact-hero__sub">{CONTACT_HERO.subtitle}</p>
      </div>
    </section>
  );
}
