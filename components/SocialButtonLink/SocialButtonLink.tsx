import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { BasicComponentSize } from '@components/types';

type SocialButtonLinkProps = Omit<HTMLProps<HTMLAnchorElement>, 'size'> & {
  size?: BasicComponentSize;
};

export const SocialButtonLink: React.FC<SocialButtonLinkProps> = ({
  children,
  className,
  size = 'md',
  ...rest
}) => {
  const sizeVariant = {
    sm: 'w-6 h-6 p-1',
    md: 'w-7 h-7 p-1',
    lg: 'w-8 h-8 p-1  ',
  };

  return (
    <a
      rel="noreferrer noopener"
      target="_blank"
      className={classNames(
        'rounded block flex justify-center items-center bg-neutral-200 dark:bg-zinc-200 text-neutral-800 hover:text-blue-500 hover:text-blue-500 transition',
        sizeVariant[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
