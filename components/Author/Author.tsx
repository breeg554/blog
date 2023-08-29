import React from 'react';
import { Avatar } from '@components/Avatar';
import { BasicComponentSize } from '@components/types';

interface AuthorProps {
  size?: BasicComponentSize;
}

export const Author: React.FC<AuthorProps> = ({ size = 'lg' }) => {
  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Avatar src="/me.webp" alt="Dawid Kiełbasa" size={size} />
        <div>
          <p className="text-neutral-700 dark:text-neutral-300 text-smmd:text-base">
            <span className="text-neutral-900 dark:text-white font-bold text-xl">Hi there 👋</span>
          </p>
          <h1 className="max-w-lg text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            Dawid Kielbasa here. Welcome to my corner of frontend web! Stay a while and see what
            I&apos;ve been working on.
          </h1>
        </div>
      </div>
    </section>
  );
};
