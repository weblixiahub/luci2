'use client';

import Link from 'next/link';
import type { IconType } from 'react-icons';
import { SiApplemusic, SiDiscord, SiFacebook, SiInstagram, SiSoundcloud, SiSpotify, SiTiktok, SiTwitch, SiYoutube } from 'react-icons/si';

type LinkItem = {
  label: string;
  href: string;
  icon?: IconType;
  emoji?: string;
};

const groups: Record<string, LinkItem[]> = {
  Socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/luci_official/', icon: SiInstagram },
    { label: 'TikTok', href: 'https://www.tiktok.com/@luci.official', icon: SiTiktok },
    { label: 'Facebook', href: 'https://www.facebook.com/Luciofficial', icon: SiFacebook },
    { label: 'Discord', href: 'https://discord.com/invite/hXBavTEghd', icon: SiDiscord }
  ],
  Listen: [
    {
      label: 'Spotify',
      href: 'https://open.spotify.com/artist/2eqKyzfDwncG8apOXQYCbt?si=1arigNWxSjypexgCkpV3Ww&nd=1&dlsi=ad80aead1a7142f8',
      icon: SiSpotify
    },
    { label: 'Apple Music', href: 'https://music.apple.com/us/artist/luci/1078313076', icon: SiApplemusic },
    {
      label: 'Soundcloud',
      href: 'https://soundcloud.com/luci_officialmusic?ref=clipboard&p=i&c=1&si=0A9690B057744DDA9E365AC5D816AFA3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      icon: SiSoundcloud
    }
  ],
  Watch: [
    { label: 'YouTube', href: 'https://www.youtube.com/@Luci_official', icon: SiYoutube },
    { label: 'Twitch', href: 'https://www.twitch.tv/luci_officialxo', icon: SiTwitch },
    { label: 'Kisses & Chaos Podcast', href: 'https://linktr.ee/kissesandchaospodcast', emoji: '💋' }
  ],
  Support: [
    { label: 'Merch', href: 'https://luciofficial.myshopify.com/' },
    { label: 'Show Tickets', href: 'https://laylo.com/luci/m/WafCOy' },
    { label: 'VIP Upgrades', href: 'https://luciofficial.myshopify.com/products/luci-vip-package' },
    { label: 'Exclusive Content', href: 'https://www.passes.com/luci_officialxo' },
    {
      label: 'Cameo',
      href: 'https://www.cameo.com/luci_officialxo?utm_source=talent_undefined&utm_medium=talent_social&utm_campaign=profile_share&utm_content=dynamic_profile_card_new&%24web_only=true&_branch_match_id=1529206289249425339&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL9NLTsxNzddLzs%2FVT9UPzQlyL3VNMiiOSLKvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQA%2B3hK8OwAAAA%3D%3D'
    }
  ],
  Contact: [
    { label: 'Email Me', href: 'mailto:luciofficialmusic13@gmail.com' },
    { label: 'Book Me', href: 'mailto:Brian@abtouring.com,Alex@abtouring.com' }
  ],
  Extras: [
    { label: 'Linktree', href: 'https://linktr.ee/Luci_official' }
  ]
};

export default function LinksPage() {
  return (
    <main className="shell">
      <section className="mobileWindow linksPage">
        <header className="homeLogoSection win98Box h-[160px] sm:h-[190px] md:h-[220px] overflow-hidden">
          <Link href="/" className="logoWrap block w-full h-full" aria-label="Luci home">
            <img src="/Logo White.webp" alt="Luci logo" className="headerLogo w-full h-full object-contain p-3" />
          </Link>
        </header>

        {Object.entries(groups).map(([group, items]) => (
          <section key={group} className="linkGroup">
            <h2>{group}</h2>
            {items.map(({ label, href, icon: Icon, emoji }) => (
              <a key={label} href={href} className={`menuItem ${Icon || emoji ? 'iconLink' : ''}`}>
                {Icon || emoji ? (
                  <>
                    {Icon ? (
                      <Icon className="brandIcon" aria-hidden="true" />
                    ) : (
                      <span className="brandEmoji" aria-hidden="true">
                        {emoji}
                      </span>
                    )}
                    <span>{label}</span>
                  </>
                ) : (
                  label
                )}
              </a>
            ))}
          </section>
        ))}
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

          .iconLink {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            transition: transform 0.15s ease, color 0.15s ease;
          }

          .iconLink:hover {
            transform: scale(1.03);
            color: #000;
          }

          .brandIcon {
            font-size: 1.25rem;
            flex-shrink: 0;
          }

          .brandEmoji {
            font-size: 1.25rem;
            line-height: 1;
            flex-shrink: 0;
            filter: grayscale(1) brightness(0);
          }
        `}</style>
      </section>
    </main>
  );
}
