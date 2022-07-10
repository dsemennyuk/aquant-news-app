export enum Category {
  Business = 'business',
  Entertainment = 'entertainment',
  General = 'general',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'technology',
}


export interface Source {
  id?: string;
  name?: string;
  description?: string;
  url?: string;
  category?: Category;
  language?: string;
  country?: string;
}

export interface ArticlesType {
  status?:       string;
  totalResults?: number;
  articles?:     Article[];
}

export interface Article {
  source?:      Source;
  author?:      null | string;
  title?:       string;
  description?: null | string;
  url?:         string;
  urlToImage?:  null | string;
  publishedAt?: Date;
  content?:     null | string;
}


export interface SourceType {
  id?:   null | string;
  name?: string;
}

