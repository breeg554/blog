import React from 'react';
import { getNextPost, getPreviousPost } from '@lib/posts';
import Link from 'next/link';

interface PostNavigationProps {
  slug: string;
}

export const PostNavigation: React.FC<PostNavigationProps> = ({ slug }) => {
  const previousPost = getPreviousPost(slug);
  const nextPost = getNextPost(slug);

  return (
    <nav>
      <ul className="list-disc list-inside">
        {previousPost && (
          <li>
            <Link
              className="underline hover:no-underline hover:text-blue-500"
              href={previousPost.slug}
            >
              {previousPost.title}
            </Link>
          </li>
        )}

        {nextPost && (
          <li>
            <Link className="underline hover:no-underline hover:text-blue-500" href={nextPost.slug}>
              {nextPost.title}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
