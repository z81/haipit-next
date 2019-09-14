import { MenuItemStore } from './MenuItemStore';
import { types, cast } from 'mobx-state-tree';
import { routes, PageType } from 'routes';

const MAIN_MENU_PAGES = [PageType.news];

export const MainHeaderStore = types
  .model('MainHeaderStore', {
    mainMenu: types.array(MenuItemStore),
  })
  .actions(self => ({
    afterCreate() {
      self.mainMenu = cast(routes.filter(r => MAIN_MENU_PAGES.includes(r.name)));
    },
  }));
