'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from '@/shared/components/ui/icons';
import type { NavItem } from '@/shared/content/nav';

interface NavDesktopDropdownProps {
  item: Extract<NavItem, { type: 'dropdown' }>;
}

function splitAlternate<T>(items: T[]): T[][] {
  const columns: [T[], T[]] = [[], []];
  items.forEach((item, i) => columns[i % 2].push(item));
  return columns;
}

export function NavDesktopDropdown({ item }: NavDesktopDropdownProps) {
  const [open, setOpen] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openMenu = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    leaveTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const columns = item.columns === 2 ? splitAlternate(item.items) : [item.items];

  return (
    <div
      className={`nav-dropdown${open ? ' nav-dropdown--open' : ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <Link href={item.href} className="nav-dropdown__trigger navlink">
        {item.label}
        <ChevronDown className="nav-dropdown__chevron" />
      </Link>
      <div className={`nav-dropdown__menu${item.columns === 2 ? ' nav-dropdown__menu--wide' : ''}`} role="menu">
        <div className="nav-dropdown__columns">
          {columns.map((col, i) => (
            <div className="nav-dropdown__col" key={i}>
              {col.map((link) => (
                <Link key={link.label} href={link.href} className="nav-dropdown__item" role="menuitem">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {item.viewAllHref && item.viewAllLabel && (
          <Link href={item.viewAllHref} className="nav-dropdown__viewall" role="menuitem">
            {item.viewAllLabel}
            <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
