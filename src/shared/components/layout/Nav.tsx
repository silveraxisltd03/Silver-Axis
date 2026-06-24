import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '@/shared/constants/categories';
import { homeHash, ROUTES, serviceDetailPath } from '@/shared/constants/routes';
import { css } from '@/shared/lib/css';

function Chevron() {
  return (
    <svg className="nav-dropdown__chevron" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const servicesLeaveTimer = useRef<ReturnType<typeof setTimeout>>();
  const [scrolled, setScrolled] = useState(false);

  const openServicesMenu = () => {
    if (servicesLeaveTimer.current) clearTimeout(servicesLeaveTimer.current);
    setServicesHover(true);
  };

  const closeServicesMenu = () => {
    servicesLeaveTimer.current = setTimeout(() => setServicesHover(false), 120);
  };

  useEffect(() => () => {
    if (servicesLeaveTimer.current) clearTimeout(servicesLeaveTimer.current);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional route-change reset
    setMenuOpen(false);
    setServicesOpen(false);
    setServicesHover(false);
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
  const isHome = pathname === '/';
  const solidNav = scrolled || !isHome;
  const navClass = ['nav', solidNav ? 'nav--scrolled' : '', menuOpen ? 'nav--open' : ''].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        <Link to={homeHash('hero')} style={css('display:flex;align-items:center;gap:12px;')}>
          <span style={css('position:relative;display:inline-block;height:30px;width:30px;')}>
            <img className="nav__logo-white" src="/assets/logo-mark-white.png" alt="Silver Axis" style={css('height:30px;display:block;')} />
            <img className="nav__logo-navy" src="/assets/logo-mark-navy.png" alt="" aria-hidden="true" style={css('height:30px;display:block;position:absolute;top:0;left:0;')} />
          </span>
          <span className="nav__brand nav__brand-text" style={css('font-size:17px;font-weight:600;letter-spacing:.2em;')}>SILVER AXIS</span>
        </Link>
        <div className="nav-links" style={css('display:flex;align-items:center;gap:36px;')}>
          <Link to={homeHash('hero')} className="navlink">Home</Link>

          <div
            className={`nav-dropdown${servicesHover ? ' nav-dropdown--open' : ''}`}
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenu}
          >
            <Link to={ROUTES.services} className="nav-dropdown__trigger navlink">
              Services
              <Chevron />
            </Link>
            <div className="nav-dropdown__menu" role="menu">
              <Link to={ROUTES.services} className="nav-dropdown__item nav-dropdown__item--all" role="menuitem">
                View all services
              </Link>
              {SERVICE_CATEGORIES.map((cat) => (
                <Link key={cat.slug} to={serviceDetailPath(cat.slug)} className="nav-dropdown__item" role="menuitem">
                  {cat.navLabel}
                </Link>
              ))}
            </div>
          </div>

          <Link to={ROUTES.projects} className="navlink">Projects</Link>
          <Link to={homeHash('testimonials')} className="navlink">Testimonials</Link>
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
        <Link to={homeHash('hero')} className="navlink nav-drawer-link" onClick={closeMenu}>Home</Link>

        <div className={`nav-drawer-services${servicesOpen ? ' nav-drawer-services--open' : ''}`}>
          <button
            type="button"
            className="nav-drawer-services__toggle"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((o) => !o)}
          >
            Services
            <Chevron />
          </button>
          <div className="nav-drawer-services__sub">
            <Link to={ROUTES.services} className="navlink nav-drawer-link" onClick={closeMenu}>View all services</Link>
            {SERVICE_CATEGORIES.map((cat) => (
              <Link key={cat.slug} to={serviceDetailPath(cat.slug)} className="navlink nav-drawer-link" onClick={closeMenu}>
                {cat.navLabel}
              </Link>
            ))}
          </div>
        </div>

        <Link to={ROUTES.projects} className="navlink nav-drawer-link" onClick={closeMenu}>Projects</Link>
        <Link to={homeHash('testimonials')} className="navlink nav-drawer-link" onClick={closeMenu}>Testimonials</Link>
        <Link to={ROUTES.contact} className="navlink nav-drawer-link" onClick={closeMenu}>Contact</Link>
        <Link to={ROUTES.contact} className="btnW nav-drawer-cta" onClick={closeMenu}>Book a free audit</Link>
      </div>
    </>
  );
}
