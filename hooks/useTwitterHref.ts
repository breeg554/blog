'use client';
import { useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { domain } from '@utils/constants';

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet';
const TWITTER_HANDLE = 'breeg554';

interface UseTwitterShareProps {
  url?: string;
  title?: string;
  tags?: string[];
}

export const useTwitterShare = ({ url, title, tags }: UseTwitterShareProps) => {
  const pathname = usePathname();

  const createHref = useCallback(() => {
    const shareUrl = new URL(TWITTER_INTENT_URL);

    shareUrl.search = new URLSearchParams({
      url: url || `${domain}${pathname}`,
      via: TWITTER_HANDLE,
      ...(title ? { text: title } : {}),
      ...(tags ? { tags: tags.join() } : {}),
    }).toString();

    return shareUrl.href;
  }, [pathname, tags, title, url]);

  return { href: createHref() };
};
