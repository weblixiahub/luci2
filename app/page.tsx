'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import { useAppShell } from '../components/AppShell';

const listenLinks = [
  [
    'Spotify',
    'https://open.spotify.com/artist/2eqKyzfDwncG8apOXQYCbt?si=1arigNWxSjypexgCkpV3Ww&nd=1&dlsi=ad80aead1a7142f8',
    '🎧'
  ],
  ['Apple Music', 'https://music.apple.com/us/artist/luci/1078313076', '🍎'],
  [
    'Soundcloud',
    'https://soundcloud.com/luci_officialmusic?ref=clipboard&p=i&c=1&si=0A9690B057744DDA9E365AC5D816AFA3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    '☁️'
  ]
] as const;

const watchLinks = [
  ['YouTube', 'https://www.youtube.com/@Luci_official', '📺'],
  ['Twitch', 'https://www.twitch.tv/luci_officialxo', '🟪'],
  ['Podcast', 'https://linktr.ee/kissesandchaospodcast', '🎙️']
] as const;

export default function HomePage() {
  const [tab, setTab] = useState<'listen' | 'watch'>('listen');
  const { sidebarOpen, openSidebar } = useAppShell();

  return (
    <main className="shell">
      <section className="mobileWindow">
        <header className="topBar">
          <Link href="/" className="logoWrap" aria-label="Luci home">
            <img src="/Logo Black.webp" alt="Luci logo" className="logo" />
          </Link>
          <button
            className="hamburger"
            onClick={openSidebar}
            aria-label="Open menu"
            aria-expanded={sidebarOpen}
          >
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
          <div className="toggleRow" role="tablist" aria-label="Luci media tabs">
            <button
              role="tab"
              aria-selected={tab === 'listen'}
              className={tab === 'listen' ? 'active' : ''}
              onClick={() => setTab('listen')}
            >
              Listen
            </button>
            <span>|</span>
            <button
              role="tab"
              aria-selected={tab === 'watch'}
              className={tab === 'watch' ? 'active' : ''}
              onClick={() => setTab('watch')}
            >
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
          <Script src="https://embed.laylo.com/laylo-sdk.js"></Script>
          <iframe
            id="laylo-drop-82f3fe79-59b6-4a1f-badb-91dfb0070887"
            frameBorder="0"
            scrolling="no"
            allow="web-share"
            allowTransparency={true}
            style={{ width: '1px', minWidth: '100%', maxWidth: '1000px' }}
            src="https://embed.laylo.com?dropId=82f3fe79-59b6-4a1f-badb-91dfb0070887&color=c557a4&minimal=false&theme=light"
          ></iframe>
        </section>

        <footer className="footer" id="booking">
          <Link href="/" aria-label="Luci home">
            <img src="/Logo White.webp" alt="Luci logo white" className="footerLogo" />
          </Link>
          <div className="socials">
            <a href="https://www.instagram.com/luci_official/" target="_blank" rel="noreferrer">
              IG
            </a>
            <a href="https://www.tiktok.com/@luci.official" target="_blank" rel="noreferrer">
              TT
            </a>
            <a href="https://x.com/Luci__official" target="_blank" rel="noreferrer">
              X
            </a>
            <a href="https://www.facebook.com/Luciofficial" target="_blank" rel="noreferrer">
              FB
            </a>
            <a href="https://discord.com/invite/hXBavTEghd" target="_blank" rel="noreferrer">
              DC
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
