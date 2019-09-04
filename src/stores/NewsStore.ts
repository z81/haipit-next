import { types } from 'mobx-state-tree';
import { SourceStore } from './SourceStore';
import { formatRelative } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const NewsStore = types
  .model('NewsStore', {
    id: 1,
    title: '',
    link: '',
    url: '',
    views: 0,
    createdAt: types.optional(types.Date, new Date()),
    description: types.maybeNull(types.string),
    source: types.optional(SourceStore, {}),
  })
  .views(self => ({
    get date() {
      return formatRelative(self.createdAt, new Date(), { locale: ru });
    },
    get path() {
      return `Новость / ${self.description ? 'Статья' : 'Ссылка'}`;
    },
  }));
