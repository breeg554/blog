'use client';
import { useCallback } from 'react';

export const LINKEDIN_URL = 'https://www.linkedin.com/sharing/share-offsite/';

interface UseLinkedinShareProps {
  url?: string;
}

export const useLinkedinShare = ({ url }: UseLinkedinShareProps) => {
  const createHref = useCallback(() => {
    const shareUrl = new URL(LINKEDIN_URL);

    shareUrl.search = new URLSearchParams({
      url: url || window?.location?.href,
    }).toString();

    return shareUrl.href;
  }, [url]);

  return { href: createHref() };
};
