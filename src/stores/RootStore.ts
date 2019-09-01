import { NewsListStore, NewsListStoreServices } from './NewsListStore';
import { MainHeaderStore } from './MainHeaderStore';
import { types } from 'mobx-state-tree';

export type RootStoreServices = NewsListStoreServices;

export type RootStoreType = ReturnType<typeof RootStore>['Type'];

const menu = [
  {
    title: 'Публикации',
  },
];

export const RootStore = (service: RootStoreServices) =>
  types.model('RootStore', {
    news: types.optional(NewsListStore(service), {}),
    headerMenu: types.optional(MainHeaderStore, {
      menuNavLinks: menu,
    }),
  });
