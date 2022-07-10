export interface News {
  status?: string;
  sources?: Source[];
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

export enum Category {
  Business = 'business',
  Entertainment = 'entertainment',
  General = 'general',
  Health = 'health',
  Science = 'science',
  Sports = 'sports',
  Technology = 'technology',
}
