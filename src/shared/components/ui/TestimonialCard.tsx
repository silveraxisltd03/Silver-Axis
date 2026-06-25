import type { Quote } from '@/shared/types';
import { css } from '@/shared/lib/css';

const FLAG_EMOJI: Record<string, string> = {
  sa: '🇸🇦', gb: '🇬🇧', us: '🇺🇸', ae: '🇦🇪',
  de: '🇩🇪', fr: '🇫🇷', pk: '🇵🇰', ca: '🇨🇦',
  au: '🇦🇺', nl: '🇳🇱', sg: '🇸🇬',
};

interface TestimonialCardProps {
  quote: Quote;
  className?: string;
}

export function TestimonialCard({ quote: q, className = '' }: TestimonialCardProps) {
  const flag = q.countryCode ? FLAG_EMOJI[q.countryCode] : null;

  return (
    <div className={`tile testimonial-card ${className}`.trim()}>
      <p style={css('font-size:16.5px;line-height:1.62;color:#2b3346;margin:0 0 28px;flex:1;')}>&ldquo;{q.text}&rdquo;</p>
      <div>
        <div style={css('font-size:14.5px;font-weight:600;color:#0b1020;')}>{q.name}</div>
        {flag && <div style={css('font-size:16px;margin-top:4px;line-height:1;')}>{flag}</div>}
      </div>
    </div>
  );
}
