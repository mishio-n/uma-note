import { Header } from '@/feature/Header';
import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'Uma Note',
  description: '競馬に関することを気ままに更新します',
  icons: [
    {
      rel: 'icon',
      url: '/icon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon,png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
