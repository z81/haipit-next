import { types } from 'mobx-state-tree';
import { NewsPageStore } from 'stores/pageStores/NewsPageStore';

export const RouteStore = types.model('RouteStore', {
  path: '',
  name: '',
  url: '',
  pageStore: types.union(NewsPageStore),
});
