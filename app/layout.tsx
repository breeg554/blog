import './globals.css';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { cookies } from 'next/headers';
import { Merriweather, Roboto } from 'next/font/google';
import { AppHeader } from '@components/AppHeader';
import { AppFooter } from '@components/AppFooter';
import { domain } from '@utils/constants';

export const metadata = {
  title: 'frontendcorner',
  description:
    "Hi, it's Dawid Kielbasa here. Welcome to my corner of frontend web! Stay a while and see what I've been working on.",
  metadataBase: new URL(domain),
  openGraph: {
    title: 'frontendcorner',
    description:
      "Hi, it's Dawid Kielbasa here. Welcome to my corner of frontend web! Stay a while and see what I've been working on.",
    url: domain,
    siteName: 'frontendcorner',
    images: [
      {
        url: `${domain}/logo-large.webp`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'frontendcorner',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});
const merri = Merriweather({
  variable: '--font-merri',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  const theme = cookies().get('theme');

  return (
    <html
      lang="en"
      className={classNames('font-serif', merri.variable, roboto.variable, theme?.value || 'light')}
    >
      <body className="min-h-screen bg-neutral-50 text-black dark:bg-zinc-900 dark:text-white">
        <AppHeader />

        <main className="max-w-5xl mx-auto">{children}</main>

        <AppFooter />
      </body>
      <Analytics />
    </html>
  );
}
