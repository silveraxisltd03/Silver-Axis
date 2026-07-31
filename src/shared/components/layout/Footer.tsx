import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';
import { FOOTER_CONTACT, FOOTER_GROUPS, FOOTER_SOCIAL } from '@/shared/content/footer';
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/shared/components/ui/icons';
import { FooterGroup } from './FooterGroup';

const SOCIAL_ICONS = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  GitHub: GitHubIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
} as const;

export function Footer() {
  return (
    <footer className="site-footer section-x">
      <div className="footer-grid container">
        <div className="footer-brand">
          <Link href={ROUTES.home} className="footer-brand__logo">
            <img src="/assets/logo-mark-white.png" alt="Silver Axis" />
            <span>SILVER AXIS</span>
          </Link>
          <blockquote className="footer-brand__quote">{FOOTER_CONTACT.description}</blockquote>
          <div className="footer-contact-info">
            <p>{FOOTER_CONTACT.address}</p>
            <a href={`mailto:${FOOTER_CONTACT.email}`} className="footer-link">{FOOTER_CONTACT.email}</a>
            <a href={`tel:${FOOTER_CONTACT.phone.replace(/[^+\d]/g, '')}`} className="footer-link">{FOOTER_CONTACT.phone}</a>
            <p>{FOOTER_CONTACT.hours}</p>
          </div>
          <div className="footer-social">
            {FOOTER_SOCIAL.map((social) => {
              const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social__icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-groups">
          {FOOTER_GROUPS.map((group) => (
            <FooterGroup key={group.title} group={group} />
          ))}
        </div>
      </div>

      <div className="site-footer__bar container">
        <span className="footer-fine-print">© 2026 Silver Axis. All rights reserved.</span>
        <span className="footer-fine-print">Built, not assembled.</span>
      </div>

      <div className="site-footer__watermark" aria-hidden="true">SILVER AXIS</div>
    </footer>
  );
}
