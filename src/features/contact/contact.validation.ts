import type { ContactFormState } from '@/shared/types';

export type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

export function validateContactForm(form: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) errors.name = 'Name is required.';
  if (!email) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (message.length < 10) errors.message = 'Please add a few more details (at least 10 characters).';

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
