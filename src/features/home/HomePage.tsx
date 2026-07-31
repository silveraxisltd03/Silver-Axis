import Link from 'next/link';
import { ArrowUR } from '@/shared/components/ui/icons';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { VideoTestimonial } from '@/shared/components/ui/VideoTestimonial';
import { HOME_CASES } from '@/shared/content/case-studies';
import { QUOTES } from '@/shared/content/quotes';
import { projectDetailPath, projectsFilteredPath, ROUTES, serviceDetailPath } from '@/shared/constants/routes';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { css } from '@/shared/lib/css';
import { HeroCarousel } from './components/HeroCarousel';
import { ProcessShowcase } from './components/ProcessShowcase';
import { HERO_SLIDES } from './hero.data';
import { STEPS } from './home.data';

interface HomeServiceTile {
  slug: ServiceCategorySlug;
  image: string;
  imageAlt: string;
  imageFit: 'contain' | 'cover';
  title: string;
  description: string;
  titleClass?: string;
}

// Placeholder tile copy — replace with real copy.
const HOME_SERVICE_TILES: HomeServiceTile[] = [
  {
    slug: 'ai-automation',
    image: '/assets/automation-tools.png',
    imageAlt: 'AI automation illustration',
    imageFit: 'contain',
    title: 'Placeholder tile title',
    description: 'Placeholder tile description, replace with real copy.',
  },
  {
    slug: 'web-mobile',
    image: '/assets/web-and-mobile.png',
    imageAlt: 'Web and mobile illustration',
    imageFit: 'cover',
    title: 'Placeholder tile title',
    description: 'Placeholder tile description, replace with real copy.',
  },
  {
    slug: 'custom-systems',
    image: '/assets/crm-erp.png',
    imageAlt: 'CRM and ERP illustration',
    imageFit: 'cover',
    title: 'Placeholder tile title',
    description: 'Placeholder tile description, replace with real copy.',
    titleClass: 'nowrap-title',
  },
];

export function HomePage() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />

      <section id="services" className="section-x container page-section--lg">
        <Reveal className="section-header">
          <h2 className="section-heading" style={css('max-width:620px;')}>
            Placeholder section heading, replace with real copy.
          </h2>
          <p style={css('font-size:17px;line-height:1.55;color:#6b7488;max-width:340px;margin:0 0 8px;')}>
            <strong style={css('color:#0b1020;')}>Our mission:</strong> Empower businesses with technology that simplifies operations and accelerates growth.
          </p>
          <p style={css('font-size:17px;line-height:1.55;color:#6b7488;max-width:340px;margin:0;')}>
            <strong style={css('color:#0b1020;')}>Our vision:</strong> To be a global digital partner known for building software that creates lasting value.
          </p>
        </Reveal>

        <div className="grid-3">
          {HOME_SERVICE_TILES.map((tile, i) => (
            <Reveal key={tile.slug} delay={i * 90}>
              <div className="tile media-tile">
                <img
                  src={tile.image}
                  alt={tile.imageAlt}
                  className="media-tile__img"
                  style={css(`object-fit:${tile.imageFit};`)}
                />
              </div>
              <h3
                className={tile.titleClass}
                style={css(`font-size:${tile.titleClass ? '20px' : '21px'};font-weight:600;margin:24px 0 7px;color:#0b1020;letter-spacing:-.01em;`)}
              >
                {tile.title}
              </h3>
              <p style={css('font-size:15px;line-height:1.55;color:#6b7488;margin:0;')}>{tile.description}</p>
              <div className="tile-link-row">
                <Link href={serviceDetailPath(tile.slug)} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#2a6bff;')}>
                  View more<ArrowUR />
                </Link>
                <Link href={projectsFilteredPath(tile.slug)} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#2a6bff;')}>
                  View case studies<ArrowUR />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process">
        <ProcessShowcase steps={STEPS} title="From idea to a release that performs." />
      </section>

      <section id="work" className="section-x container page-section">
        <Reveal style={css('margin-bottom:clamp(40px,5vw,54px);')}>
          <h2 className="section-heading">Placeholder section heading.</h2>
        </Reveal>
        <div className="grid-2">
          {HOME_CASES.map((cs) => (
            <Reveal key={cs.slug}>
              <CaseStudyCard caseStudy={cs} to={projectDetailPath(cs.slug)} style={css('flex:1;')} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={css('display:flex;justify-content:center;margin-top:clamp(28px,4vw,40px);')}>
            <Link href={ROUTES.projects} className="cs-inline-cta__btn">
              View all projects →
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="testimonials" className="testimonials-section">
        <Reveal className="testimonials-section__header">
          <h2 className="section-heading section-heading--center">What it&rsquo;s like to work with us.</h2>
        </Reveal>
        <div className="testimonials-section__body">
          <VideoTestimonial />
          <TestimonialsMarquee quotes={QUOTES} />
        </div>
      </section>
    </>
  );
}
