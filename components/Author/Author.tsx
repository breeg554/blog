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
          {/*<ul className="flex gap-2">*/}
          {/*  <li>*/}
          {/*    <a*/}
          {/*      rel="noreferrer noopener"*/}
          {/*      target="_blank"*/}
          {/*      className={classNames(*/}
          {/*        'text-sm   cursor-pointer font-sans text-neutral-700 dark:text-neutral-300 hover:text-blue-500 md:gap-2',*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      Twitter*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a*/}
          {/*      rel="noreferrer noopener"*/}
          {/*      target="_blank"*/}
          {/*      className={classNames(*/}
          {/*        'text-sm  cursor-pointer font-sans text-neutral-700 dark:text-neutral-300 hover:text-blue-500  md:gap-2',*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      Linkedin*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*  <li>*/}
          {/*    <a*/}
          {/*      rel="noreferrer noopener"*/}
          {/*      target="_blank"*/}
          {/*      className={classNames(*/}
          {/*        'text-sm   cursor-pointer font-sans text-neutral-700 dark:text-neutral-300 hover:text-blue-500  md:gap-2',*/}
          {/*      )}*/}
          {/*    >*/}
          {/*      Github*/}
          {/*    </a>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </div>
      </div>
    </section>
  );
};
