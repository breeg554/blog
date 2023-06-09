import React from 'react';
import { getPost } from '@lib/posts';
import { notFound } from 'next/navigation';
import { Mdx } from '@components/Mdx';
import { FloatingSocialButtons } from './components/FloatingSocialButtons';

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PostProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative">
      <Mdx className="px-4 max-w-3xl mx-auto" content={post.body.code} />

      <div className="hidden absolute top-0 right-14 h-full lg:block">
        <FloatingSocialButtons post={post} />
      </div>
    </div>
  );
}
