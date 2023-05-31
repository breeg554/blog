import { PostsList } from '@components/PostsList';
import { allPosts } from '@lib/posts';
import { Author } from '@components/Author';

export default async function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
      <Author />

      <section className="mt-10 md:mt-14">
        <h2 className="text-base text-neutral-700 dark:text-neutral-300 font-sans ">
          Recent posts
        </h2>
        <PostsList className="flex gap-3 mb-10" posts={allPosts} />
      </section>
    </div>
  );
}
