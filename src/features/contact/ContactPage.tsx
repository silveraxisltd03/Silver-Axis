import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '@/shared/components/seo/PageMeta';
import { HeroBand } from '@/shared/components/ui/HeroBand';
import { Reveal } from '@/shared/components/ui/Reveal';
import { ROUTES } from '@/shared/constants/routes';
import { css } from '@/shared/lib/css';
import { openCalendly } from '@/shared/lib/calendly';
import type { ContactFormState } from '@/shared/types';
import { STEPS } from './contact.data';
import { hasErrors, validateContactForm, type ContactFormErrors } from './contact.validation';

const FORMSPREE_URL = 'https://formspree.io/f/mykqkvzl';

const emptyForm: ContactFormState = { name: '', email: '', company: '', message: '' };

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sentName, setSentName] = useState('there');

  const upd = (k: keyof ContactFormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) return;

    setSending(true);
    setSendError(false);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          company: form.company,
          message: form.message,
        }),
      });

      if (res.ok) {
        const first = form.name.trim().split(' ')[0];
        setSentName(first || 'there');
        setSent(true);
      } else {
        setSendError(true);
      }
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Contact"
        description="Book a free audit with Silver Axis. Tell us where things are slow or breaking. No obligation."
      />

      <HeroBand
        title="Start with a free audit."
        subtitle="Tell us where things are slow or breaking. We will map what to automate, what to rebuild, and what to leave alone. No obligation."
      />

      <section className="section-x container page-section">
        <div className="grid-contact">
          <Reveal>
            <h2 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:clamp(26px,2.6vw,38px);line-height:1.1;letter-spacing:-.02em;font-weight:500;margin:0 0 28px;color:#0b1020;")}>What happens next.</h2>
            <div style={css('display:flex;flex-direction:column;gap:26px;margin-bottom:42px;')}>
              {STEPS.map((s) => (
                <div key={s.n} style={css('display:flex;gap:16px;')}>
                  <span style={css('width:34px;height:34px;flex:none;border-radius:9px;background:#eaf0ff;color:#2a6bff;font-weight:600;font-size:14px;display:flex;align-items:center;justify-content:center;')} aria-hidden="true">{s.n}</span>
                  <div>
                    <div style={css('font-size:16.5px;font-weight:600;color:#0b1020;margin-bottom:3px;')}>{s.title}</div>
                    <p style={css('font-size:15px;line-height:1.55;color:#6b7488;margin:0;')}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={css('height:1px;background:#eef1f6;margin-bottom:28px;')} aria-hidden="true"></div>
            <div style={css('display:flex;flex-direction:column;gap:14px;')}>
              <a href="mailto:info@silveraxisltd.com" style={css('display:flex;align-items:center;gap:11px;font-size:15.5px;color:#2b3346;font-weight:500;')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a6bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                info@silveraxisltd.com
              </a>
            </div>
            <a href="#" onClick={openCalendly} style={css('display:inline-flex;align-items:center;gap:10px;margin-top:30px;font-size:15px;font-weight:600;color:#2a6bff;')}>
              Prefer to book directly? Grab a time
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
            </a>
          </Reveal>

          <Reveal className="contact-form-panel">
            {!sent ? (
              <form onSubmit={onSubmit} noValidate style={css('display:flex;flex-direction:column;gap:18px;')}>
                <div className="grid-form-2">
                  <div>
                    <label htmlFor="contact-name" style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>Name</label>
                    <input
                      id="contact-name"
                      className={`field contact-field${errors.name ? ' field--invalid' : ''}`}
                      type="text"
                      value={form.name}
                      onChange={upd('name')}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    />
                    {errors.name && <p id="contact-name-error" className="field-error" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>Email</label>
                    <input
                      id="contact-email"
                      className={`field contact-field${errors.email ? ' field--invalid' : ''}`}
                      type="email"
                      value={form.email}
                      onChange={upd('email')}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    />
                    {errors.email && <p id="contact-email-error" className="field-error" role="alert">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-company" style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>Company</label>
                  <input
                    id="contact-company"
                    className="field contact-field"
                    type="text"
                    value={form.company}
                    onChange={upd('company')}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={css('display:block;font-size:13px;font-weight:600;color:#0b1020;margin-bottom:8px;')}>What are you trying to fix?</label>
                  <textarea
                    id="contact-message"
                    className={`field contact-field${errors.message ? ' field--invalid' : ''}`}
                    value={form.message}
                    onChange={upd('message')}
                    rows={4}
                    placeholder="A few lines about where things are slow, manual, or breaking."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    style={css('resize:vertical;')}
                  />
                  {errors.message && <p id="contact-message-error" className="field-error" role="alert">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary submit" disabled={sending}>
                  {sending ? 'Sending…' : 'Request my free audit'}
                </button>
                {sendError && (
                  <p style={css('font-size:13px;color:#e53935;text-align:center;margin:0;')} role="alert">
                    Something went wrong. Please email us directly at info@silveraxisltd.com
                  </p>
                )}
                <p style={css('font-size:12.5px;color:#9aa3b8;text-align:center;margin:0;')}>We will only use your details to reply about your audit.</p>
              </form>
            ) : (
              <div style={css('text-align:center;padding:30px 10px;display:flex;flex-direction:column;align-items:center;')} role="status">
                <div style={css('width:60px;height:60px;border-radius:50%;background:#eaf0ff;display:flex;align-items:center;justify-content:center;margin-bottom:22px;')} aria-hidden="true">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2a6bff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 style={css("font-family:'Clash Display','General Sans',sans-serif;font-size:26px;font-weight:500;margin:0 0 10px;color:#0b1020;")}>Thanks, {sentName}.</h3>
                <p style={css('font-size:16px;line-height:1.55;color:#6b7488;margin:0 0 26px;max-width:340px;')}>We have got your request and will be in touch within one business day to set up your audit.</p>
                <Link to={ROUTES.home} style={css('font-size:15px;font-weight:600;color:#2a6bff;')}>Back to home</Link>
              </div>
            )}
          </Reveal>
        </div>
      </section>
      <div style={css('height:40px;')} aria-hidden="true"></div>
    </>
  );
}
