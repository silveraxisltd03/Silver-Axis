import { useState } from 'react';
import type { ProcessStep } from '@/shared/types';
import { css } from '@/shared/lib/css';

interface ProcessAccordionProps {
  steps: ProcessStep[];
  active?: number;
  onChange?: (index: number) => void;
}

export function ProcessAccordion({ steps, active: controlledActive, onChange }: ProcessAccordionProps) {
  const [internalActive, setInternalActive] = useState(0);
  const isControlled = controlledActive !== undefined;
  const open = isControlled ? controlledActive : internalActive;

  const setOpen = (index: number) => {
    if (!isControlled) setInternalActive(index);
    onChange?.(index);
  };

  return (
    <div className="process-accordion" style={css('display:flex;flex-direction:column;')}>
      {steps.map((s, i) => {
        const isOpen = open === i;
        return (
          <div
            key={s.title}
            className={`process-accordion__item${isOpen ? ' process-accordion__item--open' : ''}`}
            style={css('border-bottom:1px solid #e8ecf3;')}
          >
            <button
              type="button"
              className="accordion-btn"
              aria-expanded={isOpen}
              onClick={() => setOpen(i)}
            >
              <span style={css('font-size:13px;color:#2a6bff;font-weight:600;width:26px;')}>{String(i + 1).padStart(2, '0')}</span>
              <span style={css('font-size:21px;font-weight:600;color:#0b1020;letter-spacing:-.01em;flex:1;text-align:left;')}>{s.title}</span>
              <span className="process-accordion__icon" aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
            </button>
            <div className={`process-accordion__panel${isOpen ? ' process-accordion__panel--open' : ''}`}>
              <div className="process-accordion__panel-inner">
                <p style={css('font-size:16px;line-height:1.6;color:#6b7488;margin:0;max-width:440px;')}>{s.desc}</p>
                <div className="process-accordion__accent" aria-hidden="true" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
