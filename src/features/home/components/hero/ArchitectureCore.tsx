import { FloatingCard } from './FloatingCard';

interface ArchitectureCoreProps {
  active: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

export function ArchitectureCore({
  active,
  onActivate,
  onDeactivate,
}: ArchitectureCoreProps) {
  return (
    <FloatingCard delayIndex={2} className="architecture-core-wrap">
      <div
        className={`architecture-core${active ? ' architecture-core--active' : ''}`}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
      >
        <span className="architecture-core__reflection" aria-hidden="true" />
        <div className="architecture-core__cube">
          <span className="architecture-core__top" />
          <span className="architecture-core__side" />
          <div className="architecture-core__face">
            <div className="architecture-core__face-header">
              <span className="architecture-core__brand">SILVER AXIS</span>
              <span className="architecture-core__live"><i /> Live</span>
            </div>
            <span className="architecture-core__gateway-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="architecture-core__rack architecture-core__rack--one" />
            <span className="architecture-core__rack architecture-core__rack--two" />
            <span className="architecture-core__rack architecture-core__rack--three" />
          </div>
        </div>
        <div className="architecture-core__label">
          <span>Enterprise core</span>
          <strong>API Gateway</strong>
          <small><i /> Systems operational</small>
        </div>
      </div>
    </FloatingCard>
  );
}
