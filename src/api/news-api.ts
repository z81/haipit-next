import { getApiClient } from './get-api-client';
import { NewsListResponseType } from './response-types/NewsListResponseType';
import { NewsResponseType } from 'Api/response-types/NewsResponseType';

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
