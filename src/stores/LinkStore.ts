import { types } from 'mobx-state-tree';

export type LinkStoreType = typeof LinkStore['Type'];

export const LinkStore = types.model('LinkStore', {
  title: '',
  url: '',
});
