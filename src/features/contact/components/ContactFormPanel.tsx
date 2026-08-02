'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import {
  CONTACT_FORM_HEADING,
  FORMSPREE_URL,
  HELP_OPTIONS,
  TIMELINE_OPTIONS,
  type HelpOptionId,
} from '../contact.data';
import {
  hasErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormState,
} from '../contact.validation';

const emptyForm: ContactFormState = {
  name: '',
  email: '',
  company: '',
  role: '',
  help: '',
  timeline: '',
  message: '',
};

export function ContactFormPanel() {
  const [form, setForm] = useState<ContactFormState>(emptyForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [sentName, setSentName] = useState('there');

  const upd = (k: keyof ContactFormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const setHelp = (id: HelpOptionId) => {
    setForm((f) => ({ ...f, help: id }));
    if (errors.help) setErrors((prev) => ({ ...prev, help: undefined }));
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
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          help: form.help,
          timeline: form.timeline,
          message: form.message,
        }),
      });

      if (res.ok) {
        const first = form.name.trim().split(/\s+/)[0];
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
    <div className="contact-form-block">
      <div className="contact-form-block__head">
        <div className="contact-intro__eyebrow-row">
          <span className="contact-intro__bar" aria-hidden="true" />
          <span className="contact-intro__eyebrow">{CONTACT_FORM_HEADING.eyebrow}</span>
        </div>
        <h2 id="contact-connect-heading" className="contact-form-block__title">
          {CONTACT_FORM_HEADING.titleLead}{' '}
          <span className="contact-hero__accent">{CONTACT_FORM_HEADING.titleAccent}</span>
        </h2>
      </div>

      <div className="contact-form-panel">
        {!sent ? (
          <>
            <h3 className="contact-form-panel__title">{CONTACT_FORM_HEADING.formTitle}</h3>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="contact-form__grid">
                <div className="contact-form__field">
                  <label htmlFor="contact-name">Full name</label>
                  <input
                    id="contact-name"
                    className={`field contact-field${errors.name ? ' field--invalid' : ''}`}
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={upd('name')}
                    placeholder="Jane Doe"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="field-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-email">Email address</label>
                  <input
                    id="contact-email"
                    className={`field contact-field${errors.email ? ' field--invalid' : ''}`}
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={upd('email')}
                    placeholder="jane@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="field-error" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    className="field contact-field"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={upd('company')}
                    placeholder="Company name"
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-role">Role</label>
                  <input
                    id="contact-role"
                    className="field contact-field"
                    type="text"
                    autoComplete="organization-title"
                    value={form.role}
                    onChange={upd('role')}
                    placeholder="Founder, CTO, Ops lead…"
                  />
                </div>
              </div>

              <fieldset className="contact-form__fieldset">
                <legend>How can we help?</legend>
                <div className="contact-help">
                  {HELP_OPTIONS.map((opt) => {
                    const active = form.help === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`contact-help__tile${active ? ' contact-help__tile--active' : ''}`}
                        aria-pressed={active}
                        onClick={() => setHelp(opt.id)}
                      >
                        <span className="contact-help__label">{opt.label}</span>
                        <span className="contact-help__desc">{opt.desc}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.help && (
                  <p className="field-error" role="alert">
                    {errors.help}
                  </p>
                )}
              </fieldset>

              <div className="contact-form__field">
                <label htmlFor="contact-timeline">Timeline</label>
                <select
                  id="contact-timeline"
                  className="field contact-field contact-field--select"
                  value={form.timeline}
                  onChange={upd('timeline')}
                >
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt.value || 'empty'} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className={`field contact-field${errors.message ? ' field--invalid' : ''}`}
                  rows={5}
                  value={form.message}
                  onChange={upd('message')}
                  placeholder="A few lines about where things are slow, manual, or breaking."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                />
                {errors.message && (
                  <p id="contact-message-error" className="field-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-primary submit contact-form__submit" disabled={sending}>
                {sending ? 'Sending…' : 'Send message →'}
              </button>

              {sendError && (
                <p className="contact-form__error" role="alert">
                  Something went wrong. Email us at info@silveraxisltd.com
                </p>
              )}
              <p className="contact-form__note">We only use your details to reply about this enquiry.</p>
            </form>
          </>
        ) : (
          <div className="contact-form__success" role="status">
            <div className="contact-form__success-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3>Thanks, {sentName}.</h3>
            <p>We have your message and will reply within one business day.</p>
            <Link href={ROUTES.home} className="contact-form__back">
              Back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
