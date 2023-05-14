import { cookies } from 'next/headers';
import { Theme } from '@/types';

export const useTheme = () => {
  return cookies().get('theme')?.value === 'dark' ? Theme.dark : Theme.light;
};
