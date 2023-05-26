'use client';
import { useCallback } from 'react';

export const TWITTER_INTENT_URL = 'https://twitter.com/intent/tweet';
const TWITTER_HANDLE = 'breeg554';

interface UseTwitterShareProps {
  url?: string;
  title?: string;
  tags?: string[];
}

export const useTwitterShare = ({ url, title, tags }: UseTwitterShareProps) => {
  const createHref = useCallback(() => {
    const shareUrl = new URL(TWITTER_INTENT_URL);

    shareUrl.search = new URLSearchParams({
      url: url || window?.location?.href,
      via: TWITTER_HANDLE,
      ...(title ? { text: title } : {}),
      ...(tags ? { tags: tags.join() } : {}),
    }).toString();

    return shareUrl.href;
  }, [tags, title, url]);

  return { href: createHref() };
};
