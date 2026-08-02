import Link from 'next/link';
import { SERVICES_BANNER } from '../services.data';

export function ServicesBannerCta() {
  return (
    <section className="services-banner section-x" aria-labelledby="services-banner-heading">
      <div className="container services-banner__inner">
        <h2 id="services-banner-heading" className="services-banner__title">
          {SERVICES_BANNER.title}
        </h2>
        <Link href={SERVICES_BANNER.href} className="services-banner__btn">
          {SERVICES_BANNER.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
