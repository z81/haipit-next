import { NewsListStore } from './NewsListStore';
import { types } from 'mobx-state-tree';
import { RouterStore } from 'stores/RouterStore';

export const RootStore = types.model('RootStore', {
  news: types.optional(NewsListStore, {}),
  router: types.optional(RouterStore, {}),
});
