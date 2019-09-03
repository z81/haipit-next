import { NewsListStore, NewsListStoreServices } from './NewsListStore';
import { types } from 'mobx-state-tree';
import { RouterStore } from 'stores/RouterStore';

export type RootStoreServices = NewsListStoreServices;

export type RootStoreType = ReturnType<typeof RootStore>['Type'];

export const RootStore = (services: RootStoreServices) => {
  const rootStore = types.model('RootStore', {
    news: types.optional(NewsListStore(services), {}),
    router: types.optional(RouterStore(services), {}),
  });
  return rootStore;
};
