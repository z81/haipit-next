import { types } from 'mobx-state-tree';
import { LinkStore } from './LinkStore';

export type MainHeaderStoreType = typeof MainHeaderStore['Type'];

export const MainHeaderStore = types.model('MainHeaderStore', {
  menuNavLinks: types.optional(types.array(LinkStore), []),
});
