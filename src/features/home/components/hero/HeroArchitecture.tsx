'use client';

import { useEffect, useState } from 'react';
import {
  ArchitectureNode,
  type ArchitectureNodeData,
  type ArchitectureNodeId,
} from './ArchitectureNode';
import { ArchitectureCore } from './ArchitectureCore';
import { BackgroundGrid } from './BackgroundGrid';
import { ConnectionLine } from './ConnectionLine';
import { GlowEffect } from './GlowEffect';
import { useMouseParallax } from './useMouseParallax';

const NODES: ArchitectureNodeData[] = [
  { id: 'frontend', label: 'Frontend', detail: 'Web Experience', delayIndex: 0 },
  {
    id: 'mobile',
    label: 'Mobile',
    detail: 'Native Products',
    delayIndex: 1,
    responsiveClass: 'architecture-node--mobile-hidden',
  },
  {
    id: 'auth',
    label: 'Authentication',
    detail: 'Secure Identity',
    delayIndex: 2,
    responsiveClass: 'architecture-node--mobile-hidden',
  },
  { id: 'database', label: 'Database', detail: 'Reliable Storage', delayIndex: 3 },
  { id: 'storage', label: 'Cloud', detail: 'Elastic Infrastructure', delayIndex: 4 },
  {
    id: 'crm',
    label: 'CRM / ERP',
    detail: 'Business Operations',
    delayIndex: 5,
    responsiveClass: 'architecture-node--tablet-optional architecture-node--mobile-hidden',
  },
  {
    id: 'payments',
    label: 'Payments',
    detail: 'Transaction Layer',
    delayIndex: 0,
    responsiveClass: 'architecture-node--tablet-optional architecture-node--mobile-hidden',
  },
];

const CONNECTIONS: Array<{
  nodeId: ArchitectureNodeId;
  path: string;
  duration: number;
  flowRole: 'request' | 'response' | 'service';
}> = [
  { nodeId: 'frontend', path: 'M112 110 C214 180 292 258 360 300', duration: 5.8, flowRole: 'request' },
  { nodeId: 'mobile', path: 'M290 72 C320 142 344 220 360 300', duration: 5.2, flowRole: 'request' },
  { nodeId: 'auth', path: 'M360 300 C416 220 486 152 566 108', duration: 5.6, flowRole: 'service' },
  { nodeId: 'database', path: 'M360 300 C446 286 532 275 638 270', duration: 4.8, flowRole: 'response' },
  { nodeId: 'storage', path: 'M360 300 C436 350 512 416 584 474', duration: 5.7, flowRole: 'service' },
  { nodeId: 'crm', path: 'M360 300 C282 358 206 420 112 470', duration: 5.9, flowRole: 'service' },
  { nodeId: 'payments', path: 'M360 300 C370 382 380 470 390 548', duration: 5.3, flowRole: 'service' },
];

export function HeroArchitecture() {
  const [activeNode, setActiveNode] = useState<ArchitectureNodeId | 'core' | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const parallaxRef = useMouseParallax<HTMLDivElement>(15);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="hero-architecture"
      role="img"
      aria-label="Connected software architecture with an API gateway linking web, mobile, identity, data, cloud, payments, and business systems"
      onMouseLeave={() => setActiveNode(null)}
    >
      <BackgroundGrid />

      <div className="hero-architecture__stage">
        <div className="architecture-connections-layer">
          <svg
            className="architecture-connections"
            viewBox="0 0 720 600"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <circle className="architecture-core-pulse" cx="360" cy="300" r="54" />
            <circle className="architecture-core-pulse architecture-core-pulse--delayed" cx="360" cy="300" r="54" />
            {CONNECTIONS.map((connection) => (
              <ConnectionLine
                key={connection.nodeId}
                {...connection}
                active={activeNode === connection.nodeId || activeNode === 'core'}
                reducedMotion={reducedMotion}
              />
            ))}
          </svg>
          <span className="architecture-flow-label architecture-flow-label--request">Request</span>
          <span className="architecture-flow-label architecture-flow-label--response">Response</span>
        </div>

        <div className="architecture-cards-layer">
          {NODES.map((node) => (
            <ArchitectureNode
              key={node.id}
              {...node}
              active={activeNode === node.id}
              onActivate={setActiveNode}
              onDeactivate={() => setActiveNode(null)}
            />
          ))}
        </div>

        <div className="architecture-core-layer">
          <GlowEffect />
          <ArchitectureCore
            active={activeNode === 'core'}
            onActivate={() => setActiveNode('core')}
            onDeactivate={() => setActiveNode(null)}
          />
        </div>
      </div>
    </div>
  );
}
