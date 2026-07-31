import { FloatingCard } from './FloatingCard';

export type ArchitectureNodeId =
  | 'frontend'
  | 'mobile'
  | 'auth'
  | 'database'
  | 'storage'
  | 'payments'
  | 'crm';

export interface ArchitectureNodeData {
  id: ArchitectureNodeId;
  label: string;
  detail: string;
  delayIndex: number;
  responsiveClass?: string;
}

interface ArchitectureNodeProps extends ArchitectureNodeData {
  active: boolean;
  onActivate: (id: ArchitectureNodeId) => void;
  onDeactivate: () => void;
}

function NodeIcon({ id }: { id: ArchitectureNodeId }) {
  if (id === 'frontend') {
    return <path d="M4 6.5h16v11H4zm4 3-2 2 2 2m8-4 2 2-2 2" />;
  }

  if (id === 'mobile') {
    return <path d="M8 3.5h8v17H8zm3 14h2" />;
  }

  if (id === 'auth') {
    return <path d="M12 3.5 19 6v5.2c0 4.2-2.7 7.4-7 9.3-4.3-1.9-7-5.1-7-9.3V6zm-2 8 1.4 1.5 3-3.2" />;
  }

  if (id === 'database') {
    return <path d="M5 6c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7-1.3-7-3Zm0 0v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6m-14 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />;
  }

  if (id === 'storage') {
    return <path d="M7.2 18.5h10.4a4 4 0 0 0 .4-8 6.2 6.2 0 0 0-11.8-1.2 4.6 4.6 0 0 0 1 9.2Z" />;
  }

  if (id === 'payments') {
    return <path d="M3.5 6h17v12h-17zm0 4h17M7 15h4" />;
  }

  return <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />;
}

export function ArchitectureNode({
  id,
  label,
  detail,
  delayIndex,
  responsiveClass = '',
  active,
  onActivate,
  onDeactivate,
}: ArchitectureNodeProps) {
  return (
    <FloatingCard
      delayIndex={delayIndex}
      className={`architecture-node architecture-node--${id} ${responsiveClass}`.trim()}
    >
      <div
        className={`architecture-node__card${active ? ' architecture-node__card--active' : ''}`}
        onMouseEnter={() => onActivate(id)}
        onMouseLeave={onDeactivate}
      >
        <span className="architecture-node__icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <NodeIcon id={id} />
            </g>
          </svg>
        </span>
        <span className="architecture-node__copy">
          <strong>{label}</strong>
          <small>{detail}</small>
          <span className="architecture-node__availability">
            <i aria-hidden="true" />
            Online
          </span>
        </span>
      </div>
    </FloatingCard>
  );
}
