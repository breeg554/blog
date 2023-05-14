import { PropsWithChildren } from 'react';
import Link from 'next/link';

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="mb-10">
        <Link href="/">Home Page</Link>
      </header>
      <main>{children}</main>
    </>
  );
}
