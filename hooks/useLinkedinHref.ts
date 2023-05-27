'use client';
import { useCallback } from 'react';
import { domain } from '@utils/constants';
import { usePathname } from 'next/navigation';

export const LINKEDIN_URL = 'https://www.linkedin.com/sharing/share-offsite/';

interface UseLinkedinShareProps {
  url?: string;
}

export const useLinkedinShare = ({ url }: UseLinkedinShareProps) => {
  const pathname = usePathname();

  const createHref = useCallback(() => {
    const shareUrl = new URL(LINKEDIN_URL);

    shareUrl.search = new URLSearchParams({
      url: url || `${domain}${pathname}`,
    }).toString();

    return shareUrl.href;
  }, [pathname, url]);

  return { href: createHref() };
};
