import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import type { ServiceDetailContent } from '../types';

interface DetailHeroProps {
  content: ServiceDetailContent;
}

export function DetailHero({ content }: DetailHeroProps) {
  const { hero, crumb, visual } = content;

  return (
    <section className="svc-detail-hero">
      <div className="svc-detail-hero__glow" aria-hidden="true" />

      <div className="section-x container svc-detail-hero__inner">
        <nav className="svc-detail-hero__crumbs" aria-label="Breadcrumb">
          <Link href={ROUTES.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={ROUTES.services}>Services</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>

        <div className="svc-detail-hero__grid">
          <div className="svc-detail-hero__copy">
            <span className="svc-detail-hero__eyebrow">{hero.eyebrow}</span>
            <h1 className="svc-detail-hero__title">{hero.title}</h1>
            <p className="svc-detail-hero__body">{hero.body}</p>
            <ul className="svc-detail-hero__highlights">
              {hero.highlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="svc-detail-hero__actions">
              <Link href={ROUTES.contact} className="svc-detail-hero__btn">
                Talk to the team
              </Link>
            </div>
          </div>

          <div className="svc-detail-hero__aside">
            <div className="svc-detail-hero__media">
              <Image
                src={visual.image}
                alt={visual.imageAlt}
                width={960}
                height={540}
                priority
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
