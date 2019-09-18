import { NewsApi } from 'Api/NewsApi';

export class NewsService {
  getNews(page: number = 1) {
    return NewsApi.getNews(page);
  }

  getNewsById(id: number) {
    return NewsApi.getNewsById(id);
  }
}

export type NewsServiceType = {
  newsService: InstanceType<typeof NewsService>;
};
