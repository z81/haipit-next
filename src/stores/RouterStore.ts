import _ from 'lodash';
import { types } from 'mobx-state-tree';
import createRouter, { Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { RouteStore } from 'stores/RouteStore';

import { NewsListStoreServices } from './NewsListStore';

export type RouterStoreServices = NewsListStoreServices;

export type RouterStoreType = ReturnType<typeof RouterStore>['Type'];

export const routes = [
  {
    title: 'Публикации',
    name: 'news',
    path: '/',
  },
  {
    name: 'view_news',
    title: 'Просмотр новости',
    path: '/news/view/:id',
  },
];

export const RouterStore = (services: RouterStoreServices) => {
  let routerInstance: Router;
  const routeStore = RouteStore(services as any);

  return types
    .model('RouterStore', {
      routes: types.optional(types.array(routeStore), []),
    })
    .actions(self => ({
      afterCreate() {
        routerInstance = createRouter(routes);
        routerInstance.usePlugin(browserPlugin());
        routerInstance.start();
      },
    }))
    .views(() => ({
      get routerInstance() {
        return routerInstance;
      },
    }))
    .actions(self => ({
      afterCreate() {
        routes.forEach(route => self.routes.push(routeStore.create(route)));
      },
    }));
};
