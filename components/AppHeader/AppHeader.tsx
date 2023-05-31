import React from 'react';
import { ThemeSwitcher } from '@components/client';
import { useTheme } from '@hooks/useTheme';
import { LogoSvg } from '@svgs';
import Link from 'next/link';

export const AppHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <header className="w-full border-b border-neutral-200 p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" aria-label="Go to home page">
          <LogoSvg className="w-[204px] h-[61px]" />
        </Link>

        <ThemeSwitcher theme={theme} />
      </div>
    </header>
  );
};
