import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { css } from '@/shared/lib/css';

export function Footer() {
  return (
    <footer className="section-x" style={css('position:relative;background:#070b16;color:#eef1f8;padding:70px 40px 0;overflow:hidden;')}>
      <div className="grid-4" style={css('max-width:1240px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px;position:relative;z-index:2;')}>
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
            <Link to={ROUTES.services} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>AI Automation</Link>
            <Link to={ROUTES.services} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Web &amp; Mobile</Link>
            <Link to={ROUTES.services} className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>Custom Systems</Link>
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
            <a href="#" className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>LinkedIn</a>
            <a href="#" className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>X / Twitter</a>
            <a href="mailto:hello@silveraxis.com" className="navlink" style={css('font-size:14px;color:#9aa3b8;')}>hello@silveraxis.com</a>
          </div>
        </div>
      </div>
      <div style={css('max-width:1240px;margin:48px auto 0;padding:22px 0;border-top:1px solid rgba(255,255,255,.06);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;position:relative;z-index:2;')}>
        <span style={css('font-size:13px;color:#5b6680;')}>© 2026 Silver Axis. All rights reserved.</span>
        <span style={css('font-size:13px;color:#5b6680;')}>Built, not assembled.</span>
      </div>
      <div aria-hidden="true" style={css('text-align:center;font-size:clamp(60px,17vw,260px);font-weight:700;letter-spacing:.04em;line-height:.8;color:rgba(255,255,255,.025);margin-top:10px;user-select:none;white-space:nowrap;')}>SILVER AXIS</div>
    </footer>
  );
}
