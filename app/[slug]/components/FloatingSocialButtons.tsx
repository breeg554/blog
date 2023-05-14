import React from 'react';

export const FloatingSocialButtons: React.FC = () => {
  return (
    <ul className="flex flex-col hidden absolute top-0 right-12 lg:block">
      <li>
        <a>TW</a>
      </li>
      <li>
        <a>GH</a>
      </li>
      <li>
        <a>LN</a>
      </li>
    </ul>
  );
};
