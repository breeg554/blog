import dayjs from 'dayjs';

export interface IPostMeta {
  id: string;
  title: string;
  publishedAt: Date;
  description: string;
  subtitle?: string;
  image?: string;
  readIn: string;
}

export class PostMeta implements IPostMeta {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly publishedAt: Date,
    public readonly description: string,
    public readonly readIn: string,
    public readonly subtitle?: string,
    public readonly image?: string,
  ) {}

  static fromMdxFile(meta: IPostMeta) {
    return new PostMeta(
      meta.id,
      meta.title,
      meta.publishedAt,
      meta.description,
      meta.readIn,
      meta.subtitle,
      meta.image,
    );
  }

  get formattedDate() {
    return dayjs(this.publishedAt).format('MMM d, YYYY');
  }
}

export interface IPost extends IPostMeta {
  contentHtml: string;
}

export class Post extends PostMeta {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly publishedAt: Date,
    public readonly description: string,
    public readonly readIn: string,
    public readonly contentHtml: string,
    public readonly subtitle?: string,
    public readonly image?: string,
  ) {
    super(id, title, publishedAt, description, readIn, subtitle, image);
  }

  static fromMdxFile(post: IPost) {
    return new Post(
      post.id,
      post.title,
      post.publishedAt,
      post.description,
      post.readIn,
      post.contentHtml,
      post.subtitle,
      post.image,
    );
  }
}
