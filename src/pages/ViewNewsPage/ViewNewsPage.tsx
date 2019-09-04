import React from 'react';
import { NewsStore } from 'stores/NewsStore';

export type ViewNewsPageProps = {
  store: typeof NewsStore['Type'];
};

export const ViewNewsPage: React.FC<ViewNewsPageProps> = ({ store }) => (
  <h2>Title: {store.title}</h2>
);
