import { types } from 'mobx-state-tree';
// import { RouterStore } from 'stores/router-store';
import { MainHeaderStore } from 'stores/header-stores/main-header-store';

export const RootStore = types.model('RootStore', {
  // router: types.optional(RouterStore, {}),
  mainMenu: types.optional(MainHeaderStore, {}),
});
