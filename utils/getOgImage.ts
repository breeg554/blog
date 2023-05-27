import { domain } from '@utils/constants';

export const getOgImageUrl = (image?: string) => {
  if (!image) return `${domain}/og-base.webp`;

  return `${domain}${image}`;
};
