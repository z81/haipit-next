import { types } from 'mobx-state-tree';
import { RouterStore } from 'stores/RouterStore';
import { MainHeaderStore } from 'stores/headerStores/MainHeaderStore';

export const RootStore = types.model('RootStore', {
  router: types.optional(RouterStore, {}),
  mainMenu: types.optional(MainHeaderStore, {}),
});
