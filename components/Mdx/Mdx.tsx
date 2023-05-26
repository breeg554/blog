import React from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import classNames from 'classnames';

interface MdxProps {
  content: string;
  className?: string;
}

export const Mdx: React.FC<MdxProps> = ({ content, className }) => {
  const Content = useMDXComponent(content);
  return (
    <article className={classNames('prose prose-neutral dark:prose-invert', className)}>
      <Content />
    </article>
  );
};
