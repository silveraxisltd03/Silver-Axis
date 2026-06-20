import { PageMeta } from '@/shared/components/seo/PageMeta';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { CTA } from '@/shared/components/ui/CTA';
import { CertificationsBar } from '@/shared/components/ui/CertificationsBar';
import { Reveal } from '@/shared/components/ui/Reveal';
import { css } from '@/shared/lib/css';
import { BulletList } from './components/BulletList';
import { PROCESS } from './services.data';

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        description="AI automation, web and mobile apps, and custom systems — the right blend of AI and engineering from Silver Axis."
      />

      <HeroBand
        title="Automation, software, and systems — under one roof."
        subtitle="The right blend of AI and engineering. We automate what should be automated and build the rest by hand — then make it scale."
      />

      <section className="section-x container" style={css('padding:110px 0 0;')}>
        <Reveal>
          <div className="grid-2 grid-2--wide">
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
        </Reveal>
      </section>

      <section className="section-x container" style={css('padding:90px 0 0;')}>
        <Reveal>
          <div className="grid-2 grid-2--wide grid-2-alt">
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
            <div className="tile" style={css('order:1;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:rgb(212,227,251);box-shadow:0 14px 40px rgba(28,50,110,.08);height:380px;')}>
              <img src="/assets/web-and-mobile.png" alt="Web and mobile portfolio designs on laptop and phone" style={css('width:100%;height:100%;object-fit:cover;display:block;')} />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-x container" style={css('padding:90px 0 0;')}>
        <Reveal>
          <div className="grid-2 grid-2--wide">
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
        </Reveal>
      </section>

      <section className="section-x container" style={css('padding:120px 0 40px;')}>
        <Reveal style={css('margin-bottom:50px;max-width:680px;')}>
          <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(30px,4vw,52px);line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0 0 14px;color:#0b1020;")}>How we work.</h2>
          <p style={css('font-size:17px;line-height:1.55;color:#6b7488;margin:0;')}>The hard part is figuring it out first. Most of the value is decided before a line of production code.</p>
        </Reveal>
        <Reveal>
          <div className="grid-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="tile" style={css('border-radius:20px;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#f1f5ff,#fff);padding:28px;box-shadow:0 10px 30px rgba(28,50,110,.06);')}>
                <div style={css('font-size:13px;font-weight:600;color:#2a6bff;margin-bottom:20px;')}>{p.n}</div>
                <h3 style={css('font-size:19px;font-weight:600;margin:0 0 8px;color:#0b1020;')}>{p.title}</h3>
                <p style={css('font-size:14.5px;line-height:1.55;color:#6b7488;margin:0;')}>{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-x container" style={css('padding:60px 0 30px;')}>
        <Reveal>
          <CertificationsBar />
        </Reveal>
      </section>

      <CTA title="Not sure where to start?" text="Start with a free audit. We will map what to automate, what to rebuild, and what to leave alone." />
    </>
  );
}
