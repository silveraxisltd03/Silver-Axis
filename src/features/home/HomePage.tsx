import Link from 'next/link';
import { CaseStudyCard } from '@/shared/components/ui/CaseStudyCard';
import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { VideoTestimonial } from '@/shared/components/ui/VideoTestimonial';
import { HOME_CASES } from '@/shared/content/case-studies';
import { QUOTES } from '@/shared/content/quotes';
import { projectDetailPath, ROUTES } from '@/shared/constants/routes';
import { css } from '@/shared/lib/css';
import { HeroCarousel } from './components/HeroCarousel';
import { FeaturedInsights } from './components/FeaturedInsights';
import { ProcessShowcase } from './components/ProcessShowcase';
import { ServicesShowcase } from './components/ServicesShowcase';
import { HERO_SLIDES } from './hero.data';
import { STEPS } from './home.data';

export function HomePage() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />

      <ServicesShowcase />

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

      <FeaturedInsights />

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
