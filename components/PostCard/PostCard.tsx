import React from 'react';
import { PostMeta } from '@/lib/posts.types';

interface PostCardProps {
  data: PostMeta;
}

export const PostCard: React.FC<PostCardProps> = ({ data }) => {
  return (
    <article>
      <p className="text-xs text-neutral-600">
        {data.publishedAt.toLocaleString()}, <span>{data.readIn}</span>
      </p>
      <h3 className="text-3xl text-neutral-800 font-bold font-sans mb-2">{data.title}</h3>
      <p className="text-base text-neutral-800 line-clamp-2">{data.description}</p>
    </article>
  );
};
