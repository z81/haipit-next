import { NewsListStore } from 'stores/NewsListStore';
import { types, getRoot } from 'mobx-state-tree';
import { RootStore } from 'stores/RootStore';

export const NewsPageStore = types
  .model('NewsPageStore', {
    title: 'Публикации',
  })
  .views(self => ({
    get store() {
      return getRoot<typeof RootStore>(self).news;
    },
  }));
