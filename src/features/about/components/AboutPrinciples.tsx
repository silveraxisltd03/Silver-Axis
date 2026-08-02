import { Reveal } from '@/shared/components/ui/Reveal';
import { ABOUT_PRINCIPLES } from '../about.data';

export function AboutPrinciples() {
  return (
    <section className="about-principles section-x" aria-labelledby="about-principles-heading">
      <div className="container">
        <Reveal>
          <span className="about-principles__eyebrow">{ABOUT_PRINCIPLES.eyebrow}</span>
          <h2 id="about-principles-heading" className="about-principles__title">
            {ABOUT_PRINCIPLES.title}
          </h2>
        </Reveal>

        <ul className="about-principles__list">
          {ABOUT_PRINCIPLES.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 50} className="about-principles__reveal">
              <li className="about-principles__row">
                <h3 className="about-principles__name">{item.title}</h3>
                <p className="about-principles__body">{item.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
