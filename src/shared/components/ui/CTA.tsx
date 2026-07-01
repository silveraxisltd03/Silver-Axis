import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';

interface CTAProps {
  title: string;
  text: string;
}

export function CTA({ title, text }: CTAProps) {
  return (
    <section className="cta-section section-x">
      <div className="cta-block rv">
        <div className="cta-block__glow" aria-hidden="true" />
        <div className="cta-block__inner">
          <h2 className="cta-block__title">{title}</h2>
          <p className="cta-block__text">{text}</p>
          <Link to={ROUTES.contact} className="btnW cta-block__btn">
            Book your free audit
          </Link>
        </div>
      </div>
    </section>
  );
}
