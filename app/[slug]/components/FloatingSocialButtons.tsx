import React from 'react';
import classNames from 'classnames';
import { ClassName } from '@/components/types';
import { GithubIcon, InIcon, TwitterSvg } from '@/svgs';
import { SocialButtonLink } from '@/components';
import { socials } from '@/utils';

export const FloatingSocialButtons: React.FC<ClassName> = ({ className }) => {
  return (
    <ul className={classNames('flex flex-col gap-2 sticky top-10 right-0', className)}>
      <li>
        <SocialButtonLink href={socials.twitter}>
          <TwitterSvg />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink href={socials.linkedin}>
          <InIcon />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink href={socials.github}>
          <GithubIcon />
        </SocialButtonLink>
      </li>
    </ul>
  );
};
