import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { css } from '../lib/css.js';

export default function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const logoW = document.getElementById('logoW');
    const logoN = document.getElementById('logoN');
    const brand = document.getElementById('navBrand');
    const cta = document.getElementById('navCta');
    const mobileCta = document.getElementById('navMobileCta');
    const toggle = document.getElementById('navToggle');
    const links = nav ? nav.querySelectorAll('.navlink') : [];
    if (!nav) return;
    const onScroll = () => {
      const solid = window.scrollY > 24;
      nav.classList.toggle('nav--scrolled', solid);
      nav.style.background = solid ? 'rgba(255,255,255,.86)' : 'transparent';
      nav.style.backdropFilter = solid ? 'blur(14px)' : 'none';
      nav.style.webkitBackdropFilter = solid ? 'blur(14px)' : 'none';
      nav.style.borderBottomColor = solid ? '#eceff5' : 'transparent';
      if (logoW) logoW.style.opacity = solid ? '0' : '1';
      if (logoN) logoN.style.opacity = solid ? '1' : '0';
      if (brand) brand.style.color = solid ? '#0b1020' : '#fff';
      links.forEach((l) => (l.style.color = solid ? '#6b7488' : '#cfd6e6'));
      if (cta) {
        cta.style.background = solid ? '#0b1020' : '#fff';
        cta.style.color = solid ? '#fff' : '#070b16';
      }
      if (mobileCta) {
        mobileCta.style.background = solid ? '#0b1020' : '#fff';
        mobileCta.style.color = solid ? '#fff' : '#070b16';
      }
      if (toggle) {
        toggle.style.color = solid ? '#0b1020' : '#fff';
        toggle.style.borderColor = solid ? '#dfe4ee' : 'rgba(255,255,255,.2)';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={menuOpen ? 'nav--open' : ''} style={css('position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:20px 40px;transition:background .4s,backdrop-filter .4s,border-color .4s,padding .4s;border-bottom:1px solid transparent;')}>
        <Link to="/" style={css('display:flex;align-items:center;gap:12px;')}>
          <span style={css('position:relative;display:inline-block;height:30px;')}>
            <img id="logoW" src="/assets/logo-mark-white.png" alt="Silver Axis" style={css('height:30px;display:block;transition:opacity .4s;')} />
            <img id="logoN" src="/assets/logo-mark-navy.png" alt="" aria-hidden="true" style={css('height:30px;display:block;position:absolute;top:0;left:0;opacity:0;transition:opacity .4s;')} />
          </span>
          <span id="navBrand" style={css('font-size:17px;font-weight:600;letter-spacing:.2em;color:#fff;transition:color .4s;')}>SILVER AXIS</span>
        </Link>
        <div className="nav-links" style={css('display:flex;align-items:center;gap:36px;')}>
          <Link to="/services" className="navlink" style={css('font-size:15px;color:#cfd6e6;')}>Services</Link>
          <Link to="/portfolio" className="navlink" style={css('font-size:15px;color:#cfd6e6;')}>Projects</Link>
          <Link to="/contact" className="navlink" style={css('font-size:15px;color:#cfd6e6;')}>Contact</Link>
        </div>
        <Link to="/contact" id="navCta" className="nav-cta btnW" style={css('background:#fff;color:#070b16;font-size:14.5px;font-weight:600;padding:11px 24px;border-radius:999px;white-space:nowrap;transition:background .4s,color .4s,transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s;')}>Book a free audit</Link>
        <button
          id="navToggle"
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </nav>
      <div className={`nav-drawer${menuOpen ? ' nav-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <Link to="/services" className="navlink nav-drawer-link" onClick={closeMenu}>Services</Link>
        <Link to="/portfolio" className="navlink nav-drawer-link" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" className="navlink nav-drawer-link" onClick={closeMenu}>Contact</Link>
        <Link to="/contact" id="navMobileCta" className="btnW nav-drawer-cta" onClick={closeMenu}>Book a free audit</Link>
      </div>
    </>
  );
}
