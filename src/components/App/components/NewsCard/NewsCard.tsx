import { Card, CardSubHeader } from 'components/Card/Card';
import React from 'react';
import { observer } from 'mobx-react';
import { NewsStore } from 'stores/NewsStore';
import { PageType } from 'routes';
import { Link } from 'components/Link/Link';
import { NewsCardHeader } from 'components/App/components/NewsCard/components/NewsCardHeader';

type NewsCardProps = { store: typeof NewsStore['Type'] };

export const NewsCard: React.FC<NewsCardProps> = observer(({ store }) => (
  <Card>
    <NewsCardHeader store={store} />
    <CardSubHeader>
      <Link routeName={PageType.view_news} routeParams={{ id: `${store.id}` }}>
        {store.title}
      </Link>
    </CardSubHeader>
    <div dangerouslySetInnerHTML={{ __html: store.description! }}></div>
    {/* <CardFooter>
      <NewsViews>
        <FaEye size={16} /> 0
      </NewsViews>
    </CardFooter> */}
  </Card>
));
