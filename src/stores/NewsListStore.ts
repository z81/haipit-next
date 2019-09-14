import { types, cast } from 'mobx-state-tree';
import { NewsStore } from './NewsStore';
import { WithDataLoaderStore } from './WithDataLoaderStore';
import { newsService } from 'services';

export const NewsListStore = WithDataLoaderStore.named('NewsListStore')
  .props({
    news: types.optional(types.array(NewsStore), []),
    currentPage: 0,
    totalPages: 1,
  })
  .actions(self => ({
    setCurrentPage(page: number) {
      if (page > self.totalPages || page <= 0 || page === self.currentPage) {
        return;
      }

      self.currentPage = page;
      self.load();
    },
    setTotalPages(page: number) {
      self.totalPages = page;
    },
    setNews(news: typeof NewsStore['Type'][]) {
      self.news.clear();
      news.forEach(n => self.news.push(n));
    },
  }))
  .actions(self => ({
    loadNext() {
      self.setCurrentPage(self.currentPage + 1);
    },
    loadPrev() {
      self.setCurrentPage(self.currentPage - 1);
    },
  }))
  .actions(self => ({
    async load() {
      if (self.isLoading) {
        return;
      }

      self.setLoadingState(true);

      const news = await newsService.getNews(self.currentPage);

      self.setTotalPages(news.total);
      self.setCurrentPage(news.current_page);
      self.setNews(
        news.data.map(({ source, ...item }) =>
          cast({
            id: item.id,
            title: item.title,
            description: item.description,
            createdAt: new Date(item.created_at),
            views: item.views_count,
            source: {
              title: source.title,
              shortName: source.short_name,
              imageUrl: source.image_url,
              imageTitle: source.title,
            },
          })
        )
      );

      self.setLoadingState(false);
    },
  }));
