'use client';

import { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Sidebar } from './components/Sidebar';

const listenLinks = [
  ['Spotify', 'https://open.spotify.com', '🎧'],
  ['Apple Music', 'https://music.apple.com', '🍎'],
  ['Soundcloud', 'https://soundcloud.com', '☁️']
];

const watchLinks = [
  ['YouTube', 'https://youtube.com', '📺'],
  ['Twitch', 'https://twitch.tv', '🟪'],
  ['Podcast', '#', '🎙️']
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<'listen' | 'watch'>('listen');

  return (
    <main className="shell">
      <Sidebar open={menuOpen} close={() => setMenuOpen(false)} />
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

      <section className="mobileWindow">
        <header className="topBar">
          <Link href="/" className="logoWrap">
            <img src="/Logo Black.webp" alt="Luci logo" className="logo" />
          </Link>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>
        </header>

        <img src="/Hero.webp" alt="Luci hero" className="hero" />

        <section className="bioPanel">
          <h1>SLUTBASS ERA</h1>
          <p>
            Luci is an LGBTQIA+ artist who defies easy categorization. After years in the bass world, she found her
            home by creating SLUTBASS — an experimental bass + hyperpop project that’s flirty, bratty, and loud club
            music made to make the crowd jump, move, and feel hot as f*ck! Built on heavy drops, playful vocals,
            distorted pop hooks, and nasty basslines, her high-energy sets are pure slutty club-rat chaos. This isn’t
            an era. Cunt is here to stay.
          </p>
        </section>

        <section className="mediaPanel">
          <div className="toggleRow">
            <button className={tab === 'listen' ? 'active' : ''} onClick={() => setTab('listen')}>
              Listen
            </button>
            <span>|</span>
            <button className={tab === 'watch' ? 'active' : ''} onClick={() => setTab('watch')}>
              Watch
            </button>
          </div>
          <div className="linkGrid">
            {(tab === 'listen' ? listenLinks : watchLinks).map(([name, href, icon]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="mediaLink">
                <span>{icon}</span>
                {name}
              </a>
            ))}
          </div>
        </section>

        <section className="tourPanel" id="tour">
          <h2>Tour</h2>
          <div id="laylo-drop-82f3fe79-59b6-4a1f-badb-91dfb0070887" className="layloEmbed" />
          <Script src="https://cdn.laylo.com/embed/sdk.js" strategy="afterInteractive" />
        </section>

        <footer className="footer" id="booking">
          <Link href="/">
            <img src="/Logo White.webp" alt="Luci logo white" className="footerLogo" />
          </Link>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              IG
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TT
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
