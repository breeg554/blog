import { allPosts } from '@lib/posts';
import { domain } from '@utils/constants';

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${domain}/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = [''].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
