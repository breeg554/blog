import React, { useCallback } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { PostMeta } from '@/lib/posts.types';
import { ItemsList, PostCard } from '@/components';
import { ClassName } from '@/types';

interface PostsListProps extends ClassName {
  posts: PostMeta[];
}

export const PostsList: React.FC<PostsListProps> = ({ posts, className }) => {
  const renderItem = useCallback(
    (post: PostMeta) => (
      <Link href={post.id}>
        <PostCard post={post} />
      </Link>
    ),
    [],
  );

  return (
    <ItemsList
      className={classNames('flex flex-col gap-4 md:gap-10', className)}
      items={posts}
      renderItem={renderItem}
    />
  );
};
