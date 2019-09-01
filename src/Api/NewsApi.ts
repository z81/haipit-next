import { getApiClient } from './getApiClient';
import { NewsListResponseType } from './responseTypes/NewsListResponseType';

export class NewsApi {
  static getNews(page: number) {
    return getApiClient()
      .get<NewsListResponseType>(`/news?page=${page}`)
      .then(({ data }) => data);
  }
}
