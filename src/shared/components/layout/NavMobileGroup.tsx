'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from '@/shared/components/ui/icons';
import type { NavItem } from '@/shared/content/nav';

interface NavMobileGroupProps {
  item: Extract<NavItem, { type: 'dropdown' }>;
  onNavigate: () => void;
}

export function NavMobileGroup({ item, onNavigate }: NavMobileGroupProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`nav-sidebar__group${open ? ' nav-sidebar__group--open' : ''}`}>
      <button
        type="button"
        className="nav-sidebar__link nav-sidebar__link--toggle"
        data-nav-animate
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {item.label}
        <ChevronDown className="nav-sidebar__chevron" />
      </button>
      <div className="nav-sidebar__sub">
        <Link href={item.viewAllHref} className="nav-sidebar__sublink nav-sidebar__sublink--all" data-nav-animate onClick={onNavigate}>
          {item.viewAllLabel}
        </Link>
        {item.items.map((link) => (
          <Link key={link.label} href={link.href} className="nav-sidebar__sublink" data-nav-animate onClick={onNavigate}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
