import React from 'react';
import classNames from 'classnames';

interface MdxProps {
  content: string;
  className?: string;
}

export const Mdx: React.FC<MdxProps> = ({ content, className }) => {
  return (
    <article
      className={classNames('prose prose-neutral dark:prose-invert', className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
