import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import dayjs from 'dayjs';

const TWEET_REG = /<StaticTweet\sid="[0-9]+"\s\/>/g;

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    description: { type: 'string', required: true },
    readIn: { type: 'string', required: true },
    subtitle: { type: 'string' },
    image: { type: 'string' },
  },
  computedFields: {
    date: {
      type: 'string',
      resolve: (post) => dayjs(post.publishedAt).format('MMM d, YYYY'),
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    id: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
    tweetIds: {
      type: 'list',
      of: { type: 'string' },
      resolve: (post) => {
        const tweetMatches = post.body.raw.match(TWEET_REG);

        return (tweetMatches || []).map((mdxTweet) => mdxTweet.match(/[0-9]+/g)![0]);
      },
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'nord',
        },
      ],
    ],
  },
});
