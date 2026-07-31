import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export function PreFooterCta() {
  return (
    <section className="pre-footer-cta section-x" aria-labelledby="pre-footer-cta-title">
      <div className="pre-footer-cta__inner container">
        <div className="pre-footer-cta__copy">
          <span className="pre-footer-cta__eyebrow">Next step</span>
          <h2 id="pre-footer-cta-title" className="pre-footer-cta__title">
            Ready to scope your next release?
          </h2>
          <p className="pre-footer-cta__description">
            Bring us a product challenge. We&apos;ll help define the clearest path from idea to launch.
          </p>
        </div>

        <div className="pre-footer-cta__actions">
          <div className="pre-footer-cta__action">
            <Link href={ROUTES.contact} className="pre-footer-cta__button pre-footer-cta__button--primary">
              Book a free audit
              <span aria-hidden="true">→</span>
            </Link>
            <p>Leave with a practical first-release plan and clear next steps.</p>
          </div>

          <div className="pre-footer-cta__action">
            <Link href="#" className="pre-footer-cta__button pre-footer-cta__button--secondary">
              Hire talent
              <span aria-hidden="true">→</span>
            </Link>
            <p>Add experienced engineering capacity without losing ownership.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
