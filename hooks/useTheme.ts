import { cookies } from 'next/headers';
import { Theme } from '@/components/types';

export const useTheme = () => {
  return cookies().get('theme')?.value === 'dark' ? Theme.dark : Theme.light;
};
