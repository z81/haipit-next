import { getApiClient } from './getApiClient';
import { NewsListResponseType } from './responseTypes/NewsListResponseType';
import { NewsResponseType } from 'Api/responseTypes/NewsResponseType';

export class NewsApi {
  static getNews(page: number) {
    return getApiClient()
      .get<NewsListResponseType>(`/news?page=${page}`)
      .then(({ data }) => data);
  }

  static getNewsById(id: number) {
    return getApiClient()
      .get<NewsResponseType>(`/news/${id}`)
      .then(({ data }) => data);
  }
}
