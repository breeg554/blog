import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { socials } from '@utils/constants';
import { GithubIcon, InIcon, TwitterSvg } from '@svgs';

export const AppFooter: React.FC = () => {
  return (
    <div className="border-t border-neutral-200">
      <footer className="flex justify-end px-4 py-6 max-w-4xl mx-auto w-full md:py-8">
        <ul className="flex gap-2">
          <li>
            <SocialLink href={socials.twitter}>
              <TwitterSvg className="w-5 h-5" />
              Twitter
            </SocialLink>
          </li>
          <li>
            <SocialLink href={socials.linkedin}>
              <InIcon className="w-5 h-5" />
              Linkedin
            </SocialLink>
          </li>
          <li>
            <SocialLink href={socials.github}>
              <GithubIcon className="w-5 h-5" />
              Github
            </SocialLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};

type SocialLinkProps = HTMLProps<HTMLAnchorElement> & {};

function SocialLink({ className, children, ...rest }: SocialLinkProps) {
  return (
    <a
      rel="noreferrer noopener"
      target="_blank"
      className={classNames(
        'text-sm cursor-pointer flex gap-1 items-center font-sans text-neutral-700 dark:text-neutral-300 hover:text-blue-500 md:text-base md:gap-2',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
