import React from 'react';

interface MdxProps {
  content: string;
}

export const Mdx: React.FC<MdxProps> = ({ content }) => {
  return <article className="prose" dangerouslySetInnerHTML={{ __html: content }} />;
};
