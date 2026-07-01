interface HeroBandProps {
  title: string;
  subtitle: string;
}

export function HeroBand({ title, subtitle }: HeroBandProps) {
  return (
    <section className="hero-band section-x">
      <div className="hero-band__glow" aria-hidden="true" />
      <div className="hero-band__fade" aria-hidden="true" />
      <div className="hero-band__inner">
        <h1 className="hero-band__title">{title}</h1>
        <p className="hero-band__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
