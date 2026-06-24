import type { Quote } from '@/shared/types';
import { css } from '@/shared/lib/css';

interface Props {
  quotes: Quote[];
}

export function TestimonialsMarquee({ quotes }: Props) {
  const items = [...quotes, ...quotes, ...quotes];

  return (
    <div className="marquee-outer" aria-label="Client testimonials">
      <div className="marquee-track">
        {items.map((q, i) => (
          <div key={i} className="marquee-card">
            <p style={css('font-size:15px;line-height:1.65;color:#2b3346;margin:0;flex:1;')}>
              &ldquo;{q.text}&rdquo;
            </p>
            <div style={css('display:flex;align-items:center;gap:10px;margin-top:16px;flex-shrink:0;')}>
              {q.countryCode && (
                <img
                  src={`https://flagcdn.com/24x18/${q.countryCode}.png`}
                  width={24}
                  height={18}
                  alt={q.country ?? q.countryCode}
                  style={css('border-radius:2px;flex-shrink:0;')}
                  loading="lazy"
                />
              )}
              <div>
                <div style={css('font-size:13.5px;font-weight:600;color:#0b1020;')}>{q.name}</div>
                {q.country && (
                  <div style={css('font-size:11.5px;color:#9aa3b8;margin-top:1px;')}>{q.country}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
