import { Reveal } from '@/shared/components/ui/Reveal';
import { CodeIcon, PencilIcon, RocketIcon, TargetIcon } from '@/shared/components/ui/icons';

interface StackBadge {
  label: string;
  Icon: typeof TargetIcon;
  position: 'top-left' | 'right' | 'left' | 'bottom-right';
}

const BADGES: StackBadge[] = [
  { label: 'Strategy & Planning', Icon: TargetIcon, position: 'top-left' },
  { label: 'Design & Experience', Icon: PencilIcon, position: 'right' },
  { label: 'Development', Icon: CodeIcon, position: 'left' },
  { label: 'Launch & Scale', Icon: RocketIcon, position: 'bottom-right' },
];

export function ProcessStack() {
  return (
    <Reveal className="process-stack">
      <div className="process-stack__panel process-stack__panel--top">
        <span className="process-stack__chip process-stack__chip--a" />
        <span className="process-stack__chip process-stack__chip--b" />
        <span className="process-stack__dot" />
      </div>
      <div className="process-stack__panel process-stack__panel--mid">
        <span className="process-stack__line" />
        <span className="process-stack__line process-stack__line--sm" />
      </div>
      <div className="process-stack__panel process-stack__panel--bottom">
        <span className="process-stack__block" />
      </div>

      {BADGES.map(({ label, Icon, position }) => (
        <div key={label} className={`process-stack__badge process-stack__badge--${position}`}>
          <span className="process-stack__badge-dot" aria-hidden="true" />
          <span className="process-stack__badge-icon">
            <Icon />
          </span>
          {label}
        </div>
      ))}
    </Reveal>
  );
}
