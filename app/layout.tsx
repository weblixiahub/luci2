import type { Metadata } from 'next';
import AppShell from '../components/AppShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luci — SLUTBASS',
  description: 'Official artist page for Luci.'
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
