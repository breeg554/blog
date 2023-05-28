'use client';
import React, { FC } from 'react';
import { useViews } from '@hooks/useViews';
import { ClassName } from '@components/types';
import classNames from 'classnames';

interface PostViewsProps extends ClassName {
  slug: string;
}

export const PostViews: FC<PostViewsProps> = ({ slug, className }) => {
  const { usePostViewsQuery } = useViews();
  const postViews = usePostViewsQuery(slug);

  if (!postViews) return null;

  return <p className={classNames(className)}>{postViews.views} views</p>;
};
