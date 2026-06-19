import { Check } from '@/shared/components/ui/icons';
import { css } from '@/shared/lib/css';

interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <div style={css('display:flex;flex-direction:column;gap:13px;')}>
      {items.map((t, i) => (
        <div key={i} style={css('display:flex;align-items:flex-start;gap:11px;')}>
          <Check />
          <span style={css('font-size:15.5px;color:#2b3346;')}>{t}</span>
        </div>
      ))}
    </div>
  );
}
