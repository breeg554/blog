import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import { IPostMeta, Post, PostMeta } from '@/lib/posts.types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content');

export async function getPost(id: string): Promise<Post | null> {
  const fullPath = path.join(POSTS_DIRECTORY, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return Post.fromMdxFile({
    id,
    contentHtml,
    ...matterResult.data,
  } as Post);
}

export async function getSortedPosts(): Promise<PostMeta[]> {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '');

    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return PostMeta.fromMdxFile({
      id,
      ...matterResult.data,
    } as IPostMeta);
  });

  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.mdx$/, ''),
    };
  });
}
