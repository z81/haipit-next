import { types } from 'mobx-state-tree';
import { NewsPageStore } from 'stores/pageStores/NewsPageStore';
import { NewsViewPageStore } from 'stores/pageStores/NewsViewPageStore';

export const RouteStore = types.model('RouteStore', {
  path: '',
  name: '',
  url: '',
  pageStore: types.maybe(types.union(NewsPageStore, NewsViewPageStore)),
});
