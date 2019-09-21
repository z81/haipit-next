import { getApiClient } from './get-api-client';
import { NewsListResponseType } from 'api/response-types/news-listresponse-type';
import { NewsResponseType } from 'api/response-types/news-response-type';

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
