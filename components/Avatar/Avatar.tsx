import React from 'react';
import { BasicImage } from '@/components';
interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, ...rest }) => {
  return (
    <BasicImage
      className="w-20 h-20 bg-neutral-50 rounded-full object-cover"
      src={src}
      width={80}
      height={80}
      {...rest}
    />
  );
};
