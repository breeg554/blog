import React from 'react';
import Link from 'next/link';

export const AppNav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home Page</Link>
        </li>
      </ul>
    </nav>
  );
};
