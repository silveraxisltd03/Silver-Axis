import { ContactFormPanel } from './components/ContactFormPanel';
import { ContactHero } from './components/ContactHero';
import { ContactIntro } from './components/ContactIntro';
import { ContactSidebar } from './components/ContactSidebar';
import { CONTACT_FORM_HEADING } from './contact.data';

export function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactIntro />

      <section className="contact-connect section-x" aria-labelledby="contact-connect-heading">
        <div className="container">
          <div className="contact-connect__head">
            <div className="contact-intro__eyebrow-row">
              <span className="contact-intro__bar" aria-hidden="true" />
              <span className="contact-intro__eyebrow">{CONTACT_FORM_HEADING.eyebrow}</span>
            </div>
            <h2 id="contact-connect-heading" className="contact-form-block__title">
              {CONTACT_FORM_HEADING.titleLead}{' '}
              <span className="contact-hero__accent">{CONTACT_FORM_HEADING.titleAccent}</span>
            </h2>
          </div>

          <div className="contact-connect__grid">
            <ContactFormPanel />
            <ContactSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
