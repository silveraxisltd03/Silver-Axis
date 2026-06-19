import { css } from '@/shared/lib/css';

interface HeroBandProps {
  title: string;
  subtitle: string;
}

// Dark hero band used at the top of the sub-pages.
export function HeroBand({ title, subtitle }: HeroBandProps) {
  return (
    <section className="hero-band section-x" style={css('position:relative;background:#070b16;padding:180px 40px 100px;overflow:hidden;')}>
      <div style={css('position:absolute;top:-25%;left:50%;transform:translateX(-50%);width:1100px;height:1100px;max-width:170vw;border-radius:50%;background:radial-gradient(circle,rgba(42,107,255,.34) 0%,rgba(42,107,255,0) 62%);pointer-events:none;')}></div>
      <div style={css('position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,#070b16 99%);pointer-events:none;')}></div>
      <div style={css('position:relative;z-index:2;max-width:1240px;margin:0 auto;')}>
        <h1 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(40px,6vw,82px);line-height:1.04;letter-spacing:-.02em;font-weight:500;margin:0 0 22px;color:#fff;max-width:900px;")}>{title}</h1>
        <p style={css('font-size:clamp(17px,1.6vw,21px);line-height:1.55;color:#9aa3b8;max-width:600px;margin:0;')}>{subtitle}</p>
      </div>
    </section>
  );
}
