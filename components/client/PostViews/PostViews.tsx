'use client';
import React, { FC, useEffect } from 'react';
import { useViews } from '@hooks/useViews';
import { ClassName } from '@components/types';
import classNames from 'classnames';

interface PostViewsProps extends ClassName {
  slug: string;
  countViews?: boolean;
}

export const PostViews: FC<PostViewsProps> = ({ slug, className, countViews = false }) => {
  const { usePostViewsQuery, useUpdateViews } = useViews();
  const { trigger: update } = useUpdateViews(slug);
  const postViews = usePostViewsQuery(slug);

  useEffect(() => {
    if (countViews) {
      update();
    }
  }, [countViews, update]);

  if (!postViews) return null;

  return <p className={classNames(className)}>{postViews.views} views</p>;
};
