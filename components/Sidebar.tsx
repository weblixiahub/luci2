'use client';

import Link from 'next/link';
import { navItems } from './nav-items';

type SidebarProps = {
  open: boolean;
  close: () => void;
};

export default function Sidebar({ open, close }: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="sidebarTopBar">
            <div className="sidebarStatus" aria-live="polite">
              <span className="statusDot" aria-hidden="true" />
              <span>Luci is online now</span>
            </div>
            <button className="closeBtn" onClick={close} aria-label="Close menu">
              X
            </button>
          </div>
          <nav>
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={close}
                className="menuItem"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <Link href="/" onClick={close} className="sidebarLogoWrap" aria-label="Luci home">
          <img src="/Logo White.webp" alt="Luci logo" className="sidebarLogo" />
        </Link>
      </div>
    </aside>
  );
}
