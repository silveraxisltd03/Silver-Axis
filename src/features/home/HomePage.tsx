import { Link } from 'react-router-dom';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { ArrowUR } from '@/shared/components/ui/icons';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { HOME_CASES } from '@/shared/content/case-studies';
import { QUOTES } from '@/shared/content/quotes';
import { projectDetailPath, projectsFilteredPath, ROUTES, serviceDetailPath } from '@/shared/constants/routes';
import type { ServiceCategorySlug } from '@/shared/constants/categories';
import { css } from '@/shared/lib/css';
import { ProcessShowcase } from './components/ProcessShowcase';
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

const HOME_SERVICE_TILES: HomeServiceTile[] = [
  {
    slug: 'ai-automation',
    image: '/assets/automation-tools.png',
    imageAlt: 'Familiar tools connected through one automation layer',
    imageFit: 'contain',
    title: 'Automate the busywork',
    description:
      'We wire your tools together with webhooks and queues, then let AI agents run the repetitive work, with retries, logging, and human approval where it counts.',
  },
  {
    slug: 'web-mobile',
    image: '/assets/web-and-mobile.png',
    imageAlt: 'Web and mobile portfolio designs on laptop and phone',
    imageFit: 'cover',
    title: 'Web & mobile, done right',
    description:
      'Native iOS and Android plus a React web app on one typed codebase, cached, instrumented, and built to stay fast as traffic climbs.',
  },
  {
    slug: 'custom-systems',
    image: '/assets/crm-erp.png',
    imageAlt: 'CRM and ERP dashboard on laptop and phone',
    imageFit: 'cover',
    title: 'CRMs, ERPs & internal tools',
    description:
      'CRMs, ERPs and dashboards on a clean schema with role-based access, shaped around your workflow, not a template you bend to fit.',
    titleClass: 'nowrap-title',
  },
];

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Silver Axis: AI automation and custom software. We automate, build, and scale your software."
      />

      <section id="hero" className="home-hero">
        <div className="home-hero__rings" aria-hidden="true">
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(42,107,255,.2);animation:spinSlow 60s linear infinite;')} />
          <div style={css('position:absolute;inset:9%;border-radius:50%;border:1px dashed rgba(42,107,255,.26);animation:spinRev 45s linear infinite;')} />
          <div style={css('position:absolute;inset:20%;border-radius:50%;border:1px solid rgba(255,255,255,.07);animation:spinSlow 38s linear infinite;')} />
          <div style={css('position:absolute;inset:33%;border-radius:50%;border:1px dashed rgba(42,107,255,.32);animation:spinRev 28s linear infinite;')} />
          <div className="home-hero__glow" />
        </div>
        <div className="home-hero__fade" aria-hidden="true" />
        <div className="home-hero__content">
          <h1 className="hero-headline home-hero__headline">
            <span className="hero-headline__line1">We automate, build, and</span>
            <br className="hero-headline__break" />
            scale your software.
          </h1>
          <p className="home-hero__sub">The right blend of AI and engineering. We automate what should be, build the rest by hand, and ship web and mobile systems that scale to millions of users.</p>
          <div className="home-hero__actions">
            <Link to={ROUTES.contact} className="btnW btn-hero-primary">Book a free audit</Link>
            <Link to={ROUTES.projects} className="btnG btn-hero-secondary">See our work</Link>
          </div>
        </div>
      </section>

      <section id="services" className="section-x container page-section--lg">
        <Reveal className="section-header">
          <h2 className="section-heading" style={css('max-width:620px;')}>
            We start with the problem,
            <br />
            not the tech.
          </h2>
          <p style={css('font-size:17px;line-height:1.55;color:#6b7488;max-width:330px;margin:0 0 8px;')}>Sometimes the fix is automation. Sometimes a system built from scratch. Usually a bit of both.</p>
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
                <Link to={serviceDetailPath(tile.slug)} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#2a6bff;')}>
                  View more<ArrowUR />
                </Link>
                <Link to={projectsFilteredPath(tile.slug)} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:600;color:#2a6bff;')}>
                  View case studies<ArrowUR />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" style={css('background:linear-gradient(180deg,#fff 0%,#f6f9ff 45%,#f6f9ff 55%,#fff 100%);')}>
        <ProcessShowcase steps={STEPS} title="The hard part is figuring it out first." />
      </section>

      <section id="work" className="section-x container page-section">
        <Reveal style={css('margin-bottom:clamp(40px,5vw,54px);')}>
          <h2 className="section-heading">A few things we&rsquo;ve shipped.</h2>
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
            <Link to={ROUTES.projects} className="cs-inline-cta__btn">
              View all projects →
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="testimonials" className="testimonials-section">
        <Reveal className="testimonials-section__header">
          <h2 className="section-heading section-heading--center">What it&rsquo;s like to work with us.</h2>
        </Reveal>
        <TestimonialsMarquee quotes={QUOTES} />
      </section>
    </>
  );
}
