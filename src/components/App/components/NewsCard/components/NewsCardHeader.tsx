import React from 'react';
import { NewsPath } from 'components/App/components/NewsCard/components/NewsPath';
import { Source } from 'components/App/components/NewsCard/components/Source';
import { NewsDate } from 'components/App/components/NewsCard/components/NewsDate';
import { NewsViews } from 'components/App/components/NewsCard/components/NewsViews';
import { FaEye } from 'react-icons/fa';
import { observer } from 'mobx-react';
import { SourceIcon } from 'components/App/components/NewsCard/components/SourceIcon';
import { NewsStore } from 'stores/NewsStore';
import { CardHeader } from 'components/Card/Card';

type NewsCardHeaderProps = { store: typeof NewsStore['Type'] };

export const NewsCardHeader: React.FC<NewsCardHeaderProps> = observer(({ store }) => (
  <CardHeader>
    <NewsPath>{store.path}</NewsPath>
    <Source>
      {store.source.imageUrl && <SourceIcon src={store.source.imageUrl} />}
      {` ${store.source.title}`}
    </Source>
    <NewsDate>{store.date}</NewsDate>
    <NewsViews>
      <FaEye size={16} /> {store.views}
    </NewsViews>
  </CardHeader>
));
