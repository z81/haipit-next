import { types } from 'mobx-state-tree';

export const RouteStore = types.model('RouteStore', {
  path: '',
  title: '',
  name: '',
});
