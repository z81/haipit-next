import { types } from 'mobx-state-tree';
import { NewsListStore } from 'stores/NewsListStore';

export const NewsPageStore = types.model('NewsPageStore', {
  title: 'Публикации',
  store: types.optional(NewsListStore, {}),
});
