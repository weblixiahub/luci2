'use client';

import Link from 'next/link';

type SidebarProps = {
  open: boolean;
  close: () => void;
};

const navItems = [
  ['Text Me Hotties <3', 'https://laylo.com/luci'],
  ['Email Me', '/links'],
  ['Book Me', '/book-me'],
  ['Links', '/links']
];

export default function Sidebar({ open, close }: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <button className="closeBtn" onClick={close} aria-label="Close menu">
        ✕
      </button>
      <nav>
        {navItems.map(([label, href]) => (
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
    </aside>
  );
}
