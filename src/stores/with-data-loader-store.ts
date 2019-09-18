import { types } from 'mobx-state-tree';

export const WithDataLoaderStore = types
  .model('WithDataLoaderStore', {
    isLoading: false,
  })
  .actions(() => ({
    load() {
      throw Error('Pls override in parent store');
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.load();
    },
    setLoadingState(state: boolean) {
      self.isLoading = state;
    },
  }));
