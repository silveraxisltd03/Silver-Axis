import { Reveal } from '@/shared/components/ui/Reveal';
import { CONTACT_INTRO, CONTACT_STATS } from '../contact.data';
import { OpsDashboardGraphic } from './OpsDashboardGraphic';

export function ContactIntro() {
  return (
    <section className="contact-intro section-x" aria-labelledby="contact-intro-heading">
      <div className="container contact-intro__grid">
        <Reveal className="contact-intro__copy">
          <div className="contact-intro__eyebrow-row">
            <span className="contact-intro__bar" aria-hidden="true" />
            <span className="contact-intro__eyebrow">{CONTACT_INTRO.eyebrow}</span>
          </div>

          <h2 id="contact-intro-heading" className="contact-intro__title">
            {CONTACT_INTRO.titleLead}
            <span className="contact-intro__title-accent">{CONTACT_INTRO.titleAccent}</span>
          </h2>

          <p className="contact-intro__body">{CONTACT_INTRO.body}</p>

          <ol className="contact-intro__steps">
            {CONTACT_INTRO.steps.map((step) => (
              <li key={step.n} className="contact-intro__step">
                <span className="contact-intro__step-n" aria-hidden="true">
                  {step.n}
                </span>
                <div className="contact-intro__step-copy">
                  <h3 className="contact-intro__step-title">{step.title}</h3>
                  <p className="contact-intro__step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="contact-intro__visual" delay={80}>
          <OpsDashboardGraphic />
          <span className="contact-intro__visual-label">{CONTACT_INTRO.visualLabel}</span>
        </Reveal>
      </div>

      <div className="container">
        <dl className="contact-stats">
          {CONTACT_STATS.map((stat) => (
            <div key={stat.label} className="contact-stats__item">
              <dt className="contact-stats__value">{stat.value}</dt>
              <dd className="contact-stats__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
