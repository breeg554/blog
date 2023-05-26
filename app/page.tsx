import { getSortedPosts } from '@lib/posts';
import { Avatar } from '@components/Avatar';
import { PostsList } from '@components/PostsList';

export default async function Home() {
  const posts = await getSortedPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <section className="flex flex-col gap-3 mb-10">
        <div className="flex items-center gap-3">
          <Avatar src="/me-sm.jpeg" alt="Dawid Kiełbasa" />
          <div>
            <h1 className="text-xl text-neutral-900 font-bold dark:text-white md:text-3xl">
              Name Surname
            </h1>
            <p className="text-neutral-700 dark:text-neutral-300 text-xs max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deserunt eius expedita
              facilis inventore?
            </p>
          </div>
        </div>
        <ul className="flex divide-x divide-neutral-900">
          <li>FB</li>
          <li>GH</li>
        </ul>
      </section>

      <section>
        <h2 className="text-base text-neutral-700 dark:text-neutral-300 font-sans mb-4">
          Recent posts
        </h2>
        <PostsList className="flex gap-3 mb-10" posts={posts} />
      </section>
    </div>
  );
}
