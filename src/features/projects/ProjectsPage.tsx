import { Link } from 'react-router-dom';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { CTA } from '@/shared/components/ui/CTA';
import { ROUTES } from '@/shared/constants/routes';
import { useReveal } from '@/shared/hooks/useReveal';
import { css } from '@/shared/lib/css';
import { CASES, QUOTES, STATS } from './projects.data';

export function ProjectsPage() {
  useReveal();
  return (
    <>
      <HeroBand
        title="Proof over promises."
        subtitle="A few systems we have audited, prototyped and shipped — and what changed for the teams running them."
      />

      {/* STATS */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:70px 40px 30px;')}>
        <div className="rv grid-4" style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:22px;')}>
          {STATS.map((s, i) => (
            <div key={i} className="stat-item" style={css(i < 3 ? 'border-right:1px solid #eef1f6;padding-right:18px;' : '')}>
              <div style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(34px,4vw,50px);font-weight:500;color:#0b1020;letter-spacing:-.02em;")}>{s.v}</div>
              <div style={css('font-size:14px;color:#6b7488;margin-top:4px;')}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:60px 40px 40px;')}>
        <div className="grid-2" style={css('display:grid;grid-template-columns:1fr 1fr;gap:26px;')}>
          {CASES.map((cs, i) => (
            <Link key={i} to={ROUTES.contact} className="rv tile" style={css('display:block;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:#fff;box-shadow:0 14px 40px rgba(28,50,110,.08);')}>
              <div style={css('position:relative;height:240px;background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 70%);display:flex;align-items:flex-end;padding:24px;')}>
                <div style={css('position:absolute;inset:0;background:radial-gradient(circle at 74% 20%,rgba(42,107,255,.16),transparent 56%);')}></div>
                <span style={css('font-family:ui-monospace,monospace;font-size:11px;color:#9aa3b8;position:relative;')}>[ {cs.shot} ]</span>
              </div>
              <div style={css('padding:28px 30px 32px;')}>
                <span style={css('font-size:13px;color:#2a6bff;font-weight:600;')}>{cs.tag}</span>
                <h3 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:24px;font-weight:500;margin:10px 0 8px;color:#0b1020;letter-spacing:-.015em;")}>{cs.title}</h3>
                <p style={css('font-size:15px;line-height:1.6;color:#6b7488;margin:0 0 22px;')}>{cs.desc}</p>
                <div style={css('display:flex;gap:36px;')}>
                  <div><div style={css('font-size:27px;font-weight:600;color:#0b1020;letter-spacing:-.02em;')}>{cs.m1v}</div><div style={css('font-size:12.5px;color:#9aa3b8;margin-top:2px;')}>{cs.m1l}</div></div>
                  <div><div style={css('font-size:27px;font-weight:600;color:#0b1020;letter-spacing:-.02em;')}>{cs.m2v}</div><div style={css('font-size:12.5px;color:#9aa3b8;margin-top:2px;')}>{cs.m2l}</div></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:70px 40px;')}>
        <div className="rv" style={css('margin:0 auto 50px;text-align:center;display:flex;flex-direction:column;align-items:center;')}>
          <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(30px,4vw,52px);line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;")}>What it is like to work with us.</h2>
        </div>
        <div className="grid-3" style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:26px;')}>
          {QUOTES.map((q, i) => (
            <div key={i} className="rv tile" style={css('border-radius:24px;padding:32px;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#f1f5ff 0%,#ffffff 70%);box-shadow:0 14px 40px rgba(28,50,110,.07);display:flex;flex-direction:column;')}>
              <p style={css('font-size:16.5px;line-height:1.62;color:#2b3346;margin:0 0 28px;flex:1;')}>&ldquo;{q.text}&rdquo;</p>
              <div style={css('display:flex;align-items:center;gap:12px;')}>
                <div style={css('width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#c7d4f5,#9fb6f5);flex:none;')}></div>
                <div><div style={css('font-size:14.5px;font-weight:600;color:#0b1020;')}>{q.name}</div><div style={css('font-size:12.5px;color:#9aa3b8;')}>{q.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA title="Your project could be next." text="Start with a free audit and see what is possible — no obligation." />
    </>
  );
}
