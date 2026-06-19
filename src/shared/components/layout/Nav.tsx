import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { css } from '@/shared/lib/css';

export function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional route-change reset
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const navClass = ['nav', scrolled ? 'nav--scrolled' : '', menuOpen ? 'nav--open' : ''].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        <Link to={ROUTES.home} style={css('display:flex;align-items:center;gap:12px;')}>
          <span style={css('position:relative;display:inline-block;height:30px;width:30px;')}>
            <img className="nav__logo-white" src="/assets/logo-mark-white.png" alt="Silver Axis" style={css('height:30px;display:block;')} />
            <img className="nav__logo-navy" src="/assets/logo-mark-navy.png" alt="" aria-hidden="true" style={css('height:30px;display:block;position:absolute;top:0;left:0;')} />
          </span>
          <span className="nav__brand nav__brand-text" style={css('font-size:17px;font-weight:600;letter-spacing:.2em;')}>SILVER AXIS</span>
        </Link>
        <div className="nav-links" style={css('display:flex;align-items:center;gap:36px;')}>
          <Link to={ROUTES.services} className="navlink">Services</Link>
          <Link to={ROUTES.projects} className="navlink">Projects</Link>
          <Link to={ROUTES.contact} className="navlink">Contact</Link>
        </div>
        <Link to={ROUTES.contact} className="nav-cta btnW">Book a free audit</Link>
        <button
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
        <Link to={ROUTES.services} className="navlink nav-drawer-link" onClick={closeMenu}>Services</Link>
        <Link to={ROUTES.projects} className="navlink nav-drawer-link" onClick={closeMenu}>Projects</Link>
        <Link to={ROUTES.contact} className="navlink nav-drawer-link" onClick={closeMenu}>Contact</Link>
        <Link to={ROUTES.contact} className="btnW nav-drawer-cta" onClick={closeMenu}>Book a free audit</Link>
      </div>
    </>
  );
}
