'use client';

import { ArrowRight } from '@/shared/components/ui/icons';
import { openCalendly } from '@/features/contact/lib/calendly';
import { HOW_WE_DELIVER } from '../services.data';

export function HowWeDeliver() {
  return (
    <section className="how-deliver section-x" aria-label={HOW_WE_DELIVER.eyebrow}>
      <div className="container how-deliver__inner">
        <p className="how-deliver__eyebrow">{HOW_WE_DELIVER.eyebrow}</p>

        <ul className="how-deliver__metrics">
          {HOW_WE_DELIVER.metrics.map((metric) => (
            <li key={metric.label} className="how-deliver__metric">
              <span className="how-deliver__value">{metric.value}</span>
              <span className="how-deliver__label">{metric.label}</span>
            </li>
          ))}
        </ul>

        <button type="button" className="how-deliver__cta" onClick={openCalendly}>
          {HOW_WE_DELIVER.ctaLabel}
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
