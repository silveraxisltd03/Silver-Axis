import type { StatItem } from '@/shared/types';
import { css } from '@/shared/lib/css';

interface StatsRowProps {
  stats: StatItem[];
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="grid-4">
      {stats.map((s, i) => (
        <div key={s.l} className={i < stats.length - 1 ? 'stat-item--divider' : undefined}>
          <div style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(34px,4vw,50px);font-weight:500;color:#0b1020;letter-spacing:-.02em;")}>{s.v}</div>
          <div style={css('font-size:14px;color:#6b7488;margin-top:4px;')}>{s.l}</div>
        </div>
      ))}
    </div>
  );
}
