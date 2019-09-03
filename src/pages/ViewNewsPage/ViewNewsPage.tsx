import React from 'react';
import { NewsStoreType } from 'stores/NewsStore';

export type ViewNewsPageProps = {
  store: NewsStoreType;
};

export const ViewNewsPage: React.FC<ViewNewsPageProps> = ({ store }) => (
  <h2>Title: {store.title}</h2>
);
