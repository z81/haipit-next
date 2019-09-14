import { Card, CardHeader, CardSubHeader } from 'components/Card/Card';
import React from 'react';
import { observer } from 'mobx-react';
import { NewsStore } from 'stores/NewsStore';
import { FaEye } from 'react-icons/fa';
import { PageType } from 'routes';
import { NewsPath } from './components/NewsPath';
import { NewsDate } from './components/NewsDate';
import { NewsViews } from './components/NewsViews';
import { SourceIcon } from './components/SourceIcon';
import { Source } from './components/Source';
import { Link } from 'components/Link/Link';

type NewsCardProps = { store: typeof NewsStore['Type'] };

export const NewsCard: React.FC<NewsCardProps> = observer(({ store }) => (
  <Card>
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
    <CardSubHeader>
      <Link routeName={PageType.view_news} routeParams={{ id: `${store.id}` }}>
        {store.title}
      </Link>
    </CardSubHeader>
    <div>{store.description}</div>
    {/* <CardFooter>
      <NewsViews>
        <FaEye size={16} /> 0
      </NewsViews>
    </CardFooter> */}
  </Card>
));
