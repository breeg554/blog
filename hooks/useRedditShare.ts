'use client';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { domain } from '@utils/constants';

export const REDDIT_INTENT_URL = 'https://www.reddit.com/submit';

interface UseRedditShareProps {
  pathname?: string;
  title?: string;
  tags?: string[];
}

export const useRedditShare = ({ pathname, title }: UseRedditShareProps = {}) => {
  const currentPathname = usePathname();

  const createHref = useCallback(() => {
    const shareUrl = new URL(REDDIT_INTENT_URL);

    shareUrl.search = new URLSearchParams({
      url: `${domain}${pathname || currentPathname}`,
      ...(title ? { title } : {}),
    }).toString();

    return shareUrl.href;
  }, [pathname, title, currentPathname]);

  return { href: createHref() };
};
