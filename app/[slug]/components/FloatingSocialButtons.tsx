'use client';
import React from 'react';
import classNames from 'classnames';
import { RedditSvg, TwitterSvg } from '@svgs';
import { SocialButtonLink } from '@components/SocialButtonLink';
import { useTwitterShare } from '@hooks/useTwitterShare';
import { useRedditShare } from '@hooks/useRedditShare';
import { ClassName } from '@components/types';
import { Post } from '@lib/posts';

interface FloatingSocialButtonsProps extends ClassName {
  post: Post;
}

export const FloatingSocialButtons: React.FC<FloatingSocialButtonsProps> = ({
  post,
  className,
}) => {
  const { href: twitter } = useTwitterShare();
  const { href: reddit } = useRedditShare({ title: post.title });

  return (
    <ul className={classNames('flex flex-col gap-2 sticky top-10 right-0', className)}>
      <li>
        <SocialButtonLink href={twitter} title="Share on Twitter">
          <TwitterSvg />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink href={reddit} title="Share on Reddit">
          <RedditSvg />
        </SocialButtonLink>
      </li>
    </ul>
  );
};
