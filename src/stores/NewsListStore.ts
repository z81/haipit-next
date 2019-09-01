import { types } from "mobx-state-tree"
import { NewsStore, NewsStoreType } from "./NewsStore";
import { WithDataLoaderStore } from "./WithDataLoaderStore";
import { NewsServiceType } from "../services/NewsService";

export type NewsListStoreServices = NewsServiceType

export type NewsListStoreType = ReturnType<typeof NewsListStore>["Type"]

export const NewsListStore = (service: NewsListStoreServices) => WithDataLoaderStore
  .named("NewsListStore")
  .props({
    news: types.optional(types.array(NewsStore), []),
    currentPage: 0,
    totalPages: 0
  })
  .actions(self => ({
    setCurrentPage(page: number) {
      self.currentPage = page
    },
    setTotalPages(page: number) {
      self.totalPages = page
    },
    setNews(news: NewsStoreType[]) {
      self.news.clear();
      news.forEach(n => self.news.push(n))
    }
  }))
  .actions((self) => ({
    async load() {
      const news = await service.newsService.getNews()

      self.setTotalPages(news.total);
      self.setCurrentPage(news.current_page);
      self.setNews(news.data.map(({ source, ...item }) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        createdAt: new Date(item.created_at),
        source: {
          title: source.title,
          shortName: source.short_name,
          imageUrl: source.image_url,
          imageTitle: source.title
        }
      } as NewsStoreType)))
    }
  }))