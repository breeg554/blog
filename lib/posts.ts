import { allPosts as ContentlayerAllPost, Post as ContentlayerPost } from 'contentlayer/generated';

export type Post = ContentlayerPost;

export const allPosts = ContentlayerAllPost;

export async function getPost(id: string): Promise<Post | undefined> {
  return allPosts.find((post) => post.id === id);
}
