'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import type { ServiceFaqItem } from '../types';

interface DetailFaqProps {
  items: ServiceFaqItem[];
}

export function DetailFaq({ items }: DetailFaqProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section className="svc-detail-faq section-x" aria-labelledby="svc-detail-faq-heading">
      <div className="container">
        <span className="svc-eyebrow">FAQ</span>
        <h2 id="svc-detail-faq-heading" className="svc-heading">
          Frequently asked questions
        </h2>

        <ul className="svc-detail-faq__list">
          {items.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${baseId}-${item.id}-panel`;
            const buttonId = `${baseId}-${item.id}-button`;

            return (
              <li key={item.id} className={`svc-detail-faq__item${isOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  id={buttonId}
                  className="svc-detail-faq__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <span className="svc-detail-faq__icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d={isOpen ? 'M5 12h14' : 'M12 5v14M5 12h14'} />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="svc-detail-faq__panel"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="svc-detail-faq__more">
          Still have more questions? <Link href={ROUTES.contact}>Contact us</Link>
        </p>
      </div>
    </section>
  );
}
