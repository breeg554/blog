import React, { PropsWithChildren } from 'react';

export const AppHeader: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="w-full py-5 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[100px] h-[50px] bg-blue-500" />

          {children}
        </div>

        <button>Dark/Light</button>
      </div>
    </header>
  );
};
