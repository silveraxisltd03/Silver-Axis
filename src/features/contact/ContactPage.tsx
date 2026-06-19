import { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { ROUTES } from '@/shared/constants/routes';
import { useReveal } from '@/shared/hooks/useReveal';
import { css } from '@/shared/lib/css';
import type { ContactFormState } from '@/shared/types';
import { CALENDLY_URL, STEPS } from './contact.data';

export function ContactPage() {
  useReveal();
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState('there');

  const upd = (k: keyof ContactFormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = () => {
    // Front-end only. To actually receive emails, point this at a form service
    // (e.g. Formspree) or your own API — see README.
    const first = (form.name || '').trim().split(' ')[0];
    setSentName(first || 'there');
    setSent(true);
  };

  return (
    <>
      <HeroBand
        title="Start with a free audit."
        subtitle="Tell us where things are slow or breaking. We will map what to automate, what to rebuild, and what to leave alone — no obligation."
      />

      <section className="section-x" style={css('max-width:1240px;margin:0 auto;padding:90px 40px 60px;')}>
        <div className="grid-contact" style={css('display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:start;')}>

          {/* LEFT */}
          <div className="rv">
            <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(26px,2.6vw,38px);line-height:1.1;letter-spacing:-.02em;font-weight:500;margin:0 0 28px;color:#0b1020;")}>What happens next.</h2>
            <div style={css('display:flex;flex-direction:column;gap:26px;margin-bottom:42px;')}>
              {STEPS.map((s) => (
                <div key={s.n} style={css('display:flex;gap:16px;')}>
                  <span style={css('width:34px;height:34px;flex:none;border-radius:9px;background:#eaf0ff;color:#2a6bff;font-weight:600;font-size:14px;display:flex;align-items:center;justify-content:center;')}>{s.n}</span>
                  <div>
                    <div style={css('font-size:16.5px;font-weight:600;color:#0b1020;margin-bottom:3px;')}>{s.title}</div>
                    <p style={css('font-size:15px;line-height:1.55;color:#6b7488;margin:0;')}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={css('height:1px;background:#eef1f6;margin-bottom:28px;')}></div>
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <a href="mailto:hello@silveraxis.com" style={css('display:flex;align-items:center;gap:11px;font-size:15.5px;color:#2b3346;font-weight:500;')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                hello@silveraxis.com
              </a>
              <div style={css('display:flex;align-items:center;gap:11px;font-size:15.5px;color:#2b3346;font-weight:500;')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Replies within one business day
              </div>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={css('display:inline-flex;align-items:center;gap:10px;margin-top:30px;font-size:15px;font-weight:600;color:#2a6bff;')}>
              Prefer to book directly? Grab a time
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          </div>

          {/* RIGHT: form */}
          <div className="rv" style={css('border-radius:24px;border:1px solid rgba(20,40,90,.08);background:linear-gradient(165deg,#f4f7ff 0%,#ffffff 60%);box-shadow:0 18px 50px rgba(28,50,110,.1);padding:clamp(28px,3vw,42px);')}>
            {!sent ? (
              <div style={css('display:flex;flex-direction:column;gap:18px;')}>
                <div className="grid-form-2" style={css('display:grid;grid-template-columns:1fr 1fr;gap:18px;')}>
                  <div>
                    <label style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>Name</label>
                    <input className="field" type="text" value={form.name} onChange={upd('name')} placeholder="Jane Doe" style={css('width:100%;padding:13px 15px;font-size:15px;color:#0b1020;background:#fff;border:1px solid #dfe4ee;border-radius:11px;')} />
                  </div>
                  <div>
                    <label style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>Email</label>
                    <input className="field" type="email" value={form.email} onChange={upd('email')} placeholder="jane@company.com" style={css('width:100%;padding:13px 15px;font-size:15px;color:#0b1020;background:#fff;border:1px solid #dfe4ee;border-radius:11px;')} />
                  </div>
                </div>
                <div>
                  <label style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>Company</label>
                  <input className="field" type="text" value={form.company} onChange={upd('company')} placeholder="Company name" style={css('width:100%;padding:13px 15px;font-size:15px;color:#0b1020;background:#fff;border:1px solid #dfe4ee;border-radius:11px;')} />
                </div>
                <div>
                  <label style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>What are you trying to fix?</label>
                  <textarea className="field" value={form.message} onChange={upd('message')} rows={4} placeholder="A few lines about where things are slow, manual, or breaking." style={css('width:100%;padding:13px 15px;font-size:15px;color:#0b1020;background:#fff;border:1px solid #dfe4ee;border-radius:11px;resize:vertical;')}></textarea>
                </div>
                <button className="submit" onClick={onSubmit} style={{ all: 'unset', cursor: 'pointer', textAlign: 'center', background: '#2a6bff', color: '#fff', fontSize: '16px', fontWeight: 600, padding: '16px', borderRadius: '12px', marginTop: '4px' }}>Request my free audit</button>
                <p style={css('font-size:12.5px;color:#9aa3b8;text-align:center;margin:0;')}>We will only use your details to reply about your audit.</p>
              </div>
            ) : (
              <div style={css('text-align:center;padding:30px 10px;display:flex;flex-direction:column;align-items:center;')}>
                <div style={css('width:60px;height:60px;border-radius:50%;background:#eaf0ff;display:flex;align-items:center;justify-content:center;margin-bottom:22px;')}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2a6bff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:26px;font-weight:500;margin:0 0 10px;color:#0b1020;")}>Thanks, {sentName}.</h3>
                <p style={css('font-size:16px;line-height:1.55;color:#6b7488;margin:0 0 26px;max-width:340px;')}>We have got your request and will be in touch within one business day to set up your audit.</p>
                <Link to={ROUTES.home} style={css('font-size:15px;font-weight:600;color:#2a6bff;')}>Back to home</Link>
              </div>
            )}
          </div>

        </div>
      </section>
      <div style={css('height:40px;')}></div>
    </>
  );
}
