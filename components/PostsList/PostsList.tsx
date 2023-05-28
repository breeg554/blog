import React from 'react';
import classNames from 'classnames';
import { Post } from 'contentlayer/generated';
import { ItemsList } from '@components/ItemsList';
import { PostCard } from '@components/PostCard';
import { ClassName } from '@components/types';

interface PostsListProps extends ClassName {
  posts: Post[];
}

export const PostsList = ({ posts, className }: PostsListProps) => {
  const renderItem = (post: Post) => <PostCard post={post} />;

  return (
    <ItemsList
      className={classNames('flex flex-col gap-4', className)}
      items={posts}
      renderItem={renderItem}
    />
  );
};
