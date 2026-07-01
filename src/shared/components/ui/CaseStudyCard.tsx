import type React from 'react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '@/shared/types';
import { TechPill } from '@/shared/components/ui/TechPill';
import { css } from '@/shared/lib/css';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

export function CaseStudyCard({ caseStudy: cs, to, className = '', style: styleProp }: CaseStudyCardProps) {
  return (
    <Link
      to={to}
      className={`tile case-study-card ${className}`.trim()}
      style={styleProp}
    >
      <div
        className={`case-study-card__media ${cs.thumbnail ? 'case-study-card__media--photo' : 'case-study-card__media--placeholder'}`}
      >
        {cs.thumbnail ? (
          <img
            src={cs.thumbnail}
            alt={cs.title}
            style={css('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;display:block;')}
            loading="lazy"
          />
        ) : (
          <>
            <div style={css('position:absolute;inset:0;background:radial-gradient(circle at 74% 20%,rgba(42,107,255,.16),transparent 56%);')} />
            <span style={css('font-family:ui-monospace,monospace;font-size:11px;color:#9aa3b8;position:relative;')}>[ {cs.shot} ]</span>
          </>
        )}
      </div>
      <div className="case-study-card__body">
        <span style={css('font-size:13px;color:#2a6bff;font-weight:600;')}>{cs.tag}</span>
        <h3 className="case-study-card__title">{cs.title}</h3>
        <p style={css('font-size:15px;line-height:1.6;color:#6b7488;margin:0 0 22px;')}>{cs.desc}</p>
        {cs.tools && cs.tools.length > 0 && (
          <div style={css('display:flex;flex-wrap:wrap;gap:7px;')}>
            {cs.tools.slice(0, 5).map((tool) => (
              <TechPill key={tool} name={tool} size="sm" />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
