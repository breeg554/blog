import React from 'react';
import { PostMeta } from '@/lib/posts.types';

interface PostCardProps {
  post: PostMeta;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article>
      <h3 className="text-2xl text-neutral-900 dark:text-white font-bold font-sans line-clamp-3 mb-1 md:text-3xl">
        {post.title}
      </h3>
      <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-2 ">
        {post.formattedDate} &#x2022; <span>{post.readIn}</span>
      </p>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2 mb-1 md:text-base">
        {post.description}
      </p>

      <span className="text-xs font-bold text-blue-400 underline">Read more</span>
    </article>
  );
};
