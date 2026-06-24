import type React from 'react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '@/shared/types';
import { TechPill } from '@/shared/components/ui/TechPill';
import { css } from '@/shared/lib/css';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  to: string;
  imageHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function CaseStudyCard({ caseStudy: cs, to, imageHeight = 250, className = '', style: styleProp }: CaseStudyCardProps) {
  return (
    <Link
      to={to}
      className={`tile ${className}`.trim()}
      style={{ ...css(`display:flex;flex-direction:column;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:#fff;box-shadow:0 14px 40px rgba(28,50,110,.08);`), ...styleProp }}
    >
      <div style={css(`position:relative;height:${imageHeight}px;overflow:hidden;background:${cs.thumbnail ? '#0b1020' : 'linear-gradient(165deg,#e9eeff 0%,#f7f9ff 70%)'};display:flex;align-items:flex-end;padding:24px;`)}>
        {cs.thumbnail ? (
          <img
            src={cs.thumbnail}
            alt={cs.title}
            style={css('position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;display:block;')}
            loading="lazy"
          />
        ) : (
          <>
            <div style={css('position:absolute;inset:0;background:radial-gradient(circle at 74% 20%,rgba(42,107,255,.16),transparent 56%);')}></div>
            <span style={css('font-family:ui-monospace,monospace;font-size:11px;color:#9aa3b8;position:relative;')}>[ {cs.shot} ]</span>
          </>
        )}
      </div>
      <div style={css('padding:28px 30px 32px;flex:1;display:flex;flex-direction:column;')}>
        <span style={css('font-size:13px;color:#2a6bff;font-weight:600;')}>{cs.tag}</span>
        <h3 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:24px;font-weight:500;margin:10px 0 8px;color:#0b1020;letter-spacing:-.015em;")}>{cs.title}</h3>
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
