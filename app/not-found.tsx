import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto flex flex-col items-center justify-center py-20 min-h-[75vh] text-center">
      <h2 className="text-6xl font-bold mb-4 text-neutral-700 dark:text-neutral-300">404</h2>
      <h1 className="text-2xl mb-2 text-neutral-900 dark:text-white max-w-sm">
        Oops! You&#39;ve hit the wrong corner of the site...
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300">
        Back to{' '}
        <Link href="/" className="text-blue-500 underline hover:no-underline">
          homepage
        </Link>
      </p>
    </section>
  );
};
export default NotFound;
