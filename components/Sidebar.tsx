'use client';

import Link from 'next/link';

type SidebarProps = {
  open: boolean;
  close: () => void;
};

const navItems = [
  ['Merch', '#'],
  ['Show Tickets', '#tour'],
  ['VIP Upgrades', '#'],
  ['Exclusive Content', '#'],
  ['Text Me Hotties <3', '#'],
  ['Email Me', 'mailto:hello@luci.music'],
  ['Book Me', 'mailto:booking@luci.music'],
  ['Links', '/links'],
  ['Press (EDMtrain)', '#'],
  ['Booking Contacts', '#booking']
];

export default function Sidebar({ open, close }: SidebarProps) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <button className="closeBtn" onClick={close} aria-label="Close menu">
        ✕
      </button>
      <nav>
        {navItems.map(([label, href]) => (
          <Link key={label} href={href} onClick={close} className="menuItem">
            {label}
          </Link>
        ))}
      </nav>
      <div className="menuCards">
        <a href="mailto:hello@luci.music" className="imageCard">
          <img src="/Milkshakes3.webp" alt="Email Luci" />
          <span>Email Me</span>
        </a>
        <a href="mailto:booking@luci.music" className="imageCard">
          <img src="/Hero2.webp" alt="Book Luci" />
          <span>Book Me</span>
        </a>
      </div>
    </aside>
  );
}
