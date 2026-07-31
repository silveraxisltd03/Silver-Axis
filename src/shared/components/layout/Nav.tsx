'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { homeHash, ROUTES } from '@/shared/constants/routes';
import { NAV_ITEMS } from '@/shared/content/nav';
import { NavDesktopDropdown } from './NavDesktopDropdown';
import { NavMobileGroup } from './NavMobileGroup';

const MOBILE_NAV_MQ = '(max-width: 768px)';

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileRootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const animRef = useRef<gsap.core.Timeline | null>(null);
  const mountedRef = useRef(false);

  const closeMenu = () => setMenuOpen(false);

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
        <Link href={homeHash('hero')} className="nav__brand-link" onClick={menuOpen ? closeMenu : undefined}>
          <span className="nav__logo-wrap">
            <img className="nav__logo-white" src="/assets/logo-mark-white.png" alt="Silver Axis" />
            <img className="nav__logo-navy" src="/assets/logo-mark-navy.png" alt="" aria-hidden="true" />
          </span>
          <span className="nav__brand nav__brand-text">SILVER AXIS</span>
        </Link>

        <div className="nav-links" key={pathname}>
          {NAV_ITEMS.map((item) =>
            item.type === 'dropdown' ? (
              <NavDesktopDropdown key={item.label} item={item} />
            ) : (
              <Link key={item.label} href={item.href} className="navlink">
                {item.label}
              </Link>
            ),
          )}
        </div>

        <Link href={ROUTES.contact} className="nav-cta btnW">Book a free audit</Link>

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
            <Link href={homeHash('hero')} className="nav-sidebar__brand" onClick={closeMenu}>
              <img className="nav-sidebar__brand-logo" src="/assets/logo-mark-white.png" alt="Silver Axis" />
              <span>SILVER AXIS</span>
            </Link>
            <button type="button" className="nav-sidebar__close" onClick={closeMenu} aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="nav-sidebar__nav" key={pathname}>
            <Link href={homeHash('hero')} className="nav-sidebar__link" data-nav-animate onClick={closeMenu}>
              Home
            </Link>
            {NAV_ITEMS.map((item) =>
              item.type === 'dropdown' ? (
                <NavMobileGroup key={item.label} item={item} onNavigate={closeMenu} />
              ) : (
                <Link key={item.label} href={item.href} className="nav-sidebar__link" data-nav-animate onClick={closeMenu}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="nav-sidebar__footer" data-nav-animate>
            <Link href={ROUTES.contact} className="nav-sidebar__cta btnW" onClick={closeMenu}>
              Book a free audit
            </Link>
            <Link href="#" className="nav-sidebar__cta nav-sidebar__cta--secondary btnW" onClick={closeMenu}>
              Hire talent
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
