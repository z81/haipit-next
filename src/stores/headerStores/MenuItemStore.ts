import { getRoot, types } from 'mobx-state-tree';
import { PageType } from 'routes';
import { RouteStore } from './../RouteStore';

export const MenuItemStore = types
  .model('MenuItemStore', {
    name: types.enumeration(Object.values(PageType)),
    title: '',
  })
  .views(self => ({
    get route(): typeof RouteStore['Type'] {
      return getRoot(self).router.routes.find((r: typeof RouteStore) => r.name === self.name)!;
    },
  }));
