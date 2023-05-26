'use client';
import { FC, useState } from 'react';
import { Theme } from '@components/types';

interface Props {
  theme: Theme;
}

export const ThemeSwitcher: FC<Props> = ({ theme }) => {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toggleTheme = () => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  };

  return <button onClick={toggleTheme}>{_theme === Theme.dark ? 'light' : 'dark'}</button>;
};
