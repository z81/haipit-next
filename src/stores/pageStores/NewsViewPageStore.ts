import { types } from 'mobx-state-tree';
import { rootStore } from 'components/App/App';

export const NewsViewPageStore = types
  .model('NewsViewPageStore', {
    title: 'Просмотр новости',
  })
  .views(self => ({
    afterCreate() {
      const id = rootStore.router.currentRouteParams!.params.get('id');
    },
  }));
