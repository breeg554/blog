'use client';
import { FC } from 'react';
import { InIcon, TwitterSvg } from '@svgs';
import { SocialButtonLink } from '@components/SocialButtonLink';
import { useTwitterShare } from '@hooks/useTwitterHref';
import { useLinkedinShare } from '@hooks/useLinkedinHref';
import { Post } from '@lib/posts';

interface SocialLinksProps {
  post: Post;
}

const SocialLinks: FC<SocialLinksProps> = ({ post }) => {
  const { href: twitter } = useTwitterShare({ url: post.slug });
  const { href: linkedin } = useLinkedinShare({ url: post.slug });

  return (
    <ul className="flex items-center gap-2">
      <li>
        <SocialButtonLink href={twitter} size="sm">
          <TwitterSvg />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink href={linkedin} size="sm">
          <InIcon />
        </SocialButtonLink>
      </li>
    </ul>
  );
};

export default SocialLinks;
