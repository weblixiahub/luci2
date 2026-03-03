'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import { SiApplemusic, SiDiscord, SiFacebook, SiInstagram, SiSoundcloud, SiSpotify, SiTiktok, SiTwitch, SiYoutube } from 'react-icons/si';

type MediaItem = {
  name: string;
  href: string;
  icon?: IconType;
  emoji?: string;
};

const listenLinks: MediaItem[] = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/2eqKyzfDwncG8apOXQYCbt?si=1arigNWxSjypexgCkpV3Ww&nd=1&dlsi=ad80aead1a7142f8',
    icon: SiSpotify
  },
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/luci/1078313076', icon: SiApplemusic },
  {
    name: 'Soundcloud',
    href: 'https://soundcloud.com/luci_officialmusic?ref=clipboard&p=i&c=1&si=0A9690B057744DDA9E365AC5D816AFA3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    icon: SiSoundcloud
  }
];

const watchLinks: MediaItem[] = [
  { name: 'YouTube', href: 'https://www.youtube.com/@Luci_official', icon: SiYoutube },
  { name: 'Twitch', href: 'https://www.twitch.tv/luci_officialxo', icon: SiTwitch },
  { name: 'Podcast', href: 'https://linktr.ee/kissesandchaospodcast', emoji: '💋' }
];

export default function HomePage() {
  const [layloReady, setLayloReady] = useState(false);

  return (
    <main className="shell">
      <section className="mobileWindow">
        <header className="homeLogoSection win98Box h-[160px] sm:h-[190px] md:h-[220px] overflow-hidden">
          <Link href="/" className="logoWrap block w-full h-full" aria-label="Luci home">
            <img src="/Logo White.webp" alt="Luci logo" className="headerLogo w-full h-full object-contain p-3" />
          </Link>
        </header>

        <section className="heroWrap win98Box">
          <img src="/Hero.webp" alt="Luci hero" className="hero" />
        </section>

        <section className="mediaPanel win98Box listenPanel">
          <div className="mediaPlayerHeader">
            <span className="mediaPlayerDot" aria-hidden="true" />
            <span>Media Player</span>
          </div>
          <div className="linkGrid">
            {listenLinks.map(({ name, href, icon: Icon, emoji }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="mediaLink">
                {Icon ? <Icon className="mediaIcon" aria-hidden="true" /> : <span className="mediaEmoji">{emoji}</span>}
                {name}
              </a>
            ))}
          </div>
        </section>

        <section className="bioPanel win98Box">
          <div className="mediaPlayerHeader">
            <span className="mediaPlayerDot" aria-hidden="true" />
            <span>about.txt</span>
          </div>
          <p>
            Welcome to SLUTBASS — an experimental bass + hyperpop project that’s flirty, bratty, and loud club music
            made to make the crowd jump, move, and feel hot as f*ck! This isn’t an era.{' '}
            <span className="noWrap">Cunt is here to stay.</span>
          </p>
        </section>

        <section className="mediaPanel win98Box">
          <div className="mediaPlayerHeader">
            <span className="mediaPlayerDot" aria-hidden="true" />
            <span>Video Player</span>
          </div>
          <div className="linkGrid">
            {watchLinks.map(({ name, href, icon: Icon, emoji }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="mediaLink">
                {Icon ? <Icon className="mediaIcon" aria-hidden="true" /> : <span className="mediaEmoji">{emoji}</span>}
                {name}
              </a>
            ))}
          </div>
        </section>

        <section className="tourPanel win98Box" id="tour">
          <div className="mediaPlayerHeader">
            <span className="mediaPlayerDot" aria-hidden="true" />
            <span>Tour</span>
          </div>
          <Script
            src="https://embed.laylo.com/laylo-sdk.js"
            strategy="afterInteractive"
            onReady={() => setLayloReady(true)}
          ></Script>
          {layloReady && (
            <div className="layloClip">
              <iframe
                id="laylo-drop-82f3fe79-59b6-4a1f-badb-91dfb0070887"
                title="Luci Tour Dates"
                frameBorder="0"
                scrolling="no"
                allow="web-share"
                {...({ allowtransparency: 'true' } as Record<string, string>)}
                className="layloEmbed"
                style={{ width: '1px', minWidth: '100%', maxWidth: '1000px' }}
                src="https://embed.laylo.com?dropId=82f3fe79-59b6-4a1f-badb-91dfb0070887&color=ff2da6&minimal=false&theme=light"
              ></iframe>
            </div>
          )}
        </section>

        <footer className="footer win98Box" id="booking">
          <div className="socials">
            <a href="https://www.instagram.com/luci_official/" target="_blank" rel="noreferrer">
              <SiInstagram className="socialIcon" size={34} aria-label="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@luci.official" target="_blank" rel="noreferrer">
              <SiTiktok className="socialIcon" size={34} aria-label="TikTok" />
            </a>
            <a href="https://www.facebook.com/Luciofficial" target="_blank" rel="noreferrer">
              <SiFacebook className="socialIcon" size={34} aria-label="Facebook" />
            </a>
            <a href="https://discord.com/invite/hXBavTEghd" target="_blank" rel="noreferrer">
              <SiDiscord className="socialIcon" size={34} aria-label="Discord" />
            </a>
          </div>
        </footer>
        <style jsx>{`
          .homeLogoSection {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            overflow: hidden;
          }

          .homeLogoSection :global(.logoWrap) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            line-height: 0;
            margin: 0;
            padding: 0;
            background: transparent;
          }

          .homeLogoSection :global(.headerLogo) {
            object-position: center;
            display: block;
            mix-blend-mode: multiply;
            filter: invert(1);
          }

          .mediaIcon {
            display: block;
            margin: 0 auto 0.25rem;
            font-size: 1.2rem;
            color: #000;
          }

          .mediaPlayerHeader {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin: -0.2rem -0.2rem 0.7rem;
            padding: 0.28rem 0.45rem;
            border: 2px solid;
            border-color: #ffd1ec #d64a9e #d64a9e #ffd1ec;
            background: linear-gradient(90deg, #ff1493 0%, #ff49b4 50%, #d60a7b 100%);
            color: #fff;
            font-family: "Trebuchet MS", sans-serif;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
          }

          .mediaPlayerDot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #8cff7c;
            box-shadow: 0 0 6px rgba(140, 255, 124, 0.85);
          }

          .mediaHeading {
            font-size: 1.05rem;
          }

          .tourPanel h2 {
            font-size: 1.05rem;
            text-align: center;
          }

          .noWrap {
            white-space: nowrap;
          }

          .mediaEmoji {
            display: block;
            margin-bottom: 0.25rem;
            font-size: 1.2rem;
            line-height: 1;
            filter: grayscale(1);
          }

          .socials {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.95rem;
            width: 100%;
            margin: 0 auto;
            padding: 0 0.5rem;
          }

          .socials a {
            width: clamp(40px, 10vw, 52px);
            max-width: 52px;
            aspect-ratio: 1 / 1;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: center;
            margin: 0;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.5);
            transition: transform 0.15s ease, background-color 0.15s ease;
          }

          .socials a:hover {
            transform: scale(1.1);
            background: rgba(255, 255, 255, 0.68);
          }

          .socials a:active {
            transform: scale(0.95);
          }

          .socialIcon {
            line-height: 1;
          }

          .layloClip {
            border-top-left-radius: 2.25rem;
            border-top-right-radius: 2.25rem;
            border-bottom-left-radius: 3rem;
            border-bottom-right-radius: 3rem;
            overflow: hidden;
          }
        `}</style>
      </section>
    </main>
  );
}
