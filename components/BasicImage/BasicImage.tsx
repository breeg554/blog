import React from 'react';
import Image, { ImageProps } from 'next/image';

export const BasicImage: React.FC<ImageProps> = (props) => {
  //@ts-ignore
  return <Image {...props} />;
};
