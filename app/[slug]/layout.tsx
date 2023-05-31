import React, { PropsWithChildren } from 'react';
import Balancer from 'react-wrap-balancer';
import { notFound } from 'next/navigation';
import { getPost } from '@lib/posts';
import { domain } from '@utils/constants';
import { getOgImageUrl } from '@utils/getOgImage';
import { PostMeta } from '@components/PostMeta';
import { PostShareLinks } from '@components/client';
import { BannerImage } from './components/BannerImage';
import { PostNavigation } from './components/PostNavigation';

interface PostLayoutProps extends PropsWithChildren {
  params: {
    slug: string;
  };
}

export default async function PostLayout({ children, params }: PostLayoutProps) {
  const { slug } = params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const { title, subtitle, image } = post;

  return (
    <section className="w-full py-10 md:py-20">
      <header className="max-w-3xl mx-auto font-sans text-center px-4 mb-6 md:mb-10">
        <PostMeta className="mb-1 text-sm justify-center" meta={post} countViews />
        <h1 className="font-bold text-3xl text-neutral-900 dark:text-white mb-2 md:text-4xl">
          <Balancer>{title}</Balancer>
        </h1>
        {subtitle && (
          <h2 className="text-base font-normal text-neutral-700 dark:text-neutral-300">
            {subtitle}
          </h2>
        )}
      </header>

      {image && <BannerImage className="mb-4 md:mb-10" src={image} alt={title} />}

      {children}

      <div className="max-w-3xl mx-auto px-4 pt-4 mt-14 border-t border-neutral-200">
        <div className="flex justify-between mb-2">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">See also</h3>

          <PostShareLinks post={post} size="md" />
        </div>

        <PostNavigation slug={slug} />
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: PostLayoutProps) {
  const post = getPost(params.slug);

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
