import React from 'react';
import { Avatar } from '@components/Avatar';
import { BasicComponentSize } from '@components/types';

interface AuthorProps {
  size?: BasicComponentSize;
}

export const Author: React.FC<AuthorProps> = ({ size = 'lg' }) => {
  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Avatar src="/me.webp" alt="Dawid Kiełbasa" size={size} />
        <h1 className="text-neutral-700 dark:text-neutral-300 text-sm max-w-lg md:text-base">
          <span className="text-neutral-900 font-bold text-xl">Hi there 👋</span>{' '}
          <span className="block">
            Dawid Kielbasa here. Welcome to my corner of frontend web! Stay a while and see what
            I&apos;ve been working on.
          </span>
        </h1>
      </div>
    </section>
  );
};
