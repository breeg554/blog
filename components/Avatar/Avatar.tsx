import React from 'react';
import classNames from 'classnames';
import { BasicImage } from '@components/BasicImage';
import { BasicComponentSize } from '@components/types';

interface AvatarProps {
  src: string;
  alt: string;
  size?: BasicComponentSize;
}

export const Avatar: React.FC<AvatarProps> = ({ src, size = 'lg', ...rest }) => {
  const sizeVariants = {
    sm: 'w-12 h-12 rounded',
    md: 'w-14 h-14 rounded-md',
    lg: 'w-20 h-20 rounded-md',
  };

  return (
    <BasicImage
      className={classNames('bg-neutral-50 object-cover', sizeVariants[size])}
      src={src}
      width={80}
      height={80}
      {...rest}
    />
  );
};
