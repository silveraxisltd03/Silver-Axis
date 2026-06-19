import { Link } from 'react-router-dom';
import type { CaseStudy } from '@/shared/types';
import { css } from '@/shared/lib/css';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  to: string;
  imageHeight?: number;
  className?: string;
}

export function CaseStudyCard({ caseStudy: cs, to, imageHeight = 250, className = '' }: CaseStudyCardProps) {
  return (
    <Link
      to={to}
      className={`tile ${className}`.trim()}
      style={css(`display:block;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:#fff;box-shadow:0 14px 40px rgba(28,50,110,.08);`)}
    >
      <div style={css(`position:relative;height:${imageHeight}px;background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 70%);display:flex;align-items:flex-end;padding:24px;`)}>
        <div style={css('position:absolute;inset:0;background:radial-gradient(circle at 74% 20%,rgba(42,107,255,.16),transparent 56%);')}></div>
        <span style={css('font-family:ui-monospace,monospace;font-size:11px;color:#9aa3b8;position:relative;')}>[ {cs.shot} ]</span>
      </div>
      <div style={css('padding:28px 30px 32px;')}>
        <span style={css('font-size:13px;color:#2a6bff;font-weight:600;')}>{cs.tag}</span>
        <h3 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:24px;font-weight:500;margin:10px 0 8px;color:#0b1020;letter-spacing:-.015em;")}>{cs.title}</h3>
        <p style={css('font-size:15px;line-height:1.6;color:#6b7488;margin:0 0 22px;')}>{cs.desc}</p>
        <div style={css('display:flex;gap:36px;')}>
          <div><div style={css('font-size:27px;font-weight:600;color:#0b1020;letter-spacing:-.02em;')}>{cs.m1v}</div><div style={css('font-size:12.5px;color:#9aa3b8;margin-top:2px;')}>{cs.m1l}</div></div>
          <div><div style={css('font-size:27px;font-weight:600;color:#0b1020;letter-spacing:-.02em;')}>{cs.m2v}</div><div style={css('font-size:12.5px;color:#9aa3b8;margin-top:2px;')}>{cs.m2l}</div></div>
        </div>
      </div>
    </Link>
  );
}
