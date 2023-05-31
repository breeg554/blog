'use client';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { domain } from '@utils/constants';

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet';

interface UseTwitterShareProps {
  pathname?: string;
  title?: string;
  tags?: string[];
}

export const useTwitterShare = ({ pathname, title, tags }: UseTwitterShareProps = {}) => {
  const currentPathname = usePathname();

  const createHref = useCallback(() => {
    const shareUrl = new URL(TWITTER_INTENT_URL);

    shareUrl.search = new URLSearchParams({
      url: `${domain}${pathname || currentPathname}`,
      ...(title ? { text: title } : {}),
      ...(tags ? { tags: tags.join() } : {}),
    }).toString();

    return shareUrl.href;
  }, [pathname, tags, title, currentPathname]);

  return { href: createHref() };
};
