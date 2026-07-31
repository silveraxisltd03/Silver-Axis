const PARTICLES = Array.from({ length: 10 }, (_, index) => index);

export function BackgroundGrid() {
  return (
    <div className="architecture-background" aria-hidden="true">
      <div className="architecture-background__grid" />
      <div className="architecture-background__glow" />
      <div className="architecture-background__particles">
        {PARTICLES.map((index) => (
          <span
            key={index}
            className={`architecture-background__particle architecture-background__particle--${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
