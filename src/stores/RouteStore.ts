import { types } from 'mobx-state-tree';

export type RouteStoreServices = {};

export type RouteStoreType = ReturnType<typeof RouteStore>['Type'];

export const RouteStore = (services: RouteStoreServices) =>
  types.model('RouteStore', {
    path: '',
    title: '',
    name: '',
  });
