import { ContactFormPanel } from './components/ContactFormPanel';
import { ContactHero } from './components/ContactHero';
import { ContactIntro } from './components/ContactIntro';
import { ContactSidebar } from './components/ContactSidebar';

export function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactIntro />

      <section className="contact-connect section-x" aria-labelledby="contact-connect-heading">
        <div className="container contact-connect__grid">
          <ContactFormPanel />
          <ContactSidebar />
        </div>
      </section>
    </div>
  );
}
