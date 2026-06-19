import { HeroBand } from '@/shared/components/ui/HeroBand';
import { CTA } from '@/shared/components/ui/CTA';
import { CERTS } from '@/shared/constants/certifications';
import { useReveal } from '@/shared/hooks/useReveal';
import { css } from '@/shared/lib/css';
import { BulletList } from './components/BulletList';
import { PROCESS } from './services.data';

export function ServicesPage() {
  useReveal();
  return (
    <>
      <HeroBand
        title="Automation, software, and systems — under one roof."
        subtitle="The right blend of AI and engineering. We automate what should be automated and build the rest by hand — then make it scale."
      />

      {/* SERVICE 1: AUTOMATION */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:110px 40px 0;')}>
        <div className="rv grid-2" style={css('display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;')}>
          <div className="tile" style={css('border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:rgb(212,227,251);box-shadow:0 14px 40px rgba(28,50,110,.08);height:380px;')}>
            <img src="/assets/automation-tools.png" alt="Familiar tools connected through one automation layer" style={css('width:100%;height:100%;object-fit:contain;display:block;')} />
          </div>
          <div>
            <span style={css('font-size:13px;font-weight:600;color:#2a6bff;letter-spacing:.02em;')}>01 — AI Automation</span>
            <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(28px,3.4vw,44px);line-height:1.08;letter-spacing:-.02em;font-weight:500;margin:14px 0 16px;color:#0b1020;")}>Let AI run the busywork.</h2>
            <p style={css('font-size:16.5px;line-height:1.6;color:#6b7488;margin:0 0 26px;')}>We connect the tools you already use and hand the repetitive work to reliable, observable workflows — with retries, logging and human approval where it matters.</p>
            <BulletList items={[
              'Workflow automation across Zapier, n8n, Make and custom code',
              'AI agents for triage, drafting, enrichment and routing',
              'CRM, email, sheets and database sync that stays in step',
              'Monitoring and alerts so you know it is working',
            ]} />
          </div>
        </div>
      </section>

      {/* SERVICE 2: WEB & MOBILE */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:90px 40px 0;')}>
        <div className="rv grid-2 grid-2-alt" style={css('display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;')}>
          <div style={css('order:2;')}>
            <span style={css('font-size:13px;font-weight:600;color:#2a6bff;letter-spacing:.02em;')}>02 — Web &amp; Mobile</span>
            <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(28px,3.4vw,44px);line-height:1.08;letter-spacing:-.02em;font-weight:500;margin:14px 0 16px;color:#0b1020;")}>Apps people actually keep using.</h2>
            <p style={css('font-size:16.5px;line-height:1.6;color:#6b7488;margin:0 0 26px;')}>Native mobile and web on one typed codebase — fast, instrumented and built to stay maintainable as your team and traffic grow.</p>
            <BulletList items={[
              'Native iOS & Android, plus React / Next web',
              'Shared design system for a consistent product',
              'Caching, performance budgets and analytics from day one',
              'App Store and Play Store release handled end to end',
            ]} />
          </div>
          <div className="tile" style={css('order:1;position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 60%);box-shadow:0 14px 40px rgba(28,50,110,.08);height:380px;display:flex;align-items:center;justify-content:center;gap:18px;padding:30px;')}>
            <div style={css('width:120px;height:236px;border-radius:22px;background:#fff;border:1px solid rgba(20,40,90,.08);box-shadow:0 14px 34px rgba(28,50,110,.16);padding:16px 13px;display:flex;flex-direction:column;gap:11px;flex:none;')}>
              <div style={css('height:8px;width:55%;background:#2a6bff;border-radius:5px;')}></div>
              <div style={css('height:8px;width:88%;background:#eef1f7;border-radius:5px;')}></div>
              <div style={css('height:58px;background:#eef3ff;border-radius:11px;margin-top:3px;')}></div>
              <div style={css('height:8px;width:74%;background:#eef1f7;border-radius:5px;')}></div>
              <div style={css('height:8px;width:60%;background:#eef1f7;border-radius:5px;')}></div>
              <div style={css('height:38px;background:#2a6bff;border-radius:11px;margin-top:auto;')}></div>
            </div>
            <div style={css('flex:1;align-self:stretch;margin:28px 0;border-radius:16px;background:#fff;border:1px solid rgba(20,40,90,.08);box-shadow:0 14px 34px rgba(28,50,110,.16);padding:20px;display:flex;flex-direction:column;gap:12px;')}>
              <div style={css('display:flex;gap:6px;align-items:center;')}><span style={css('width:10px;height:10px;border-radius:50%;background:#ff5f57;')}></span><span style={css('width:10px;height:10px;border-radius:50%;background:#febc2e;')}></span><span style={css('width:10px;height:10px;border-radius:50%;background:#28c840;')}></span></div>
              <div style={css('height:9px;width:50%;background:#2a6bff;border-radius:5px;')}></div>
              <div style={css('height:9px;width:88%;background:#eef1f7;border-radius:5px;')}></div>
              <div style={css('height:9px;width:72%;background:#eef1f7;border-radius:5px;')}></div>
              <div style={css('height:60px;background:#eef3ff;border-radius:12px;margin-top:auto;')}></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 3: CUSTOM SYSTEMS */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:90px 40px 0;')}>
        <div className="rv grid-2" style={css('display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;')}>
          <div className="tile" style={css('position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 60%);box-shadow:0 14px 40px rgba(28,50,110,.08);height:380px;padding:30px;display:flex;flex-direction:column;gap:16px;')}>
            <div style={css('background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(28,50,110,.12);padding:22px;')}>
              <div style={css('font-size:13px;color:#8b94a6;margin-bottom:6px;')}>Total revenue</div>
              <div style={css('font-size:34px;font-weight:600;color:#0b1020;letter-spacing:-.025em;')}>$129,344</div>
              <div style={css('margin-top:12px;')}><span style={css('font-size:11.5px;font-weight:600;color:#2a6bff;background:#eaf0ff;padding:5px 11px;border-radius:999px;')}>+44% last month</span></div>
            </div>
            <div style={css('background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(28,50,110,.12);padding:18px 20px;flex:1;display:flex;align-items:flex-end;gap:9px;')}>
              <div style={css('flex:1;height:34%;background:#cdd9f7;border-radius:6px;')}></div>
              <div style={css('flex:1;height:56%;background:#9fb6f5;border-radius:6px;')}></div>
              <div style={css('flex:1;height:44%;background:#cdd9f7;border-radius:6px;')}></div>
              <div style={css('flex:1;height:80%;background:#2a6bff;border-radius:6px;')}></div>
              <div style={css('flex:1;height:64%;background:#9fb6f5;border-radius:6px;')}></div>
              <div style={css('flex:1;height:50%;background:#cdd9f7;border-radius:6px;')}></div>
            </div>
          </div>
          <div>
            <span style={css('font-size:13px;font-weight:600;color:#2a6bff;letter-spacing:.02em;')}>03 — Custom Systems</span>
            <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(28px,3.4vw,44px);line-height:1.08;letter-spacing:-.02em;font-weight:500;margin:14px 0 16px;color:#0b1020;")}>Software shaped around you.</h2>
            <p style={css('font-size:16.5px;line-height:1.6;color:#6b7488;margin:0 0 26px;')}>CRMs, ERPs, dashboards and internal tools on a clean schema with proper access control — built around how you work, not a template you bend to fit.</p>
            <BulletList items={[
              'Custom CRMs, ERPs and operational dashboards',
              'Role-based access, audit trails and clean data models',
              'Integrations with the systems you already run on',
              'Documented, handed over, and built to maintain',
            ]} />
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:120px 40px 40px;')}>
        <div className="rv" style={css('margin-bottom:50px;max-width:680px;')}>
          <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(30px,4vw,52px);line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0 0 14px;color:#0b1020;")}>How we work.</h2>
          <p style={css('font-size:17px;line-height:1.55;color:#6b7488;margin:0;')}>The hard part is figuring it out first. Most of the value is decided before a line of production code.</p>
        </div>
        <div className="rv grid-4" style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:22px;')}>
          {PROCESS.map((p) => (
            <div key={p.n} className="tile" style={css('border-radius:20px;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#f1f5ff,#fff);padding:28px;box-shadow:0 10px 30px rgba(28,50,110,.06);')}>
              <div style={css('font-size:13px;font-weight:600;color:#2a6bff;margin-bottom:20px;')}>{p.n}</div>
              <h3 style={css('font-size:19px;font-weight:600;margin:0 0 8px;color:#0b1020;')}>{p.title}</h3>
              <p style={css('font-size:14.5px;line-height:1.55;color:#6b7488;margin:0;')}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:60px 40px 30px;')}>
        <div className="rv" style={css('display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:30px;')}>
          <p style={css('font-size:14px;color:#9aa3b8;margin:0;max-width:220px;')}>Certified where it matters</p>
          <div style={css('display:flex;gap:18px;flex-wrap:wrap;')}>
            {CERTS.map((c) => (
              <div key={c} style={css('display:flex;align-items:center;gap:11px;padding:13px 20px;border:1px solid rgba(20,40,90,.1);border-radius:12px;background:#fff;box-shadow:0 4px 14px rgba(28,50,110,.05);')}>
                <span style={css('width:30px;height:30px;border-radius:7px;border:1px solid rgba(42,107,255,.3);background:#eaf0ff;')}></span>
                <span style={css('font-size:14px;font-weight:500;color:#2b3346;')}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Not sure where to start?" text="Start with a free audit. We will map what to automate, what to rebuild, and what to leave alone." />
    </>
  );
}
