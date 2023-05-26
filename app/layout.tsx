import './globals.css';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { cookies } from 'next/headers';
import { Merriweather, Roboto } from 'next/font/google';
import { AppHeader } from '@components/AppHeader';
import { AppFooter } from '@components/AppFooter';
import { AppNav } from '@components/AppNav';

export const metadata = {
  title: 'Frontendcorner',
  description: "Hi, it's Dawid Kiełbasa here. Welcome to my corner of frontend web!",
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
      className={classNames('font-serif', merri.variable, roboto.variable, theme?.value)}
    >
      <body className="min-h-screen bg-background text-black dark:bg-zinc-900 dark:text-white">
        <AppHeader>
          <AppNav />
        </AppHeader>

        <main className="grow max-w-5xl mx-auto">{children}</main>

        <AppFooter />
      </body>
      <Analytics />
    </html>
  );
}
