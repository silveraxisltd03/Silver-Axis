export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  role: string;
  help: string;
  timeline: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

export function validateContactForm(form: ContactFormState): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name) errors.name = 'Please enter your name.';
  else if (name.length < 2) errors.name = 'Name looks too short.';

  if (!email) errors.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';

  if (!form.help) errors.help = 'Choose how we can help.';

  if (!message) errors.message = 'Tell us a bit about what you need.';
  else if (message.length < 12) errors.message = 'A few more details will help us respond.';

  return errors;
}

export function hasErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
