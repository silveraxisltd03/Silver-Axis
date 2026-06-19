import { Link } from 'react-router-dom';
import { css } from '../lib/css.js';

export default function CTA({ title, text }) {
  return (
    <section className="cta-section section-x" style={css('max-width:1240px;margin:0 auto;padding:50px 40px 100px;')}>
      <div className="rv" style={css('position:relative;border-radius:30px;overflow:hidden;padding:clamp(48px,7vw,90px) clamp(32px,5vw,72px);text-align:center;background:linear-gradient(135deg,#0b142e 0%,#070b16 60%);')}>
        <div style={css('position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:760px;height:760px;max-width:130%;border-radius:50%;background:radial-gradient(circle,rgba(42,107,255,.4) 0%,transparent 62%);pointer-events:none;')}></div>
        <div style={css('position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;')}>
          <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(30px,4.4vw,58px);line-height:1.05;letter-spacing:-.02em;font-weight:500;margin:0 0 20px;color:#fff;max-width:720px;")}>{title}</h2>
          <p style={css('font-size:18px;line-height:1.55;color:#9aa3b8;max-width:520px;margin:0 0 36px;')}>{text}</p>
          <Link to="/contact" className="btnW" style={css('background:#fff;color:#070b16;font-size:16px;font-weight:600;padding:17px 38px;border-radius:999px;')}>Book your free audit</Link>
        </div>
      </div>
    </section>
  );
}
