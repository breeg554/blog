import Link from 'next/link';
import { getSortedPosts } from '@/lib/posts';
import { PostsList } from '@/components';

export default async function Home() {
  const posts = await getSortedPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-red-500 my-10">Hello from homepage</h1>

      <PostsList className="flex gap-3 mb-10" posts={posts} />
    </div>
  );
}
