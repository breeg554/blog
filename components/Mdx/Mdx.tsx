import React, { ComponentProps } from 'react';
import classNames from 'classnames';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { LinkSvg } from '@svgs';

interface MdxProps {
  content: string;
  className?: string;
}

const components = {
  a: MdxLink,
  h2: MdxH2,
};

export const Mdx: React.FC<MdxProps> = ({ content, className }) => {
  const Content = useMDXComponent(content);
  return (
    <article className={classNames('prose prose-neutral dark:prose-invert', className)}>
      <Content components={components} />
    </article>
  );
};

function MdxLink(props: ComponentProps<'a'>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="underline hover:no-underline hover:text-blue-500"
    />
  );
}

function MdxH2({ children, ...props }: ComponentProps<'h2'>) {
  const anchor = getAnchor(children as string);
  return (
    <h2 {...props} id={anchor} className="relative group">
      <a
        href={`#${anchor}`}
        className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 w-full h-full flex items-center md:-left-5"
      >
        <LinkSvg className="w-4 h-4" />
      </a>

      {children}
    </h2>
  );
}

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}
