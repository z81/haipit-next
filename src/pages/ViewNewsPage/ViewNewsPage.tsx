import { Content } from 'components/Content/Content';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import React from 'react';
import { NewsViewPageStore } from 'stores/pageStores/NewsViewPageStore';

export type ViewNewsPageProps = {
  pageStore: typeof NewsViewPageStore['Type'];
};

export const ViewNewsPage: React.FC<ViewNewsPageProps> = observer(({ pageStore }) => (
  <Content>
    <h2>{pageStore.store.title}</h2>
    <div>{pageStore.store.description}</div>
  </Content>
));
