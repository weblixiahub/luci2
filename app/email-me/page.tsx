'use client';

import Link from 'next/link';
import { SiDiscord, SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si';

export default function EmailMePage() {
  return (
    <main className="shell">
      <section className="mobileWindow emailWindow">
        <header className="homeLogoSection win98Box h-[160px] sm:h-[190px] md:h-[220px] overflow-hidden">
          <Link href="/" className="logoWrap block w-full h-full" aria-label="Luci home">
            <img src="/Logo White.webp" alt="Luci logo" className="headerLogo w-full h-full object-contain p-3" />
          </Link>
        </header>

        <section className="win98Box emailPanel">
          <img src="/Milkshakes3.webp" alt="Email Luci" className="emailPhoto" />
        </section>

        <section className="win98Box contactPanel">
          <div className="mediaPlayerHeader">
            <span className="mediaPlayerDot" aria-hidden="true" />
            <span>E-Mail</span>
          </div>
          <a className="contactBox" href="mailto:luciofficialmusic13@gmail.com" target="_self">
            <span className="emailValue">luciofficialmusic13@gmail.com</span>
          </a>
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
          .emailWindow {
            display: flex;
            flex-direction: column;
            min-height: calc(100vh - 1.5rem);
          }

          .emailPanel {
            margin: 0.75rem;
            padding: 0.6rem;
          }

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

          .emailPhoto {
            display: block;
            width: 100%;
            max-width: 420px;
            height: clamp(260px, 62vw, 360px);
            margin: 0 auto;
            border: 2px inset #fff;
            object-fit: cover;
            object-position: center 70%;
          }

          .contactPanel {
            margin: 0.75rem;
            padding: 0.75rem;
            display: grid;
            gap: 0.65rem;
          }

          .mediaPlayerHeader {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            margin: -0.2rem -0.2rem 0.35rem;
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

          .contactBox {
            text-decoration: none;
            color: #000;
            background: #ffeef8;
            border: 2px solid;
            border-color: #ffffff #a86f92 #a86f92 #ffffff;
            box-shadow: inset 1px 1px 0 #fff, inset -1px -1px 0 #d58ab7;
            padding: 0.85rem;
            min-height: 56px;
            display: grid;
            gap: 0.95rem;
            justify-items: center;
            transition: transform 0.08s ease;
          }

          .contactBox:hover {
            background: #fff7fc;
            transform: translateY(-1px);
          }

          .contactBox:active {
            border-color: #a86f92 #ffffff #ffffff #a86f92;
            box-shadow: inset -1px -1px 0 #fff, inset 1px 1px 0 #d58ab7;
            transform: translateY(1px);
          }

          .emailValue {
            font-size: 1rem;
            font-weight: 700;
            font-family: "Times New Roman", Times, serif;
            text-align: center;
            word-break: break-word;
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

          .footer {
            margin-top: auto;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            padding: 0.45rem;
          }
        `}</style>
      </section>
    </main>
  );
}
