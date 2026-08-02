import { Reveal } from '@/shared/components/ui/Reveal';
import { TestimonialsMarquee } from '@/shared/components/ui/TestimonialsMarquee';
import { VideoTestimonial } from '@/shared/components/ui/VideoTestimonial';
import { QUOTES } from '@/shared/content/quotes';
import { HeroCarousel } from './components/HeroCarousel';
import { FeaturedInsights } from './components/FeaturedInsights';
import { HowWeOperate } from './components/HowWeOperate';
import { LogoCloud } from './components/LogoCloud';
import { ProcessShowcase } from './components/ProcessShowcase';
import { ServicesShowcase } from './components/ServicesShowcase';
import { HERO_SLIDES } from './hero.data';
import { STEPS } from './home.data';

export function HomePage() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />

      <LogoCloud />

      <HowWeOperate />

      <ServicesShowcase />

      <section id="process">
        <ProcessShowcase steps={STEPS} title="From idea to a release that performs." />
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
