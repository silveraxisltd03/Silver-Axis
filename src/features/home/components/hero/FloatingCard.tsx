import type { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  delayIndex: number;
  className?: string;
}

export function FloatingCard({ children, delayIndex, className = '' }: FloatingCardProps) {
  return (
    <div className={`architecture-float architecture-float--${delayIndex % 6} ${className}`.trim()}>
      {children}
    </div>
  );
}
