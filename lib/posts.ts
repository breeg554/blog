import { allPosts as contentlayerAllPost, Post as ContentlayerPost } from 'contentlayer/generated';

export type Post = ContentlayerPost;

export const allPosts = contentlayerAllPost;

export function getPost(slug: string): Post | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getPreviousPost(slug: string): Post | undefined {
  const index = allPosts.findIndex((post) => post.slug === slug);

  if (index <= 0) return;

  return allPosts[index - 1];
}

export function getNextPost(slug: string): Post | undefined {
  const index = allPosts.findIndex((post) => post.slug === slug);

  if (index < 0 || index + 1 === allPosts.length) return;

  return allPosts[index + 1];
}
