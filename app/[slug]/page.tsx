import { getAllPostIds, getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

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
    <section>
      <h1 className="text-red-500">{post.title}</h1>
      <h2>{post.publishedAt.toLocaleString()}</h2>
      <div className="mt-10" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostIds();

  return posts.map((post) => ({
    slug: post.id,
  }));
}
