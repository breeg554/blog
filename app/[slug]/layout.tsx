import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { getAllPostIds, getPost } from '@/lib/posts';
import { BannerImage } from './components/BannerImage';
import { notFound } from 'next/navigation';

interface PostLayoutProps extends PropsWithChildren {
  params: {
    slug: string;
  };
}

export default async function PostLayout({ children, params }: PostLayoutProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { publishedAt, title, subtitle, image } = post;

  return (
    <section className="w-full py-20">
      <header className="max-w-3xl mx-auto font-sans text-center px-4 mb-6 md:mb-10">
        <p className="text-sm text-neutral-600 mb-1">{publishedAt.toLocaleString()}</p>
        <h1 className="font-bold text-2xl text-neutral-800 mb-2 md:text-4xl">{title}</h1>
        {subtitle && <h2 className="text-base font-normal text-neutral-700">{subtitle}</h2>}
      </header>

      {image && <BannerImage className="mb-4 md:mb-10" src={image} alt={title} />}

      {children}
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPostIds();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) return;

  return { title: post.title };
}
