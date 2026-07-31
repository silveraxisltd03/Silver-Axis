export function GlowEffect() {
  return (
    <div className="architecture-glow" aria-hidden="true">
      <span className="architecture-glow__bloom" />
      <span className="architecture-glow__floor" />
      <span className="architecture-glow__ray architecture-glow__ray--left" />
      <span className="architecture-glow__ray architecture-glow__ray--right" />
    </div>
  );
}
