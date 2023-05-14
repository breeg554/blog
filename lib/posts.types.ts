export interface PostMeta {
  id: string;
  title: string;
  publishedAt: Date;
  description: string;
  subtitle?: string;
  image?: string;
  readIn: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}
