import type { Metadata } from 'next';
import AppShell from '../components/AppShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luci — SLUTBASS',
  description: 'Official artist page for Luci.',
  openGraph: {
    title: 'Luci — SLUTBASS',
    description: 'Official artist page for Luci.',
    images: ['/Hero.webp']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luci — SLUTBASS',
    description: 'Official artist page for Luci.',
    images: ['/Hero.webp']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
