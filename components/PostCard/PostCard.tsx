import React from 'react';
import Link from 'next/link';
import { Post } from '@lib/posts';
import SocialLinks from './SocialLinks';
import { PostMeta } from '@components/PostMeta';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="py-4 md:py-6">
      <Link href={post.slug} className="block mb-3">
        <h3 className="text-2xl text-neutral-900 dark:text-white font-bold font-sans line-clamp-3 underline hover:no-underline hover:text-blue-500 hover:dark:text-blue-500 md:text-3xl">
          {post.title}
        </h3>
      </Link>

      <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2 mb-3 md:text-base">
        {post.description}
      </p>

      <PostMeta className="text-xs" meta={post} />

      <div className="w-full border-b border-neutral-200 mt-4 mb-2" />

      <div className="w-full flex justify-between">
        <SocialLinks post={post} />

        <Link href={post.slug} className="text-xs font-bold text-neutral-900 dark:text-white">
          Read more
        </Link>
      </div>
    </article>
  );
};
