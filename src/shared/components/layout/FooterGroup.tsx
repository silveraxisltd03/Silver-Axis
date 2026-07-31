'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from '@/shared/components/ui/icons';
import type { FooterGroup as FooterGroupData } from '@/shared/content/footer';

interface FooterGroupProps {
  group: FooterGroupData;
}

/**
 * A single footer nav column. Renders as an always-open list on desktop
 * and a collapsible accordion on mobile (see the ≤768px rules in components.css) —
 * the toggle still works at desktop widths, it just has no visible effect there.
 */
export function FooterGroup({ group }: FooterGroupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `footer-group-${group.title.toLowerCase()}`;

  return (
    <div className="footer-group">
      <button
        type="button"
        className="footer-group__header"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        {group.title}
        <ChevronDown className={`footer-group__chevron${isOpen ? ' footer-group__chevron--open' : ''}`} />
      </button>
      <div id={panelId} className={`footer-group__panel${isOpen ? ' footer-group__panel--open' : ''}`}>
        <ul className="footer-group__panel-inner">
          {group.links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="footer-link">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
