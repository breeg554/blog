import React from 'react';
import classNames from 'classnames';
import { PostViews } from '@components/client/PostViews';
import { ClassName } from '@components/types';

interface PostMetaProps extends ClassName {
  meta: {
    date: string;
    readIn: string;
    slug: string;
  };
  countViews?: boolean;
}

export const PostMeta: React.FC<PostMetaProps> = ({ meta, countViews = false, className }) => {
  return (
    <ul
      className={classNames(
        'text-neutral-700 dark:text-neutral-300 flex items-center gap-3',
        className,
      )}
    >
      <li>
        <p>{meta.date}</p>
      </li>
      <li>
        <p>{meta.readIn}</p>
      </li>
      <li>
        <PostViews slug={meta.slug} countViews={countViews} />
      </li>
    </ul>
  );
};
