import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/Mdx';
import { FloatingSocialButtons } from './components/FloatingSocialButtons';

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

  return (
    <div className="relative">
      <Mdx className="px-4 max-w-3xl mx-auto" content={post.contentHtml} />

      <FloatingSocialButtons />
    </div>
  );
}
