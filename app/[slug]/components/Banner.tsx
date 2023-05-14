import React from 'react';
import classNames from 'classnames';
import { BasicImage } from '@/components';
import { ClassName } from '@/types';

interface BannerProps extends ClassName {
  src: string;
  alt: string;
}

export const Banner: React.FC<BannerProps> = ({ src, alt, className }) => {
  return (
    <div className={classNames('relative w-full h-[300px] md:h-[494px]', className)}>
      <BasicImage src={src} alt={alt} fill className="object-cover" />
    </div>
  );
};
