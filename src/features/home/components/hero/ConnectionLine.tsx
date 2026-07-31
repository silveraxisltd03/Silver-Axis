import type { ArchitectureNodeId } from './ArchitectureNode';
import { ParticleTrail } from './ParticleTrail';

interface ConnectionLineProps {
  nodeId: ArchitectureNodeId;
  path: string;
  active: boolean;
  duration: number;
  reducedMotion: boolean;
  flowRole?: 'request' | 'response' | 'service';
}

export function ConnectionLine({
  nodeId,
  path,
  active,
  duration,
  reducedMotion,
  flowRole = 'service',
}: ConnectionLineProps) {
  const particleDuration = active ? duration * 0.55 : duration;

  return (
    <g
      className={`architecture-connection architecture-connection--${nodeId} architecture-connection--${flowRole}${
        active ? ' architecture-connection--active' : ''
      }`}
    >
      <path className="architecture-connection__base" d={path} />
      <path className="architecture-connection__flow" d={path} />
      <ParticleTrail
        key={`${nodeId}-${active ? 'fast' : 'normal'}`}
        path={path}
        duration={particleDuration}
        reducedMotion={reducedMotion}
      />
    </g>
  );
}
