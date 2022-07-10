import axios from 'axios';
import {NEWS_API_KEY, NEWS_BASE_URL} from '../const';
import {ArticlesType} from '../types';

const newsApi = axios.create({
  baseURL: NEWS_BASE_URL,
  timeout: 1000,
  headers: {'X-Api-Key': NEWS_API_KEY},
});

export const getHeadlines = async ({category = '', q = ''}: {category?: string, q?: string}) => {
  const params =`language=en&category=${category}&q=${q}`;

  try {
    const res = await newsApi.get<ArticlesType>(
      `/top-headlines?${params}`,
      {},
    );

    if (res.status === 200) {
      return res.data.articles;
    }
  } catch (e) {
    console.log('Api request faile with error', e);
    throw new Error(e); // TODO: error handling
  }
};

export const getArticles = async (q: string) => {
  try {
  const res = await newsApi.get<ArticlesType>(`/everything?q=${q}`);
  if (res.status === 200) {
    return res.data.articles;
  }
} catch (e) {
  console.log('Api request faile with error', e);
  throw new Error(e); // TODO: error handling
}
};
