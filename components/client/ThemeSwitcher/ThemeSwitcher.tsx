'use client';
import React, { FC, useState } from 'react';
import { Theme } from '@components/types';
import classNames from 'classnames';
import { MoonSvg, SunSvg } from '@svgs';

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

  return (
    <button
      onClick={toggleTheme}
      className={classNames(
        'relative overflow-hidden rounded-lg w-10 h-10 p-2 bg-neutral-200 dark:bg-zinc-200 text-neutral-800 hover:text-blue-500 hover:text-blue-500',
      )}
    >
      <MoonSvg
        className={classNames(
          'absolute top-1/2 left-1/2 -translate-x-1/2 transition duration-300',
          {
            '-translate-y-1/2 opacity-100': _theme === 'dark',
            'translate-y-7 opacity-0': _theme === 'light',
          },
        )}
      />

      <SunSvg
        className={classNames(
          'absolute top-1/2 left-1/2 -translate-x-1/2 transition duration-300',
          {
            '-translate-y-1/2 opacity-100': _theme === 'light',
            'translate-y-7 opacity-0': _theme === 'dark',
          },
        )}
      />
    </button>
  );
};
