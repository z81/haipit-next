import React from 'react';
import { Content } from 'components/Content/Content';
import { NewsViewPageStore } from 'stores/pageStores/NewsViewPageStore';

export type ViewNewsPageProps = {
  store: typeof NewsViewPageStore['Type'];
};

export const ViewNewsPage: React.FC<ViewNewsPageProps> = ({ store }) => (
  <Content>
    Title: {store.title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio
    sapiente totam aliquam facere atque sunt, incidunt at quaerat explicabo repellat nostrum.
    Recusandae quam atque esse accusamus reiciendis incidunt voluptas!
  </Content>
);
