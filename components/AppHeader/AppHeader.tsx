import React from 'react';
import { ThemeSwitcher } from '@components/client';
import { useTheme } from '@hooks/useTheme';
import { LogoSvg } from '@svgs';
import Link from 'next/link';

export const AppHeader: React.FC = () => {
  const theme = useTheme();

  return (
    <header className="w-full px-4 py-4 md:py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/">
          <LogoSvg className="w-[204px] h-[61px]" />
        </Link>

        <ThemeSwitcher theme={theme} />
      </div>
    </header>
  );
};
