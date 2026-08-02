import Link from 'next/link';
import { ABOUT_BANNER } from '../about.data';

export function AboutBannerCta() {
  return (
    <section className="services-banner section-x" aria-labelledby="about-banner-heading">
      <div className="container services-banner__inner">
        <h2 id="about-banner-heading" className="services-banner__title">
          {ABOUT_BANNER.title}
        </h2>
        <Link href={ABOUT_BANNER.href} className="services-banner__btn">
          {ABOUT_BANNER.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
