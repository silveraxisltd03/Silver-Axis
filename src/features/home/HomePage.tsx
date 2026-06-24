import { Link } from 'react-router-dom';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { CTA } from '@/shared/components/ui/CTA';
import { ArrowUR } from '@/shared/components/ui/icons';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { CertificationsBar } from '@/shared/components/ui/CertificationsBar';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialCard } from '@/shared/components/ui/TestimonialCard';
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
      'We wire your tools together with webhooks and queues, then let AI agents run the repetitive work — with retries, logging and human approval where it counts.',
  },
  {
    slug: 'web-mobile',
    image: '/assets/web-and-mobile.png',
    imageAlt: 'Web and mobile portfolio designs on laptop and phone',
    imageFit: 'cover',
    title: 'Web & mobile, done right',
    description:
      'Native iOS and Android plus a React web app on one typed codebase — cached, instrumented and built to stay fast as traffic climbs.',
  },
  {
    slug: 'custom-systems',
    image: '/assets/crm-erp.png',
    imageAlt: 'CRM and ERP dashboard on laptop and phone',
    imageFit: 'cover',
    title: 'CRMs, ERPs & internal tools',
    description:
      'CRMs, ERPs and dashboards on a clean schema with role-based access — shaped around your workflow, not a template you bend to fit.',
    titleClass: 'nowrap-title',
  },
];

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Home"
        description="Silver Axis — AI automation and custom software. We automate, build, and scale your software."
      />

      {/* HERO: AXIS */}
      <section id="hero" style={css('position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 24px 90px;overflow:hidden;background:#070b16;')}>
        <div style={css('position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(92vw,820px);height:min(92vw,820px);pointer-events:none;')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(42,107,255,.2);animation:spinSlow 60s linear infinite;')}></div>
          <div style={css('position:absolute;inset:9%;border-radius:50%;border:1px dashed rgba(42,107,255,.26);animation:spinRev 45s linear infinite;')}></div>
          <div style={css('position:absolute;inset:20%;border-radius:50%;border:1px solid rgba(255,255,255,.07);animation:spinSlow 38s linear infinite;')}></div>
          <div style={css('position:absolute;inset:33%;border-radius:50%;border:1px dashed rgba(42,107,255,.32);animation:spinRev 28s linear infinite;')}></div>
          <div style={css('position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(42,107,255,.32) 0%,transparent 64%);')}></div>
        </div>
        <div style={css('position:absolute;inset:0;background:linear-gradient(180deg,transparent 0%,transparent 70%,#070b16 98%);pointer-events:none;')}></div>
        <div style={css('position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;max-width:920px;')}>
          <h1 className="hero-headline" style={css("font-size:clamp(42px,6.4vw,88px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.04;letter-spacing:-.02em;font-weight:500;margin:0 0 26px;color:#fff;")}>
            <span className="hero-headline__line1">We automate, build, and</span>
            <br className="hero-headline__break" />
            scale your software.
          </h1>
          <p style={css('font-size:clamp(17px,1.6vw,21px);line-height:1.55;color:#9aa3b8;max-width:600px;margin:0 0 42px;')}>The right blend of AI and engineering — we automate what should be, build the rest by hand, and ship web and mobile systems that scale to millions of users.</p>
          <div style={css('display:flex;gap:14px;flex-wrap:wrap;justify-content:center;')}>
            <Link to={ROUTES.contact} className="btnW" style={css('background:#fff;color:#070b16;font-size:15.5px;font-weight:600;padding:17px 36px;border-radius:999px;')}>Book a free audit</Link>
            <Link to={ROUTES.projects} className="btnG" style={css('background:rgba(255,255,255,.05);color:#eef1f8;font-size:15.5px;font-weight:500;padding:17px 36px;border-radius:999px;border:1px solid rgba(255,255,255,.16);')}>See our work</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-x container" style={css('padding:120px 0 70px;')}>
        <Reveal style={css('margin-bottom:60px;')}>
          <div style={css('display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:28px;')}>
            <h2 style={css("font-size:clamp(32px,4.2vw,58px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;max-width:620px;")}>We start with the problem,<br />not the tech.</h2>
            <p style={css('font-size:17px;line-height:1.55;color:#6b7488;max-width:330px;margin:0 0 8px;')}>Sometimes the fix is automation. Sometimes a system built from scratch. Usually a bit of both.</p>
          </div>
        </Reveal>

        <div className="grid-3">
          {HOME_SERVICE_TILES.map((tile, i) => (
            <Reveal key={tile.slug} delay={i * 90}>
              <div className="tile" style={css('position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:rgb(212,227,251);box-shadow:0 14px 40px rgba(28,50,110,.08);height:300px;')}>
                <img
                  src={tile.image}
                  alt={tile.imageAlt}
                  style={css(`width:100%;height:100%;object-fit:${tile.imageFit};display:block;`)}
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

      {/* PROCESS */}
      <section id="process" style={css('background:linear-gradient(180deg,#fff 0%,#f6f9ff 45%,#f6f9ff 55%,#fff 100%);')}>
        <ProcessShowcase steps={STEPS} title="The hard part is figuring it out first." />
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section-x container" style={css('padding:80px 0;')}>
        <Reveal style={css('margin-bottom:54px;')}>
          <h2 style={css("font-size:clamp(32px,4.2vw,56px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;")}>A few things we&rsquo;ve shipped.</h2>
        </Reveal>
        <div className="grid-2">
          {HOME_CASES.map((cs) => (
            <Reveal key={cs.slug}>
              <CaseStudyCard caseStudy={cs} to={projectDetailPath(cs.slug)} style={css('flex:1;')} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div style={css('display:flex;justify-content:center;margin-top:40px;')}>
            <Link to={ROUTES.projects} className="cs-inline-cta__btn">
              View all projects →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-x container" style={css('padding:80px 0 40px;')}>
        <Reveal style={css('margin:0 auto 54px;text-align:center;display:flex;flex-direction:column;align-items:center;')}>
          <h2 style={css("font-size:clamp(32px,4.2vw,52px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.07;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;")}>What it&rsquo;s like to work with us.</h2>
        </Reveal>
        <div className="grid-3">
          {QUOTES.map((q) => (
            <Reveal key={q.name + q.role}>
              <TestimonialCard quote={q} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-x container" style={css('padding:20px 0 48px;')}>
        <Reveal>
          <CertificationsBar />
        </Reveal>
      </section>

      <CTA title="Start with a free audit." text="Tell us where things are slow or breaking. We will show you what to automate, what to rebuild, and what to leave alone." />
    </>
  );
}
