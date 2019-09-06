import { types } from 'mobx-state-tree';
import { NewsListStore } from 'stores/NewsListStore';

export const RouteStore = types.model('RouteStore', {
  path: '',
  name: '',
  url: '',
  store: types.union(NewsListStore),
});
