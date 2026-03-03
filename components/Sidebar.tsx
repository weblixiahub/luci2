'use client';

import Link from 'next/link';
import { SiDiscord, SiFacebook, SiInstagram, SiTiktok, SiX } from 'react-icons/si';

type SidebarProps = {
  open: boolean;
  close: () => void;
};

const navItems = [
  ['Text Me Hotties <3', 'https://laylo.com/luci'],
  ['Email Me', 'mailto:luciofficialmusic13@gmail.com'],
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
      <div className="sidebarFooter">
        <div className="sidebarSocials">
          <a href="https://www.instagram.com/luci_official/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <SiInstagram />
          </a>
          <a href="https://www.tiktok.com/@luci.official" target="_blank" rel="noreferrer" aria-label="TikTok">
            <SiTiktok />
          </a>
          <a href="https://x.com/Luci__official" target="_blank" rel="noreferrer" aria-label="X">
            <SiX />
          </a>
          <a href="https://www.facebook.com/Luciofficial" target="_blank" rel="noreferrer" aria-label="Facebook">
            <SiFacebook />
          </a>
          <a href="https://discord.com/invite/hXBavTEghd" target="_blank" rel="noreferrer" aria-label="Discord">
            <SiDiscord />
          </a>
        </div>
      </div>
    </aside>
  );
}
