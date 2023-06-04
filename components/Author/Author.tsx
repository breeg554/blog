import React from 'react';
import classNames from 'classnames';
import { Avatar } from '@components/Avatar';
import { BasicComponentSize } from '@components/types';

interface AuthorProps {
  size?: BasicComponentSize;
}

export const Author: React.FC<AuthorProps> = ({ size = 'lg' }) => {
  const headingVariants = {
    sm: 'text-xs md:text-sm',
    md: 'text-sm md:text-xl',
    lg: 'text-xl md:text-2xl',
  };

  return (
    <section>
      <div className="flex items-center gap-3">
        <Avatar src="/me.webp" alt="Dawid Kiełbasa" size={size} />
        <div>
          <h1
            className={classNames(
              'text-neutral-900 font-bold dark:text-white',
              headingVariants[size],
            )}
          >
            Dawid Kiełbasa
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm max-w-sm md:text-base">
            Hi there 👋 Welcome to my <span className="text-blue-500">corner</span> of frontend web!
          </p>
        </div>
      </div>
    </section>
  );
};
