import Link from 'next/link';
import { ArrowRight } from '@/shared/components/ui/icons';
import { ENGAGEMENT_CTA } from '../services.data';

export function EngagementCta() {
  return (
    <section className="engagement-cta section-x" aria-labelledby="engagement-cta-heading">
      <div className="container engagement-cta__inner">
        <h2 id="engagement-cta-heading" className="engagement-cta__title">
          {ENGAGEMENT_CTA.title}
        </h2>
        <Link href={ENGAGEMENT_CTA.href} className="engagement-cta__link">
          {ENGAGEMENT_CTA.linkLabel}
          <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
