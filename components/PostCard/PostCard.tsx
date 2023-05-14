import React from 'react';
import { PostMeta } from '@/lib/posts.types';

interface PostCardProps {
  post: PostMeta;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article>
      <h3 className="text-2xl text-neutral-800 font-bold font-sans line-clamp-3 mb-1 md:text-3xl">
        {post.title}
      </h3>
      <p className="text-xs text-neutral-600 mb-2 ">
        {post.formattedDate}, <span>{post.readIn}</span>
      </p>
      <p className="text-sm text-neutral-800 line-clamp-2 md:text-base">{post.description}</p>
      <button className="text-xs underline">share</button>
    </article>
  );
};
