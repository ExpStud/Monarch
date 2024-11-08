
export interface Collection {
  id: number;
  name: string;
  src: string;
  description: string;
  exchange: string;
}

export interface ImageType {
  src: string;
  alt?: string;
  height: number;
  width: number;
}