'use client';

import Link from 'next/link';

type SidebarProps = {
  open: boolean;
  close: () => void;
};

const navItems = [
  ['Merch', 'https://luciofficial.myshopify.com/'],
  ['Show Tickets', 'https://laylo.com/luci/m/WafCOy'],
  ['VIP Upgrades', 'https://luciofficial.myshopify.com/products/luci-vip-package'],
  ['Exclusive Content', 'https://www.passes.com/luci_officialxo'],
  ['Text Me Hotties <3', 'https://laylo.com/luci'],
  ['Email Me', '/email-me'],
  ['Book Me', '/book-me'],
  ['Links', '/links']
];

export default function Sidebar({ open, close }: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
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
