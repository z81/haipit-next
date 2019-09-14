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
    Title: "{pageStore.store.title}"} Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Impedit optio sapiente totam aliquam facere atque sunt, incidunt at quaerat explicabo repellat
    nostrum. Recusandae quam atque esse accusamus reiciendis incidunt voluptas!
  </Content>
));
