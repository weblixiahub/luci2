import type { Metadata } from 'next';
import { Orbitron, Press_Start_2P, Cherry_Bomb_One } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const pressStart = Press_Start_2P({ subsets: ['latin'], weight: '400', variable: '--font-pixel' });
const cherry = Cherry_Bomb_One({ subsets: ['latin'], weight: '400', variable: '--font-cute' });

export const metadata: Metadata = {
  title: 'Luci — SLUTBASS',
  description: 'Official artist page for Luci.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${pressStart.variable} ${cherry.variable}`}>{children}</body>
    </html>
  );
}
