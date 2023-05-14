import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/Mdx';

interface PostProps {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return <Mdx className="px-4 max-w-3xl mx-auto" content={post.contentHtml} />;
}
