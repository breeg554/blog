'use client';
import { useCallback } from 'react';
import { domain } from '@utils/constants';
import { usePathname } from 'next/navigation';

export const LINKEDIN_URL = 'https://www.linkedin.com/sharing/share-offsite/';

interface UseLinkedinShareProps {
  pathname?: string;
}

export const useLinkedinShare = ({ pathname }: UseLinkedinShareProps = {}) => {
  const currentPathname = usePathname();

  const createHref = useCallback(() => {
    const shareUrl = new URL(LINKEDIN_URL);

    shareUrl.search = new URLSearchParams({
      url: `${domain}${pathname || currentPathname}`,
    }).toString();

    return shareUrl.href;
  }, [pathname, currentPathname]);

  return { href: createHref() };
};
