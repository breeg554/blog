'use client';
import { FC } from 'react';
import { RedditSvg, TwitterSvg } from '@svgs';
import { SocialButtonLink } from '@components/SocialButtonLink';
import { BasicComponentSize } from '@components/types';
import { useTwitterShare } from '@hooks/useTwitterShare';
import { useRedditShare } from '@hooks/useRedditShare';
import { Post } from '@lib/posts';

interface PostShareLinksProps {
  pathname?: string;
  size?: BasicComponentSize;
  post: Post;
}

export const PostShareLinks: FC<PostShareLinksProps> = ({ pathname, post, size = 'sm' }) => {
  const { href: twitter } = useTwitterShare({ pathname });
  const { href: reddit } = useRedditShare({ pathname, title: post.title });

  return (
    <ul className="flex items-center gap-2">
      <li>
        <SocialButtonLink href={twitter} size={size} title="Share on Twitter">
          <TwitterSvg />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink href={reddit} size={size} title="Share on Reddit">
          <RedditSvg />
        </SocialButtonLink>
      </li>
    </ul>
  );
};
