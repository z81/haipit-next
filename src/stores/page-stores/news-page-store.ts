import { types } from 'mobx-state-tree';
import { NewsListStore } from 'stores/news-list-store';

export const NewsPageStore = types.model('NewsPageStore', {
  title: 'Публикации',
  store: types.optional(NewsListStore, {}),
});
