import axios from 'axios';
import {NEWS_API_KEY, NEWS_BASE_URL} from '../const';
import {News} from '../types';

const newsApi = axios.create({
  baseURL: NEWS_BASE_URL,
  timeout: 1000,
  headers: {'X-Api-Key': NEWS_API_KEY},
});

export const getArticles = async () => {
  try {
    const res = await newsApi.get<News>(
      '/top-headlines/sources?language=en',
      {},
    );
    if (res.status === 200) {
      return res.data.sources;
    }
  } catch (e) {
    console.log('Api request faile with error', e);
    throw new Error(e); // TODO: error handling
  }
};
