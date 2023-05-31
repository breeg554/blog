import React, { PropsWithChildren } from 'react';
import { getPost } from '@lib/posts';
import { BannerImage } from './components/BannerImage';
import { notFound } from 'next/navigation';
import { domain } from '@utils/constants';
import { getOgImageUrl } from '@utils/getOgImage';
import { PostMeta } from '@components/PostMeta';

interface PostLayoutProps extends PropsWithChildren {
  params: {
    slug: string;
  };
}

export default async function PostLayout({ children, params }: PostLayoutProps) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const { title, subtitle, image } = post;

  return (
    <section className="w-full py-20">
      <header className="max-w-3xl mx-auto font-sans text-center px-4 mb-6 md:mb-10">
        <PostMeta className="mb-1 text-sm justify-center" meta={post} countViews />

        <h1 className="font-bold text-2xl text-neutral-900 dark:text-white mb-2 md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-base font-normal text-neutral-700 dark:text-neutral-300">
            {subtitle}
          </h2>
        )}
      </header>

      {image && <BannerImage className="mb-4 md:mb-10" src={image} alt={title} />}

      {children}
    </section>
  );
}

export async function generateMetadata({ params }: PostLayoutProps) {
  const post = await getPost(params.slug);

  if (!post) return {};

  const { title, description, slug, image, publishedAt } = post;
  const ogImg = getOgImageUrl(image);
  return {
    title,
    description,
    openGraph: {
      title,
      description: 'The React Framework for the Web',
      url: `${domain}/${slug}`,
      siteName: 'Frontendcorner',
      publishedTime: publishedAt,
      images: [
        {
          url: ogImg,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImg],
    },
  };
}
