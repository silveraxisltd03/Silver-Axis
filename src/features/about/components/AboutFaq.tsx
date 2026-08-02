'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { ABOUT_FAQ } from '../about.data';

export function AboutFaq() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(ABOUT_FAQ[0]?.id ?? null);

  return (
    <section className="services-faq section-x" aria-labelledby="about-faq-heading">
      <div className="container">
        <span className="services-faq__eyebrow">Silver Axis answers</span>
        <h2 id="about-faq-heading" className="section-heading services-faq__title">
          Frequently asked questions.
        </h2>

        <ul className="services-faq__list">
          {ABOUT_FAQ.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}-panel`;
            const buttonId = `${baseId}-${item.id}-button`;

            return (
              <li key={item.id} className={`services-faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  id={buttonId}
                  className="services-faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span className="services-faq__icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d={isOpen ? 'M5 12h14' : 'M12 5v14M5 12h14'} />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="services-faq__panel"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="services-faq__more">
          Still have more questions? <Link href={ROUTES.contact}>Contact us</Link>
        </p>
      </div>
    </section>
  );
}
