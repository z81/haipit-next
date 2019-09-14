import { types, getSnapshot, cast } from 'mobx-state-tree';
import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { RouteStore } from 'stores/RouteStore';
import { RouteContext } from 'react-router5/types/types';
import { routes } from '../routes';

const routerInstances = new Map();
const routesComponents = new Map();

export const RouterStore = types
  .model('RouterStore', {
    routes: types.optional(types.array(RouteStore), []),
    currentRouteParams: types.maybe(
      types.model({
        name: '',
        path: '',
        params: types.map(types.string),
      })
    ),
  })
  .views(self => ({
    get routerInstance() {
      return routerInstances.get(self);
    },
    get notFoundPage() {
      return self.routes.find(r => r.name === 'news');
    },
  }))
  .views(self => ({
    get currentRoute() {
      const route = self.currentRouteParams;
      return (route && self.routes.find(r => r.name === route.name)) || self.notFoundPage;
    },
  }))
  .views(self => ({
    get routerComponent() {
      const route = self.currentRoute!;
      return routesComponents.get(route.name)!;
    },
  }))
  .actions(self => ({
    setCurrentRouteParams(params: typeof self.currentRouteParams) {
      self.currentRouteParams = params;
    },
  }))
  .actions(self => ({
    initRouter() {
      const routerInstance = createRouter(routes);
      routerInstances.set(self, routerInstance);
      routerInstance.usePlugin(browserPlugin());
      routerInstance.subscribe(({ route }) => {
        const { meta, ...r } = route;
        self.setCurrentRouteParams(cast(r));
      });
      routerInstance.start();
    },
    loadRoutes() {
      routes.forEach(({ component, store, ...route }) => {
        routesComponents.set(route.name, component);
        self.routes.push(
          cast({
            ...route,
            pageStore: getSnapshot(store.create()),
          })
        );
      });
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.initRouter();
      self.loadRoutes();
    },
    getRoute({ route }: RouteContext) {
      return self.routes.find(r => r.name === route.name) || self.notFoundPage;
    },
  }));
