import React, { useCallback } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Post } from 'contentlayer/generated';
import { ItemsList } from '@components/ItemsList';
import { PostCard } from '@components/PostCard';
import { ClassName } from '@components/types';

interface PostsListProps extends ClassName {
  posts: Post[];
}

export const PostsList: React.FC<PostsListProps> = ({ posts, className }) => {
  const renderItem = useCallback(
    (post: Post) => (
      <Link href={post.id}>
        <PostCard post={post} />
      </Link>
    ),
    [],
  );

  return (
    <ItemsList
      className={classNames('flex flex-col gap-4 md:gap-6', className)}
      items={posts}
      renderItem={renderItem}
    />
  );
};
