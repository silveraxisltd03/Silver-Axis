import { Link } from 'react-router-dom';
import { ROUTES, serviceDetailPath } from '@/shared/constants/routes';
import { ENV } from '@/shared/config/env';
import { css } from '@/shared/lib/css';

export function Footer() {
  return (
    <footer className="site-footer section-x">
      <div className="footer-grid container">
        <div>
          <Link to={ROUTES.home} style={css('display:flex;align-items:center;gap:12px;margin-bottom:20px;')}>
            <img src="/assets/logo-mark-white.png" alt="Silver Axis" style={css('height:28px;width:auto;')} />
            <span style={css('font-size:16px;font-weight:600;letter-spacing:.2em;')}>SILVER AXIS</span>
          </Link>
          <p style={css('font-size:14.5px;line-height:1.6;color:#7b8499;max-width:300px;margin:0;')}>Precision-grade technology, moving in every direction. The right mix of AI and engineering, built to last.</p>
        </div>
        <div>
          <p style={css('font-size:13px;color:#5b6680;margin:0 0 16px;font-weight:500;')}>Services</p>
          <div style={css('display:flex;flex-direction:column;gap:11px;')}>
            <Link to={serviceDetailPath('ai-automation')} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>AI Automation</Link>
            <Link to={serviceDetailPath('web-mobile')} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Web &amp; Mobile</Link>
            <Link to={serviceDetailPath('custom-systems')} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Custom Systems</Link>
          </div>
        </div>
        <div>
          <p style={css('font-size:13px;color:#5b6680;margin:0 0 16px;font-weight:500;')}>Company</p>
          <div style={css('display:flex;flex-direction:column;gap:11px;')}>
            <Link to={ROUTES.projects} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Projects</Link>
            <Link to={ROUTES.contact} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Contact</Link>
            <Link to={ROUTES.contact} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Free audit</Link>
          </div>
        </div>
        <div>
          <p style={css('font-size:13px;color:#5b6680;margin:0 0 16px;font-weight:500;')}>Connect</p>
          <div style={css('display:flex;flex-direction:column;gap:11px;')}>
            {ENV.linkedin ? (
              <a href={ENV.linkedin} className="navlink" style={css('font-size:14px;color:#9aa3b8;')} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            ) : null}
            {ENV.twitter ? (
              <a href={ENV.twitter} className="navlink" style={css('font-size:14px;color:#9aa3b8;')} target="_blank" rel="noopener noreferrer">X / Twitter</a>
            ) : null}
            <a href="mailto:info@silveraxisltd.com" className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>info@silveraxisltd.com</a>
          </div>
        </div>
      </div>
      <div className="site-footer__bar container">
        <span style={css('font-size:13px;color:#5b6680;')}>© 2026 Silver Axis. All rights reserved.</span>
        <span style={css('font-size:13px;color:#5b6680;')}>Built, not assembled.</span>
      </div>
      <div className="site-footer__watermark" aria-hidden="true">SILVER AXIS</div>
    </footer>
  );
}
