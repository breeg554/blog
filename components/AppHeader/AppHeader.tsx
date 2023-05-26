import React, { PropsWithChildren } from 'react';
import { ThemeSwitcher } from '@components/client';
import { useTheme } from '@hooks/useTheme';

export const AppHeader: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <header className="w-full px-4 py-4 md:py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[100px] h-[50px] bg-blue-500" />

          {children}
        </div>

        <ThemeSwitcher theme={theme} />
      </div>
    </header>
  );
};
