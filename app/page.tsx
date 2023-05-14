import Link from 'next/link';
import { getSortedPosts } from '@/lib/posts';

export default async function Home() {
  const posts = await getSortedPosts();

  return (
    <main>
      <ul className="flex gap-3 mb-10">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <h1 className="text-red-500">Home Page</h1>
      <p>Test</p>
    </main>
  );
}
