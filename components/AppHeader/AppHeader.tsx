import React from 'react';
import Link from 'next/link';

export const AppHeader: React.FC = () => {
  return (
    <header className="w-full py-5 px-4">
      <div className="max-w-5xl mx-auto flex justify-between">
        <Link href="/">Home Page</Link>
        <Link href="/">Dark/Light</Link>
      </div>
    </header>
  );
};
