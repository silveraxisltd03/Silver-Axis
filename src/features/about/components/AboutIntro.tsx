import { Reveal } from '@/shared/components/ui/Reveal';
import { ABOUT_INTRO } from '../about.data';

export function AboutIntro() {
  return (
    <section className="about-intro section-x" aria-labelledby="about-intro-heading">
      <div className="container about-intro__grid">
        <Reveal className="about-intro__visual">
          <img src={ABOUT_INTRO.image} alt={ABOUT_INTRO.imageAlt} loading="lazy" />
        </Reveal>

        <Reveal className="about-intro__copy" delay={80}>
          <div className="about-intro__eyebrow-row">
            <span className="about-intro__bar" aria-hidden="true" />
            <span className="about-intro__eyebrow">{ABOUT_INTRO.eyebrow}</span>
          </div>
          <h2 id="about-intro-heading" className="about-intro__title">
            {ABOUT_INTRO.title}
          </h2>
          <p className="about-intro__body">{ABOUT_INTRO.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
