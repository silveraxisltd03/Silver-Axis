export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  introduction: string;
  sections: LegalSection[];
}

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <article className="legal-page section-x">
      <div className="legal-page__inner">
        <header className="legal-page__header">
          <span className="legal-page__eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="legal-page__date">Effective date: {effectiveDate}</p>
          <p className="legal-page__intro">{introduction}</p>
        </header>

        <nav className="legal-page__toc" aria-label={`${title} sections`}>
          <span>On this page</span>
          <ol>
            {sections.map((section, index) => (
              <li key={section.title}>
                <a href={`#${sectionId(section.title)}`}>
                  {String(index + 1).padStart(2, '0')} {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="legal-page__content">
          {sections.map((section, index) => (
            <section id={sectionId(section.title)} key={section.title}>
              <h2>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
