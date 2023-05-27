'use client';
import React from 'react';
import classNames from 'classnames';
import { InIcon, TwitterSvg } from '@svgs';
import { SocialButtonLink } from '@components/SocialButtonLink';
import { useLinkedinShare } from '@hooks/useLinkedinHref';
import { useTwitterShare } from '@hooks/useTwitterHref';

export const FloatingSocialButtons: React.FC<any> = ({ className }) => {
  const { href: twitter } = useTwitterShare({});
  const { href: linkedin } = useLinkedinShare({});

  return (
    <ul className={classNames('flex flex-col gap-2 sticky top-10 right-0', className)}>
      <li>
        <SocialButtonLink href={twitter}>
          <TwitterSvg />
        </SocialButtonLink>
      </li>
      <li>
        <SocialButtonLink href={linkedin}>
          <InIcon />
        </SocialButtonLink>
      </li>
    </ul>
  );
};
