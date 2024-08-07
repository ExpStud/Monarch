//0 first large square, 1 is rectangle, 2 is small square
export type NewsLayout = 0 | 1 | 2;

export type NewsArticleType = "article" | "video" | "podcast";

export interface ArticleContent {
  author: string;
  pfp: string;
  date: string;
  image: string;
  imageCaption: string;
  paragraphs: string[];
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export interface PodcastContent {
  author: string;
  date: string;
  image: string;
  subTitle: string;
  paragraphs: string[];
  url: string;
  url2?: string;
  podcastEmbed: string;
}

export interface VideoContent {
  author: string;
  date: string;
  url: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  content: ArticleContent | PodcastContent | VideoContent ;
  type: NewsArticleType;
  readTime: number;
  image: string;
  externalUrl: string;
}