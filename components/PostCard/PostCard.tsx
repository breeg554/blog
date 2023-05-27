import React from 'react';
import { Post } from '@lib/posts';
import SocialLinks from './SocialLinks';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="border-b border-neutral-200 py-4 md:py-6">
      <Link href={post.slug} className="block mb-1">
        <h3 className="text-2xl text-neutral-900 dark:text-white font-bold font-sans line-clamp-3 underline hover:no-underline hover:text-blue-500 hover:dark:text-blue-500 md:text-3xl">
          {post.title}
        </h3>
      </Link>

      <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-2 ">
        {post.date} &#x2022; <span>{post.readIn}</span>
      </p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2 mb-1 md:text-base">
        {post.description}
      </p>

      <div className="mt-3 w-full flex justify-between">
        <SocialLinks post={post} />

        <Link href={post.slug} className="text-xs font-bold text-neutral-900 dark:text-white">
          Read more
        </Link>
      </div>
    </article>
  );
};
