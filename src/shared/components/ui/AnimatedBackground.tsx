interface AnimatedBackgroundProps {
  className?: string;
}

// Soft ambient gradient blobs.
const BLOBS = [
  { x: 12, y: 24, size: 'clamp(240px, 30vw, 440px)', tone: 'rgba(42, 107, 255, 0.24)' },
  { x: 82, y: 18, size: 'clamp(220px, 26vw, 380px)', tone: 'rgba(42, 107, 255, 0.18)' },
  { x: 58, y: 82, size: 'clamp(260px, 32vw, 460px)', tone: 'rgba(42, 107, 255, 0.16)' },
  { x: 30, y: 90, size: 'clamp(180px, 20vw, 300px)', tone: 'rgba(234, 240, 255, 0.06)' },
];

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div className={`animated-bg${className ? ` ${className}` : ''}`} aria-hidden="true">
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="animated-bg__blob"
          style={{
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.tone} 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}
