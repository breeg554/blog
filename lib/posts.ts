import { allPosts as ContentlayerAllPost, Post as ContentlayerPost } from 'contentlayer/generated';

export type Post = ContentlayerPost;

export const allPosts = ContentlayerAllPost;

export async function getPost(slug: string): Promise<Post | undefined> {
  return allPosts.find((post) => post.slug === slug);
}
