'use client';

import Link from 'next/link';

export default function BookMePage() {
  return (
    <main className="shell">
      <section className="mobileWindow">
        <header className="topBar">
          <Link href="/" className="logoWrap" aria-label="Luci home">
            <img src="/Logo Black.webp" alt="Luci logo" className="logo" />
          </Link>
          <Link href="/" className="backBtn">
            Back
          </Link>
        </header>

        <section className="win98Box bookPanel">
          <img src="/Hero2.webp" alt="Book Luci" className="bookPhoto" />
        </section>

        <section className="win98Box contactPanel">
          <h1 className="contactTitle">Book Luci</h1>

          <a className="contactBox" href="mailto:Brian@abtouring.com" target="_self">
            <span className="managerLabel">Manager 1</span>
            <span className="emailValue">Brian@abtouring.com</span>
          </a>

          <a className="contactBox" href="mailto:Alex@abtouring.com" target="_self">
            <span className="managerLabel">Manager 2</span>
            <span className="emailValue">Alex@abtouring.com</span>
          </a>
        </section>

        <style jsx>{`
          .bookPanel {
            margin: 0.75rem;
            padding: 0.6rem;
          }

          .bookPhoto {
            display: block;
            width: 100%;
            max-width: 420px;
            height: auto;
            margin: 0 auto;
            border: 2px inset #fff;
          }

          .contactPanel {
            margin: 0.75rem;
            padding: 0.75rem;
            display: grid;
            gap: 0.65rem;
          }

          .contactTitle {
            margin: 0 0 0.2rem;
            font-family: "Times New Roman", Times, serif;
            font-size: 1.25rem;
            color: #000;
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
            gap: 0.2rem;
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

          .managerLabel {
            font-size: 0.86rem;
            font-family: "Times New Roman", Times, serif;
          }

          .emailValue {
            font-size: 1rem;
            font-weight: 700;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            word-break: break-word;
          }
        `}</style>
      </section>
    </main>
  );
}
