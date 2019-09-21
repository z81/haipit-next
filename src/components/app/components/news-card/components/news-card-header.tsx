import React from 'react';
import { NewsPath } from 'components/app/components/news-card/components/news-path';
import { Source } from 'components/app/components/news-card/components/source';
import { NewsDate } from 'components/app/components/news-card/components/news-date';
import { NewsViews } from 'components/app/components/news-card/components/news-views';
import { FaEye } from 'react-icons/fa';
import { observer } from 'mobx-react';
import { SourceIcon } from 'components/app/components/news-card/components/source-icon';
import { NewsStore } from 'stores/news-store';
import { CardHeader } from 'components/card/card';

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
