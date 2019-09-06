import { types, getRoot } from 'mobx-state-tree';

export const NewsPageStore = types
  .model('NewsPageStore', {
    title: 'Публикации',
  })
  .views(self => ({
    get store() {
      return getRoot(self).news;
    },
  }));
