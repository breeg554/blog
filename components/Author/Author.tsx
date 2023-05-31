import React from 'react';
import { Avatar } from '@components/Avatar';
import { BasicComponentSize } from '@components/types';
import classNames from 'classnames';
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
        <Avatar src="/me-sm.jpeg" alt="Dawid Kiełbasa" size={size} />
        <div>
          <h1
            className={classNames(
              'text-neutral-900 font-bold dark:text-white',
              headingVariants[size],
            )}
          >
            Dawid Kiełbasa
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-xs max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt eius expedita.
          </p>
        </div>
      </div>
    </section>
  );
};
