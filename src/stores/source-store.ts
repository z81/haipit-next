import { types } from 'mobx-state-tree';

export const SourceStore = types.model('SourceStore', {
  title: '',
  shortName: '',
  imageUrl: types.optional(types.maybeNull(types.string), null),
  imageTitle: types.optional(types.maybeNull(types.string), null),
});
