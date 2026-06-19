import { useState } from 'react';
import type { ProcessStep } from '@/shared/types';
import { css } from '@/shared/lib/css';

interface ProcessAccordionProps {
  steps: ProcessStep[];
}

export function ProcessAccordion({ steps }: ProcessAccordionProps) {
  const [open, setOpen] = useState(0);

  return (
    <div style={css('display:flex;flex-direction:column;')}>
      {steps.map((s, i) => (
        <div key={s.title} style={css('border-bottom:1px solid #e8ecf3;')}>
          <button
            type="button"
            className="accordion-btn"
            aria-expanded={open === i}
            onClick={() => setOpen(i)}
          >
            <span style={css('font-size:13px;color:#2a6bff;font-weight:600;width:26px;')}>{String(i + 1).padStart(2, '0')}</span>
            <span style={css('font-size:21px;font-weight:600;color:#0b1020;letter-spacing:-.01em;flex:1;')}>{s.title}</span>
            <span style={css('font-size:22px;color:#aab1c0;font-weight:300;')} aria-hidden="true">{open === i ? '\u2212' : '+'}</span>
          </button>
          {open === i && (
            <div style={css('padding:0 2px 24px 44px;')}>
              <p style={css('font-size:16px;line-height:1.6;color:#6b7488;margin:0;max-width:440px;')}>{s.desc}</p>
              <div style={css('height:2px;width:60px;background:#2a6bff;border-radius:2px;margin-top:18px;')} aria-hidden="true"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
