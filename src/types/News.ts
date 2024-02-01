//0 first large square, 1 is rectangle, 2 is small square
export type NewsLayout = 0 | 1 | 2;

export type NewsArticleType = "article" | "video" | "podcast";

export interface NewsArticle {
  title: string;
  content: string;
  type: NewsArticleType;
  readTime: number;
  image: string;
}