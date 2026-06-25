import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { SERVICE_CATEGORIES } from '@/shared/constants/categories';
import { homeHash, ROUTES, serviceDetailPath } from '@/shared/constants/routes';

const MOBILE_NAV_MQ = '(max-width: 768px)';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return true;
  }
  return false;
}

function Chevron({ className = 'nav-dropdown__chevron' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesLeaveTimer = useRef<ReturnType<typeof setTimeout>>();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileRootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const animRef = useRef<gsap.core.Timeline | null>(null);
  const mountedRef = useRef(false);

  const handleHashLink = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      scrollToId(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
    setMenuOpen(false);
  };

  const openServicesMenu = () => {
    if (servicesLeaveTimer.current) clearTimeout(servicesLeaveTimer.current);
    setServicesHover(true);
  };

  const closeServicesMenu = () => {
    servicesLeaveTimer.current = setTimeout(() => setServicesHover(false), 120);
  };

  const closeMenu = () => setMenuOpen(false);

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

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    const onChange = () => {
      if (!mq.matches) setMenuOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    const root = mobileRootRef.current;
    const backdrop = backdropRef.current;
    const sidebar = sidebarRef.current;
    if (!root || !backdrop || !sidebar) return;

    const items = sidebar.querySelectorAll<HTMLElement>('[data-nav-animate]');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    animRef.current?.kill();

    if (!mountedRef.current) {
      mountedRef.current = true;
      gsap.set(backdrop, { opacity: 0 });
      gsap.set(sidebar, { x: '100%', visibility: 'hidden' });
      gsap.set(items, { opacity: 0, x: 20 });
      return;
    }

    if (menuOpen) {
      root.classList.add('nav-mobile--open');

      if (reduced) {
        gsap.set(backdrop, { opacity: 1 });
        gsap.set(sidebar, { x: 0 });
        gsap.set(items, { opacity: 1, x: 0 });
      } else {
        animRef.current = gsap
          .timeline()
          .set(sidebar, { visibility: 'visible' })
          .fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.28, ease: 'power2.out' })
          .fromTo(sidebar, { x: '100%' }, { x: 0, duration: 0.42, ease: 'power3.out' }, '<0.04')
          .fromTo(
            items,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.32, stagger: 0.05, ease: 'power2.out' },
            '-=0.22',
          );
      }

      const firstLink = sidebar.querySelector<HTMLElement>('a, button');
      firstLink?.focus();
    } else {
      root.classList.remove('nav-mobile--open');

      if (reduced) {
        gsap.set(backdrop, { opacity: 0 });
        gsap.set(sidebar, { x: '100%', visibility: 'hidden' });
        gsap.set(items, { opacity: 0, x: 20 });
      } else {
        animRef.current = gsap
          .timeline({
            onComplete: () => {
              gsap.set(sidebar, { visibility: 'hidden' });
            },
          })
          .to(items, { opacity: 0, x: 12, duration: 0.15, stagger: 0.02, ease: 'power2.in' })
          .to(sidebar, { x: '100%', duration: 0.32, ease: 'power3.in' }, '<0.05')
          .to(backdrop, { opacity: 0, duration: 0.22, ease: 'power2.in' }, '-=0.18');
      }

      toggleRef.current?.focus();
    }

    return () => {
      animRef.current?.kill();
    };
  }, [menuOpen]);

  const isHome = pathname === '/';
  const solidNav = scrolled || !isHome || menuOpen;
  const navClass = ['nav', solidNav ? 'nav--scrolled' : '', menuOpen ? 'nav--open' : ''].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass} aria-label="Main navigation">
        <div className="nav__inner">
        <Link to={homeHash('hero')} className="nav__brand-link" onClick={menuOpen ? closeMenu : undefined}>
          <span className="nav__logo-wrap">
            <img className="nav__logo-white" src="/assets/logo-mark-white.png" alt="Silver Axis" />
            <img className="nav__logo-navy" src="/assets/logo-mark-navy.png" alt="" aria-hidden="true" />
          </span>
          <span className="nav__brand nav__brand-text">SILVER AXIS</span>
        </Link>

        <div className="nav-links">
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
          <a href="/#testimonials" className="navlink" onClick={(e) => handleHashLink('testimonials', e)}>Testimonials</a>
          <Link to={ROUTES.contact} className="navlink">Contact</Link>
        </div>

        <Link to={ROUTES.contact} className="nav-cta btnW">Book a free audit</Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-sidebar"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        </div>
      </nav>

      <div ref={mobileRootRef} className="nav-mobile" aria-hidden={!menuOpen}>
        <div
          ref={backdropRef}
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />

        <aside
          id="nav-sidebar"
          ref={sidebarRef}
          className="nav-sidebar"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          aria-hidden={!menuOpen}
        >
          <div className="nav-sidebar__header" data-nav-animate>
            <span className="nav-sidebar__label">Menu</span>
            <button type="button" className="nav-sidebar__close" onClick={closeMenu} aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="nav-sidebar__nav">
            <Link to={homeHash('hero')} className="nav-sidebar__link" data-nav-animate onClick={closeMenu}>
              Home
            </Link>

            <div className={`nav-sidebar__group${servicesOpen ? ' nav-sidebar__group--open' : ''}`}>
              <button
                type="button"
                className="nav-sidebar__link nav-sidebar__link--toggle"
                data-nav-animate
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((o) => !o)}
              >
                Services
                <Chevron className="nav-sidebar__chevron" />
              </button>
              <div className="nav-sidebar__sub">
                <Link to={ROUTES.services} className="nav-sidebar__sublink" data-nav-animate onClick={closeMenu}>
                  View all services
                </Link>
                {SERVICE_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={serviceDetailPath(cat.slug)}
                    className="nav-sidebar__sublink"
                    data-nav-animate
                    onClick={closeMenu}
                  >
                    {cat.navLabel}
                  </Link>
                ))}
              </div>
            </div>

            <Link to={ROUTES.projects} className="nav-sidebar__link" data-nav-animate onClick={closeMenu}>
              Projects
            </Link>
            <a
              href="/#testimonials"
              className="nav-sidebar__link"
              data-nav-animate
              onClick={(e) => handleHashLink('testimonials', e)}
            >
              Testimonials
            </a>
            <Link to={ROUTES.contact} className="nav-sidebar__link" data-nav-animate onClick={closeMenu}>
              Contact
            </Link>
          </nav>

          <div className="nav-sidebar__footer" data-nav-animate>
            <Link to={ROUTES.contact} className="nav-sidebar__cta btnW" onClick={closeMenu}>
              Book a free audit
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
