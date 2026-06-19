import { Link } from 'react-router-dom';
import { css } from '../lib/css.js';
import { useReveal } from '../lib/useReveal.js';
import HeroBand from '../components/HeroBand.jsx';
import CTA from '../components/CTA.jsx';

const STATS = [
  { v: '40+', l: 'systems shipped' },
  { v: '99.9%', l: 'average uptime' },
  { v: '8M+', l: 'users served' },
  { v: '6 yrs', l: 'longest system still running' },
];

const CASES = [
  { shot: 'case-study screenshot', tag: 'AI Automation + ERP', title: 'Ops platform for a logistics network', desc: 'Swapped manual dispatch for an event-driven workflow engine and a custom ERP layer — queue-backed, idempotent, with a full audit trail.', m1v: '70%', m1l: 'less manual work', m2v: '4 wks', m2l: 'to first launch' },
  { shot: 'case-study screenshot', tag: 'Web + Mobile', title: 'Member app for a health provider', desc: 'Native mobile and web on a shared TypeScript core and a cached API gateway — scoped and load-tested before build.', m1v: '99.9%', m1l: 'uptime', m2v: '4.8\u2605', m2l: 'store rating' },
  { shot: 'case-study screenshot', tag: 'AI Automation', title: 'Lead engine for a property group', desc: 'AI triage and routing across web, WhatsApp and email — qualified leads in the CRM within seconds, not hours.', m1v: '3x', m1l: 'faster response', m2v: '24/7', m2l: 'coverage' },
  { shot: 'case-study screenshot', tag: 'Custom CRM', title: 'Internal CRM for a services firm', desc: 'Replaced a tangle of spreadsheets with a role-based CRM and reporting layer the whole team trusts.', m1v: '12 hrs', m1l: 'saved weekly', m2v: '100%', m2l: 'adoption' },
];

const QUOTES = [
  { text: 'They spent real time understanding the problem before writing any code. The prototype caught issues that would have cost us months.', name: 'Placeholder Name', role: 'Founder, Client Co' },
  { text: 'The automation work paid for itself in weeks. Then they built the custom system on top of it without missing a beat.', name: 'Placeholder Name', role: 'COO, Client Co' },
  { text: 'Fast, modular, and genuinely scalable. It still runs perfectly two years and a lot of users later.', name: 'Placeholder Name', role: 'CTO, Client Co' },
];

export default function Portfolio() {
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
            <Link key={i} to="/contact" className="rv tile" style={css('display:block;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:#fff;box-shadow:0 14px 40px rgba(28,50,110,.08);')}>
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
