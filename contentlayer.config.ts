import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import dayjs from 'dayjs';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `*.mdx`,
  contentType: 'mdx',
  fields: {
    id: { type: 'string', required: true },
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
