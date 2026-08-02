import { CONTACT_INTRO, CONTACT_STATS } from '../contact.data';
import { OpsDashboardGraphic } from './OpsDashboardGraphic';

export function ContactIntro() {
  return (
    <section className="contact-intro section-x">
      <div className="container contact-intro__grid">
        <div className="contact-intro__visual">
          <OpsDashboardGraphic />
          <span className="contact-intro__visual-label">{CONTACT_INTRO.eyebrow}</span>
        </div>

        <div className="contact-intro__copy">
          <div className="contact-intro__eyebrow-row">
            <span className="contact-intro__bar" aria-hidden="true" />
            <span className="contact-intro__eyebrow">How we start</span>
          </div>
          <h2 className="contact-intro__title">{CONTACT_INTRO.title}</h2>
          <p className="contact-intro__body">{CONTACT_INTRO.body}</p>

          <ol className="contact-intro__steps">
            {CONTACT_INTRO.steps.map((step) => (
              <li key={step.n} className="contact-intro__step">
                <span className="contact-intro__step-n">{step.n}</span>
                <div>
                  <h3 className="contact-intro__step-title">{step.title}</h3>
                  <p className="contact-intro__step-desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="container contact-stats">
        {CONTACT_STATS.map((stat) => (
          <div key={stat.label} className="contact-stats__item">
            <span className="contact-stats__value">{stat.value}</span>
            <span className="contact-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
