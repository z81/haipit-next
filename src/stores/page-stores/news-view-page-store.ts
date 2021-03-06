import { rootStore } from 'components/app/app';
import { flow, types } from 'mobx-state-tree';
import { newsService } from 'services';
import { NewsStore } from '../news-store';

export const NewsViewPageStore = types
  .model('NewsViewPageStore', {
    title: 'Просмотр новости',
    store: types.optional(NewsStore, {} as any),
    isLoading: true,
  })
  .views(() => ({
    get routeId(): string | undefined {
      return rootStore.router.currentRouteParams!.params.get('id');
    },
  }))
  .actions(self => ({
    setLoading: (isLoading: boolean) => {
      self.isLoading = isLoading;
    },
    setStore: (store: typeof NewsStore['Type']) => {
      self.store = store;
    },
  }))
  .actions(self => ({
    load: flow(function*() {
      self.setLoading(true);
      self.setStore((yield newsService.getNewsById(+self.routeId!)) as any);
      self.setLoading(false);
    }),
  }))
  .actions(self => ({
    afterCreate() {
      self.load();
    },
  }));
