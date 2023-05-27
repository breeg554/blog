'use client';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Theme } from '@components/types';
import classNames from 'classnames';
import { MoonSvg, SunSvg } from '@svgs';

interface Props {
  theme: Theme;
}

export const ThemeSwitcher: FC<Props> = ({ theme }) => {
  const [_theme, setTheme] = useState<Theme>(theme);

  const toggleTheme = useCallback(() => {
    const root = document.getElementsByTagName('html')[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  }, []);

  const isDark = useMemo(() => _theme === 'dark', [_theme]);

  return (
    <button
      onClick={toggleTheme}
      className={classNames(
        'relative overflow-hidden rounded-lg w-10 h-10 p-2 bg-neutral-200 dark:bg-zinc-200 text-neutral-800 hover:text-blue-500 hover:text-blue-500',
      )}
      aria-label={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}
    >
      <MoonSvg
        className={classNames(
          'absolute top-1/2 left-1/2 -translate-x-1/2 transition duration-300',
          {
            '-translate-y-1/2 opacity-100': isDark,
            'translate-y-7 opacity-0': !isDark,
          },
        )}
      />

      <SunSvg
        className={classNames(
          'absolute top-1/2 left-1/2 -translate-x-1/2 transition duration-300',
          {
            '-translate-y-1/2 opacity-100': !isDark,
            'translate-y-7 opacity-0': isDark,
          },
        )}
      />
    </button>
  );
};
