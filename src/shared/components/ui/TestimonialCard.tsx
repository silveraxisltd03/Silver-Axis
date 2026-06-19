import type { Quote } from '@/shared/types';
import { css } from '@/shared/lib/css';

interface TestimonialCardProps {
  quote: Quote;
  className?: string;
}

export function TestimonialCard({ quote: q, className = '' }: TestimonialCardProps) {
  return (
    <div className={`tile ${className}`.trim()} style={css('border-radius:24px;padding:32px;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#f1f5ff 0%,#ffffff 70%);box-shadow:0 14px 40px rgba(28,50,110,.07);display:flex;flex-direction:column;')}>
      <p style={css('font-size:16.5px;line-height:1.62;color:#2b3346;margin:0 0 28px;flex:1;')}>&ldquo;{q.text}&rdquo;</p>
      <div style={css('display:flex;align-items:center;gap:12px;')}>
        <div style={css('width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#c7d4f5,#9fb6f5);flex:none;')} aria-hidden="true"></div>
        <div>
          <div style={css('font-size:14.5px;font-weight:600;color:#0b1020;')}>{q.name}</div>
          <div style={css('font-size:12.5px;color:#9aa3b8;')}>{q.role}</div>
        </div>
      </div>
    </div>
  );
}
