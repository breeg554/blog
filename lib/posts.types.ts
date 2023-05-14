export interface PostMeta {
  id: string;
  title: string;
  publishedAt: Date;
  description: string;
  image?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}
