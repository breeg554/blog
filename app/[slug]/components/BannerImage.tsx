import React from 'react';
import classNames from 'classnames';
import { BasicImage } from '@components/BasicImage';
import { ClassName } from '@components/types';

interface BannerImageProps extends ClassName {
  src: string;
  alt: string;
}

export const BannerImage: React.FC<BannerImageProps> = ({ src, alt, className }) => {
  return (
    <div className={classNames('relative w-full h-[300px] md:h-[494px]', className)}>
      <BasicImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};
