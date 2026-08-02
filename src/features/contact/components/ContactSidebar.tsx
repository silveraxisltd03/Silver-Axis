'use client';

import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/shared/components/ui/icons';
import { CONTACT_SIDEBAR } from '../contact.data';
import { openCalendly } from '../lib/calendly';
import { TimezoneOverlap } from './TimezoneOverlap';

const SOCIAL_ICONS = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  GitHub: GitHubIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} as const;

export function ContactSidebar() {
  return (
    <aside className="contact-sidebar">
      <div className="contact-sidebar__direct">
        <h3 className="contact-sidebar__heading">Direct contact</h3>
        <ul className="contact-sidebar__list">
          <li>
            <span className="contact-sidebar__label">Email</span>
            <a href={`mailto:${CONTACT_SIDEBAR.email}`}>{CONTACT_SIDEBAR.email}</a>
          </li>
          <li>
            <span className="contact-sidebar__label">Phone / WhatsApp</span>
            <a href={`tel:${CONTACT_SIDEBAR.phone.replace(/\s+/g, '')}`}>{CONTACT_SIDEBAR.phoneDisplay}</a>
          </li>
          <li>
            <span className="contact-sidebar__label">Studio</span>
            <span>{CONTACT_SIDEBAR.address}</span>
          </li>
          <li>
            <span className="contact-sidebar__label">Hours</span>
            <span>{CONTACT_SIDEBAR.hours}</span>
          </li>
        </ul>
      </div>

      <TimezoneOverlap />

      <div className="contact-booking">
        <h3 className="contact-booking__title">{CONTACT_SIDEBAR.bookingTitle}</h3>
        <p className="contact-booking__body">{CONTACT_SIDEBAR.bookingBody}</p>
        <button type="button" className="contact-booking__cta" onClick={openCalendly}>
          {CONTACT_SIDEBAR.bookingCta}
        </button>
      </div>

      <div className="contact-sidebar__social">
        {CONTACT_SIDEBAR.social.map((social) => {
          const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
          if (!Icon) return null;
          return (
            <a
              key={social.label}
              href={social.href}
              className="contact-sidebar__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
