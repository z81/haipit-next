import _ from 'lodash';
import { types } from 'mobx-state-tree';
import createRouter, { Router } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { RouteStore } from 'stores/RouteStore';

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

const routerInstances = new Map();

export const RouterStore = types
  .model('RouterStore', {
    routes: types.optional(types.array(RouteStore), []),
  })
  .views(self => ({
    get routerInstance() {
      return routerInstances.get(self);
    },
  }))
  .actions(self => ({
    afterCreate() {
      const routerInstance = createRouter(routes);
      routerInstances.set(self, routerInstance);
      routerInstance.usePlugin(browserPlugin());
      routerInstance.start();
      routes.forEach(route => self.routes.push(RouteStore.create(route)));
    },
  }));
