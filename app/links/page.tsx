import Link from 'next/link';

const groups = {
  Socials: [
    ['Instagram', 'https://instagram.com'],
    ['TikTok', 'https://tiktok.com'],
    ['X / Twitter', 'https://x.com']
  ],
  Listen: [
    ['Spotify', 'https://open.spotify.com'],
    ['Apple Music', 'https://music.apple.com'],
    ['Soundcloud', 'https://soundcloud.com']
  ],
  Watch: [
    ['YouTube', 'https://youtube.com'],
    ['Twitch', 'https://twitch.tv'],
    ['Podcast', '#']
  ],
  Extra: [
    ['Merch', '#'],
    ['Show Tickets', '/#tour'],
    ['VIP Upgrades', '#'],
    ['Exclusive Content', '#'],
    ['Press (EDMtrain)', '#'],
    ['Booking Contacts', 'mailto:booking@luci.music']
  ]
};

export default function LinksPage() {
  return (
    <main className="shell">
      <section className="mobileWindow linksPage">
        <header className="topBar">
          <Link href="/" className="logoWrap">
            <img src="/Logo Black.webp" alt="Luci logo" className="logo" />
          </Link>
          <Link href="/" className="backBtn">
            Back
          </Link>
        </header>

        <h1 className="linksTitle">Links</h1>
        {Object.entries(groups).map(([group, items]) => (
          <section key={group} className="linkGroup">
            <h2>{group}</h2>
            {items.map(([label, href]) => (
              <a key={label} href={href} className="menuItem">
                {label}
              </a>
            ))}
          </section>
        ))}
      </section>
    </main>
  );
}
