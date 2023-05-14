import './globals.css';
import { PropsWithChildren } from 'react';
import { Merriweather, Roboto } from 'next/font/google';
import classNames from 'classnames';

export const metadata = {
  title: 'Blog!',
  description: 'Blog!!!',
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
  return (
    <html lang="en" className={classNames('font-serif', merri.variable, roboto.variable)}>
      <body>{children}</body>
    </html>
  );
}
