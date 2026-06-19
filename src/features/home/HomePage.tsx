import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CTA } from '@/shared/components/ui/CTA';
import { ArrowUR } from '@/shared/components/ui/icons';
import { CERTS } from '@/shared/constants/certifications';
import { ROUTES } from '@/shared/constants/routes';
import { useReveal } from '@/shared/hooks/useReveal';
import { css } from '@/shared/lib/css';
import { CASES, QUOTES, STEPS } from './home.data';

export function HomePage() {
  useReveal();
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* HERO: AXIS */}
      <section style={css('position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 24px 90px;overflow:hidden;background:#070b16;')}>
        <div style={css('position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:min(92vw,820px);height:min(92vw,820px);pointer-events:none;')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px dashed rgba(42,107,255,.2);animation:spinSlow 60s linear infinite;')}></div>
          <div style={css('position:absolute;inset:9%;border-radius:50%;border:1px dashed rgba(42,107,255,.26);animation:spinRev 45s linear infinite;')}></div>
          <div style={css('position:absolute;inset:20%;border-radius:50%;border:1px solid rgba(255,255,255,.07);animation:spinSlow 38s linear infinite;')}></div>
          <div style={css('position:absolute;inset:33%;border-radius:50%;border:1px dashed rgba(42,107,255,.32);animation:spinRev 28s linear infinite;')}></div>
          <div style={css('position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(42,107,255,.32) 0%,transparent 64%);')}></div>
        </div>
        <div style={css('position:absolute;inset:0;background:linear-gradient(180deg,transparent 0%,transparent 70%,#070b16 98%);pointer-events:none;')}></div>
        <div style={css('position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;max-width:920px;')}>
          <h1 style={css("font-size:clamp(42px,6.4vw,88px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.04;letter-spacing:-.02em;font-weight:500;margin:0 0 26px;color:#fff;")}>We automate, build, and<br />scale your software.</h1>
          <p style={css('font-size:clamp(17px,1.6vw,21px);line-height:1.55;color:#9aa3b8;max-width:600px;margin:0 0 42px;')}>The right blend of AI and engineering — we automate what should be, build the rest by hand, and ship web and mobile systems that scale to millions of users.</p>
          <div style={css('display:flex;gap:14px;flex-wrap:wrap;justify-content:center;')}>
            <Link to={ROUTES.contact} className="btnW" style={css('background:#fff;color:#070b16;font-size:15.5px;font-weight:600;padding:17px 36px;border-radius:999px;')}>Book a free audit</Link>
            <a href="#process" className="btnG" style={css('background:rgba(255,255,255,.05);color:#eef1f8;font-size:15.5px;font-weight:500;padding:17px 36px;border-radius:999px;border:1px solid rgba(255,255,255,.16);')}>See how we work</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-x" style={css('max-width:1240px;margin:0 auto;padding:120px 40px 70px;')}>
        <div className="rv" style={css('margin-bottom:60px;')}>
          <div style={css('display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:28px;')}>
            <h2 style={css("font-size:clamp(32px,4.2vw,58px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;max-width:620px;")}>We start with the problem,<br />not the tech.</h2>
            <p style={css('font-size:17px;line-height:1.55;color:#6b7488;max-width:330px;margin:0 0 8px;')}>Sometimes the fix is automation. Sometimes a system built from scratch. Usually a bit of both.</p>
          </div>
        </div>

        <div className="grid-3" style={css('display:grid;grid-template-columns:repeat(3,1fr);gap:26px;')}>
          {/* TILE 1: Automation */}
          <div className="rv" data-rv-d="0">
            <div className="tile" style={css('position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:rgb(212,227,251);box-shadow:0 14px 40px rgba(28,50,110,.08);height:300px;')}>
              <img src="/assets/automation-tools.png" alt="Familiar tools connected through one automation layer" style={css('width:100%;height:100%;object-fit:contain;display:block;')} />
            </div>
            <h3 style={css('font-size:21px;font-weight:600;margin:24px 0 7px;color:#0b1020;letter-spacing:-.01em;')}>Automate the busywork</h3>
            <p style={css('font-size:15px;line-height:1.55;color:#6b7488;margin:0;')}>We wire your tools together with webhooks and queues, then let AI agents run the repetitive work — with retries, logging and human approval where it counts.</p>
            <Link to={ROUTES.projects} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;margin-top:16px;font-size:14px;font-weight:600;color:#2a6bff;')}>View case studies<ArrowUR /></Link>
          </div>

          {/* TILE 2: Web & Mobile */}
          <div className="rv" data-rv-d="90">
            <div className="tile" style={css('position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 60%);box-shadow:0 14px 40px rgba(28,50,110,.08);height:300px;padding:26px;display:flex;align-items:center;justify-content:center;gap:16px;')}>
              <div style={css('width:96px;height:188px;border-radius:18px;background:#fff;border:1px solid rgba(20,40,90,.08);box-shadow:0 12px 30px rgba(28,50,110,.14);padding:14px 11px;display:flex;flex-direction:column;gap:9px;flex:none;')}>
                <div style={css('height:7px;width:55%;background:#2a6bff;border-radius:4px;')}></div>
                <div style={css('height:7px;width:88%;background:#eef1f7;border-radius:4px;')}></div>
                <div style={css('height:46px;background:#eef3ff;border-radius:9px;margin-top:3px;')}></div>
                <div style={css('height:7px;width:74%;background:#eef1f7;border-radius:4px;')}></div>
                <div style={css('height:7px;width:60%;background:#eef1f7;border-radius:4px;')}></div>
                <div style={css('height:30px;background:#2a6bff;border-radius:9px;margin-top:auto;')}></div>
              </div>
              <div style={css('flex:1;align-self:stretch;margin:20px 0;border-radius:14px;background:#fff;border:1px solid rgba(20,40,90,.08);box-shadow:0 12px 30px rgba(28,50,110,.14);padding:16px;display:flex;flex-direction:column;gap:10px;')}>
                <div style={css('display:flex;gap:6px;align-items:center;')}><span style={css('width:9px;height:9px;border-radius:50%;background:#ff5f57;')}></span><span style={css('width:9px;height:9px;border-radius:50%;background:#febc2e;')}></span><span style={css('width:9px;height:9px;border-radius:50%;background:#28c840;')}></span></div>
                <div style={css('height:8px;width:50%;background:#2a6bff;border-radius:5px;')}></div>
                <div style={css('height:8px;width:88%;background:#eef1f7;border-radius:5px;')}></div>
                <div style={css('height:8px;width:72%;background:#eef1f7;border-radius:5px;')}></div>
                <div style={css('height:48px;background:#eef3ff;border-radius:10px;margin-top:auto;')}></div>
              </div>
            </div>
            <h3 style={css('font-size:21px;font-weight:600;margin:24px 0 7px;color:#0b1020;letter-spacing:-.01em;')}>Web &amp; mobile, done right</h3>
            <p style={css('font-size:15px;line-height:1.55;color:#6b7488;margin:0;')}>Native iOS and Android plus a React web app on one typed codebase — cached, instrumented and built to stay fast as traffic climbs.</p>
            <Link to={ROUTES.projects} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;margin-top:16px;font-size:14px;font-weight:600;color:#2a6bff;')}>View case studies<ArrowUR /></Link>
          </div>

          {/* TILE 3: Custom systems */}
          <div className="rv" data-rv-d="180">
            <div className="tile" style={css('position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 60%);box-shadow:0 14px 40px rgba(28,50,110,.08);height:300px;padding:26px;display:flex;flex-direction:column;gap:14px;')}>
              <div style={css('background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(28,50,110,.12);padding:20px;')}>
                <div style={css('font-size:12.5px;color:#8b94a6;margin-bottom:6px;')}>Total revenue</div>
                <div style={css('font-size:30px;font-weight:600;color:#0b1020;letter-spacing:-.025em;')}>$129,344</div>
                <div style={css('margin-top:12px;')}><span style={css('font-size:11px;font-weight:600;color:#2a6bff;background:#eaf0ff;padding:5px 10px;border-radius:999px;')}>+44% last month</span></div>
              </div>
              <div style={css('background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(28,50,110,.12);padding:16px 18px;flex:1;display:flex;align-items:flex-end;gap:8px;')}>
                <div style={css('flex:1;height:34%;background:#cdd9f7;border-radius:5px;')}></div>
                <div style={css('flex:1;height:56%;background:#9fb6f5;border-radius:5px;')}></div>
                <div style={css('flex:1;height:44%;background:#cdd9f7;border-radius:5px;')}></div>
                <div style={css('flex:1;height:80%;background:#2a6bff;border-radius:5px;')}></div>
                <div style={css('flex:1;height:64%;background:#9fb6f5;border-radius:5px;')}></div>
                <div style={css('flex:1;height:50%;background:#cdd9f7;border-radius:5px;')}></div>
              </div>
            </div>
            <h3 className="nowrap-title" style={css('font-size:20px;font-weight:600;margin:24px 0 7px;color:#0b1020;letter-spacing:-.01em;white-space:nowrap;')}>CRMs, ERPs &amp; internal tools</h3>
            <p style={css('font-size:15px;line-height:1.55;color:#6b7488;margin:0;')}>CRMs, ERPs and dashboards on a clean schema with role-based access — shaped around your workflow, not a template you bend to fit.</p>
            <Link to={ROUTES.projects} className="caseLink" style={css('display:inline-flex;align-items:center;gap:7px;margin-top:16px;font-size:14px;font-weight:600;color:#2a6bff;')}>View case studies<ArrowUR /></Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-x" style={css('max-width:1240px;margin:0 auto;padding:80px 40px;')}>
        <div className="grid-2" style={css('display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;')}>
          <div className="rv sticky-panel" style={css('position:sticky;top:110px;')}>
            <div style={css('position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 60%);box-shadow:0 18px 50px rgba(28,50,110,.1);padding:28px;')}>
              <div style={css('border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 12px 32px rgba(28,50,110,.12);')}>
                <div style={css('display:flex;align-items:center;gap:7px;padding:13px 16px;border-bottom:1px solid #eef1f6;background:#fafbff;')}>
                  <span style={css('width:11px;height:11px;border-radius:50%;background:#ff5f57;')}></span>
                  <span style={css('width:11px;height:11px;border-radius:50%;background:#febc2e;')}></span>
                  <span style={css('width:11px;height:11px;border-radius:50%;background:#28c840;')}></span>
                  <span style={css('font-family:ui-monospace,monospace;font-size:11px;color:#aab1c0;margin-left:12px;')}>replace with project screenshot</span>
                </div>
                <div style={css('padding:24px;display:flex;flex-direction:column;gap:16px;')}>
                  <div style={css('display:flex;align-items:center;')}>
                    <span style={css('font-size:13px;font-weight:600;color:#0b1020;')}>Project overview</span>
                  </div>
                  <div style={css('height:110px;border-radius:12px;background:linear-gradient(135deg,#dce6ff,#f3f7ff);border:1px solid #e8ecf5;')}></div>
                  <div style={css('display:grid;grid-template-columns:1fr 1fr;gap:14px;')}>
                    <div style={css('background:#f6f9ff;border-radius:11px;padding:14px;border:1px solid #e8ecf5;')}><div style={css('font-size:11px;color:#8b94a6;')}>Active</div><div style={css('font-size:20px;font-weight:600;color:#0b1020;letter-spacing:-.02em;')}>$24,002</div></div>
                    <div style={css('background:#f6f9ff;border-radius:11px;padding:14px;border:1px solid #e8ecf5;')}><div style={css('font-size:11px;color:#8b94a6;')}>Growth</div><div style={css('font-size:20px;font-weight:600;color:#0b1020;letter-spacing:-.02em;')}>+18%</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rv">
            <h2 style={css("font-size:clamp(32px,4.2vw,56px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0 0 36px;color:#0b1020;")}>The hard part is figuring it out first.</h2>
            <div style={css('display:flex;flex-direction:column;')}>
              {STEPS.map((s, i) => (
                <div key={i} style={css('border-bottom:1px solid #e8ecf3;')}>
                  <button onClick={() => setOpen(i)} style={{ all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '18px', width: '100%', padding: '22px 2px', boxSizing: 'border-box' }}>
                    <span style={css('font-size:13px;color:#2a6bff;font-weight:600;width:26px;')}>{String(i + 1).padStart(2, '0')}</span>
                    <span style={css('font-size:21px;font-weight:600;color:#0b1020;letter-spacing:-.01em;flex:1;')}>{s.title}</span>
                    <span style={css('font-size:22px;color:#aab1c0;font-weight:300;')}>{i === open ? '\u2212' : '+'}</span>
                  </button>
                  {i === open && (
                    <div style={css('padding:0 2px 24px 44px;')}>
                      <p style={css('font-size:16px;line-height:1.6;color:#6b7488;margin:0;max-width:440px;')}>{s.desc}</p>
                      <div style={css('height:2px;width:60px;background:#2a6bff;border-radius:2px;margin-top:18px;')}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section-x" style={css('max-width:1240px;margin:0 auto;padding:80px 40px;')}>
        <div className="rv" style={css('margin-bottom:54px;')}>
          <h2 style={css("font-size:clamp(32px,4.2vw,56px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.06;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;")}>A few things we&rsquo;ve shipped.</h2>
        </div>
        <div className="grid-2" style={css('display:grid;grid-template-columns:1fr 1fr;gap:26px;')}>
          {CASES.map((cs, i) => (
            <Link key={i} to={ROUTES.projects} className="rv tile" style={css('display:block;border-radius:24px;overflow:hidden;border:1px solid rgba(20,40,90,.08);background:#fff;box-shadow:0 14px 40px rgba(28,50,110,.08);')}>
              <div style={css('position:relative;height:250px;background:linear-gradient(165deg,#e9eeff 0%,#f7f9ff 70%);display:flex;align-items:flex-end;padding:24px;')}>
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
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:80px 40px;')}>
        <div className="rv" style={css('margin:0 auto 54px;text-align:center;display:flex;flex-direction:column;align-items:center;')}>
          <h2 style={css("font-size:clamp(32px,4.2vw,52px);font-family:'Clash Display','General Sans',sans-serif;line-height:1.07;letter-spacing:-.02em;font-weight:500;margin:0;color:#0b1020;")}>What it&rsquo;s like to work with us.</h2>
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

      {/* CERTIFICATIONS */}
      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:40px 40px 70px;')}>
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

      <CTA title="Start with a free audit." text="Tell us where things are slow or breaking. We will show you what to automate, what to rebuild, and what to leave alone." />
    </>
  );
}
