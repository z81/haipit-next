import { cast, types } from 'mobx-state-tree';
import { PageType, routes } from 'routes';
import { MenuItemStore } from './MenuItemStore';

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
