import { RouteStore } from './../RouteStore';
import { types, getRoot } from 'mobx-state-tree';
import { PageType } from 'routes';

export const MenuItemStore = types
  .model('MenuItemStore', {
    name: types.enumeration(Object.values(PageType)),
  })
  .views(self => ({
    get route(): typeof RouteStore['Type'] {
      return getRoot(self).router.routes.find((r: typeof RouteStore) => r.name === self.name)!;
    },
  }));
